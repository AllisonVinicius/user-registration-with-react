import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../../Components/Home/Home";
import User from "../../Components/User/User";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={User} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
