import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const navigate = useNavigate();
   return (
      <nav className="navbar">
         <div>
            <h1 className="logo" onClick={() => navigate("/")}>
               Untitled UI
            </h1>
         </div>
         <div className="nav-items">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/")}>Blog</li>
            <li>About us</li>
         </div>
         <div>
            <button className="create-button" onClick={() => navigate("/create-blog")}>
               Create
            </button>
         </div>
      </nav>
   );
};

export default Navbar;
