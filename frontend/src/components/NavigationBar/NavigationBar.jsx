import React from "react";
import "./navigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function NavigationBar() {
  return (
    <nav>
      <HamburgerMenu />
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
          <li className="rightLink">Destination</li>
        </Link>
        <Link to="/registration">
          <li className="rightLink">Registration</li>
        </Link>
        <Link to="/login">
          <li className="rightLink">Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
