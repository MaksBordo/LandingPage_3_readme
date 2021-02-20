import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { AnimatedSwitch } from "react-router-transition";
import "./AnimatedSwitch.scss";

export const Routes = () => {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/LandingPage_3/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/LandingPage_3">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </AnimatedSwitch>
  );
};
