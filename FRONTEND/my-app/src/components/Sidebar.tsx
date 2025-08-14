import "../Styles/Sidebar.css"

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo">FitMealPartner</div>
    <nav>
      <a className="active">Home</a>
      <a>About Us</a>
      <a>Category</a>
      <a>Blogs</a>
      <a>Profile</a>
    </nav>
    <button className="signout">Signout</button>
  </div>
);

export default Sidebar;
