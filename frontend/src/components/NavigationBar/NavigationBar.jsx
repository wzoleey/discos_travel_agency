import React from "react";
import "./navigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul className="nav_links">
        <Link to="/">
          <li className="discosTravel">
            <span className="D">D</span>iscos
            <span className="travel">
              <span className="t">t</span>ravel
            </span>
            <i class="fas fa-envelope fa-1x"></i>
            <i class="fas fa-phone-alt fa-1x"></i>
            <i class="fas fa-mobile-alt"></i>
          </li>
        </Link>
        <Link to="/destination">
          <li>Destination</li>
        </Link>
        {/*<Link to="/last_minute">
          <li>Last Minute</li>
				</Link>*/}
        <Link to="/registration">
          <li>Registration</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
