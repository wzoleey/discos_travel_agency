import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import Destination from "./components/Destination/Destination";
import LastMinute from "./components/LastMinute/LastMinute";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/destination" component={Destination} />
          <Route path="/last_minute" component={LastMinute} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
			
    </Router>
  );
}

export default App;
