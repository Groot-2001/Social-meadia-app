import   Axios  from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import "./conversation.css";

export default function Conversation({conversation,currentUser}) {
  const [user,setUser] = useState("");

  const pubfol = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const friendId = conversation.member.find((m)=> m !== currentUser._id);

    const getUser = async () =>{
      try {
        const res = await Axios.get("/users?userId="+friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  },[currentUser,conversation]);

  return (
    <div className='conversation'>
      <img src={user.profilePicture? pubfol+user.profilePicture:pubfol+"noUser2.jpg"}
          alt="" 
          className="conversation-img" />
      <span className="conversation-name">{user.username}</span>
    </div>
  )
}
