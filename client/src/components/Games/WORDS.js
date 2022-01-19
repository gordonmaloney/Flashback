import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";


export function WORDS() {
  const dispatch = useDispatch();
  const [localUser, setLocalUser] = useState();


  //get all users
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const users = useSelector((state) => state.posts);


  
  //set user to match the user in the local storage
  const [user, setUser] = useState();

  useEffect(() => {
    setLocalUser(JSON.parse(localStorage.getItem("profile")));
  }, [localStorage]);

  useEffect(() => {
    setUser(users.filter((user) => user.code == localUser?.code)[0]);
  }, [users, localUser]);



  //create an array of 8 random words from the users cards object
  let RandomArray = []
  if (user) {
    for (let i = 0; RandomArray.length < 8; i++) {
      let RanNum = Math.floor(Math.random() * user.cards.length);
      !RandomArray.includes(user.cards[RanNum]) && RandomArray.push(user.cards[RanNum])
    }
  }




  //create duplicates of each word and make an array of them all, once with the front of the card in first place and once with the back in first place
  let shuffledWords = [];

RandomArray.map((word) => {
  let newWord = { Q: word.front, A: word.back };
  let newWord2 = { Q: word.back, A: word.front };
  shuffledWords.push(newWord);
  shuffledWords.push(newWord2);
});



//shuffle that array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

  shuffleArray(shuffledWords);



  //return this array so I can call it in other functions
  return { shuffledWords }
};