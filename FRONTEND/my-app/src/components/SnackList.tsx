
import "../Styles/Snacklist.css";
import apple from "../assets/1.avif"

const mealRows = [
  {
    time: "8:00am Breakfast",
    items: [
      { img: "", label: "1/2 glass Milk" },
      { img: {apple}, label: "1 Apple" },
      { img: "/images/bread.jpg", label: "2 Slice of Bread" }
    ]
  },
  {
    time: "12:45pm Lunch",
    items: [
      { img: "/images/salad.jpg", label: "Salad Large" },
      { img: "/images/rice.jpg", label: "1 Bowl Rice" },
      { img: "/images/chicken.jpg", label: "2 pcs Chicken" }
    ]
  },
  {
    time: "4:15pm Snacks",
    items: [
      { img: "/images/coffee.jpg", label: "1 cup Coffee" },
      { img: "/images/cookies.jpg", label: "2 Cookies" }
    ]
  },
  {
    time: "8:10pm Dinner",
    items: [
      { img: "/images/vegsubji.jpg", label: "Veg Subji" },
      { img: "/images/roti.jpg", label: "2 Roti" }
    ]
  }
];

const RegularMealsList = () => {
  return (
    <div className="today-summary-card">
      <div className="today-header">
        <span className="calendar-icon">📅</span>
        <span className="today-label">Today</span>
        <span className="diet-chat">Diet Chat Recommended</span>
      </div>
      <div className="today-meals-block">
        {mealRows.map((row, idx) => (
          <div className="meal-row" key={idx}>
            <div className="meal-row-time">{row.time}</div>
            <div className="meal-row-items">
              {row.items.map((item, xi) => (
                <div className="meal-card" key={xi}>
                  <img src={apple} alt={item.label} className="meal-img" />
                  <div className="meal-card-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="today-calorie-box">
        <div className="calorie-row"><span>Today target :</span> <span className="cal-val">243 Calorie</span></div>
        <div className="calorie-row"><span>Your Customise :</span> <span className="cal-val">367 Calorie</span></div>
      </div>
    </div>
  );
};

export default RegularMealsList;
