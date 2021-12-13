import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import { FBCard } from "../SubComponents/FBCard";
import { UserIntro } from "./UserIntro";
import { UserStats } from "./UserStats";


export const UserHome = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const history = useHistory();


  const [localUser, setLocalUser] = useState();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const users = useSelector((state) => state.posts);
  const [user, setUser] = useState();

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.getItem("profile")));
  }, [localStorage]);


  useEffect(() => {
    setUser(users.filter((user) => user.code == localUser?.code)[0]);
  }, [users, location, localUser]);



  return (
    <div>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />

      {user ? (
        <>
        
          <UserIntro user={user}/>

        </>
        
      ) : (
<center><h1>Something has gone wrong... <br/><br/>
Are you sure you got your code right?</h1></center>
      )}
    </div>
  );
};
