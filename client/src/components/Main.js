import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { UserLogin } from "./User/UserLogin";
import { UserHome } from "./User/UserHome";


export const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <UserLogin />
          </Route>
          <Route path="/user/:code">
            <UserHome />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
