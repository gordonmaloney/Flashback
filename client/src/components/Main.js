import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { UserHome } from "./User/UserHome";
import { Home } from './Home'
import { Header } from "./Header";
import { AddCard } from "./User/AddCard";
import { Study } from "./User/Study";
import { UserStats } from "./User/UserStats";
import { AllCards } from './User/AllCards';

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

          <Route exact path="/allcards">
            <AllCards />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
};
