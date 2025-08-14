import { useEffect, useState } from "react";
import { getMealsByUser } from "../services/mealService";
import Sidebar from "./Sidebar";
import HeaderBar from "./Header";
import SnacksList from "./SnackList";
import AddExtraMealModal from "./AddExtraMeal";
import RegularMealsList from "./RegularMealList";
import CalorieSummary from "./CaloriesSummary";
import ImageCarousel from "./ImageCarousel";


import "../Styles/Dashboard.css";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [meals, setMeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const userId = Number(localStorage.getItem("userId"));

  const fetchMeals = () => {
    if (userId) {
      setLoading(true);
      getMealsByUser(userId)
        .then((res) => {
          setMeals(res.data || res.data.data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching meals:", err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [userId]);

  const today = new Date().toISOString().slice(0, 10);
  const todayMeals = meals.filter((m) => m.date?.startsWith(today));
  const others = todayMeals.filter((m) => m.meal_type !== "snack");
  const totalCalories = todayMeals.reduce(
    (sum, m) => sum + (m.taken_weight_grams || 0),
    0
  );

  return (
    <div>
    <div className="dashboard-root">
         <Sidebar />
 
      <div className="dashboard-main">
        <HeaderBar onAddClick={() => setShowModal(true)} />
        {showModal && (
          <AddExtraMealModal
            onClose={() => setShowModal(false)}
            onMealAdded={fetchMeals}
          />
        )}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="meals-flex">
           
            <SnacksList />
            <CalorieSummary totalCalories={totalCalories} />
            <RegularMealsList others={others} />
           
            
          </div>
        )}
      </div>
      
    </div>
    <ImageCarousel />
  
    
    </div>
    
  );
};

export default Dashboard;
