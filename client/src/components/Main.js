import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { UserLogin } from "./User/UserLogin";
import { UserHome } from "./User/UserHome";
import { Home } from './Home'
import { AdminLogin } from "./Admin/AdminLogin";
import { Header } from "./Header";
export const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            <UserLogin />
          </Route>
          <Route path="/user/:code">
            <UserHome />
          </Route>

          <Route exact path="/admin">
            <AdminLogin />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
