import React from "react";
import { UserLogin } from "./User/UserLogin";
import { AdminLink } from './Admin/AdminLink'

export const Home = () => {
  return (
    <div>
      <h1>Welcome to FlashBack</h1>

    <br/><br/><br/>
    <h2>User Login:</h2>
    <UserLogin />


    <br/><br/><br/>
    <h2>Admin Login:</h2>
    <AdminLink />
    </div>
  );
};
