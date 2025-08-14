import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/DashBoard';
import './Styles/Dashboard.css';
import './Styles/Sidebar.css';
import Login from "./pages/Login";
import Register from "./pages/Register";

const App= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={< Dashboard/>}/>
      </Routes>
    </Router>
  );
};


export default App;
