import React, { useState } from "react";
import { addMeal } from "../services/mealService";
import "../Styles/AddExtraMeal.css";

interface Props {
  onClose: () => void;
  onMealAdded: () => void;
}

const AddExtraMealModal= ({ onClose, onMealAdded }: Props) => {
  const [date, setDate] = useState(() =>
    new Date().toISOString().slice(0, 3)
  );
  const [mealName, setMealName] = useState("");
  const [weight, setWeight] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const userId = Number(localStorage.getItem("userId"));
    try {
      await addMeal({
        uniquekey: userId,
        date,
        meal_name: mealName,
        taken_weight_grams: weight,
        meal_type: type,
      });
      setLoading(false);
      onMealAdded();
      onClose();
    } catch (err) {
      setLoading(false);
      alert("Error adding meal.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">Add Your Extra meal</span>
          <button className="close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              required
            />
          </div>
          <div className="group">
            <label>Meal name</label>
            <input
              type="text"
              value={mealName}
              onChange={e => setMealName(e.target.value)}
              placeholder="Meal name"
              required
            />
          </div>
          <div className="group">
            <label>Weight grams</label>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Enter the Weight "
              required
            />
          </div>
          <div className="group">
            <label>Meal type</label>
            <input
              type="text"
              value={type}
              onChange={e => setType(e.target.value)}
              placeholder="Meal type (e.g. snack)"
              required
            />
          </div>
          <div className="actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save" disabled={loading}>
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExtraMealModal;
