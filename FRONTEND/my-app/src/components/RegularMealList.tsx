import "../Styles/RegularmealList.css";

interface Meal {
  id?: number;
  meal_type: string;
  meal_name: string;
  taken_weight_grams: number;
}

interface Props {
  others: Meal[];
  
}

const RegularMealsList= ({ others }:Props ) => (
  <div className="meal-list">
    <div className="card-title">Today Extra Meals</div>
    
    <div className="meal-items">
      {others.length === 0 ? (
        <div className="empty">No regular meals added.</div>
      ) : (
        others.map((meal) => (
          <div key={meal.id} className="meal-card">
            <div className="item-title">
              {meal.meal_type}: {meal.meal_name}
            </div>
            <div>{meal.taken_weight_grams} gms</div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default RegularMealsList;
