import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import Destination from "./components/Destination/Destination";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import Reservation from "./components/Reservation/Reservation";

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App">
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/destination" component={Destination} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/reservation" component={Reservation} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
