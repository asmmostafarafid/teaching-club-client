import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";

import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation/OrderConfirmation";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/OrderConfirmation/:id">
            <OrderConfirmation></OrderConfirmation>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
