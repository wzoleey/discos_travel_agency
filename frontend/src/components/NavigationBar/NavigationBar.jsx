import React from "react";
import "./navigationBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul className="nav_links">
        <Link to="/">
          <li>Home |</li>
        </Link>
        <Link to="/destination">
          <li>Destination |</li>
        </Link>
        <Link to="/last_minute">
          <li>Last Minute |</li>
        </Link>
				<Link to="/registration">
          <li>Registration |</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavigationBar;
