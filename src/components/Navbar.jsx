import './Navbar.css'
import React from "react";
import { NavLink,
         BrowserRouter as Router,
         Switch,
         Link
 } from "react-router-dom";



function CustNavbar(){
    return (
        <div className="cust-navbar">
          <ul>
            <li>Hem</li>
            <li>OSA</li>
            <li>SOVPLATS</li>
            <li>TAL</li>
            <li>GÅVOR</li>

          </ul>
        </div>
    )
}

export default CustNavbar;