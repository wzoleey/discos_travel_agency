import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import IndexPage from "./components/IndexPage/IndexPage";
import Destination from "./components/Destination/Destination";
import LastMinute from "./components/LastMinute/LastMinute";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/destination" component={Destination} />
          <Route path="/last_minute" component={LastMinute} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
