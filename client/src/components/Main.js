import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { UserLogin } from "./User/UserLogin";
import { UserHome } from "./User/UserHome";
import { Home } from './Home'
import { AdminLogin } from "./Admin/AdminLogin";
import { Header } from "./Header";
import { UserFlashcard } from "./User/UserFlashcard";
import { AddCard } from "./User/AddCard";
import { Study } from "./User/Study";
import { UserStats } from "./User/UserStats";
export const Main = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <UserHome />
          </Route>
          <Route exact path="/study">
            <Study />
          </Route>

          <Route exact path="/add">
            <AddCard />
          </Route>

          
          <Route exact path="/stats">
            <UserStats />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
};
