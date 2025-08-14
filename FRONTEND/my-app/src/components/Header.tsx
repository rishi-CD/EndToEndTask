import "../Styles/Header.css";
import logo from "../assets/TitleLogo.png"

interface Props {
  onAddClick: () => void;
}

const HeaderBar = ({ onAddClick }: Props) => (
  <div className="header">
    <span className="title">Your Diet Planner</span>
    <div className="right-section">
      <button className="add-meal" onClick={onAddClick}>
        Add your Extra Meal
      </button>
      <img src={logo} alt="logo"></img>
    </div>
  </div>
);

export default HeaderBar;
