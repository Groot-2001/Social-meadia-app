import   axios  from 'axios';
import { useState,useEffect } from 'react';
import "./conversation.css";

export default function Conversation({unique,currentUser}) {  
  const [user,setUser] = useState("");
  const pubfol = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const friendId = unique.member.find((m)=> m !== currentUser._id);

    const getUser = async () =>{
      try {
        const res = await axios.get("/users?userId="+friendId);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  },[currentUser,unique]);

  return (
    <div className='conversation'>
      <img src={user.profilePicture
        ?pubfol+user.profilePicture
        :pubfol+"/person/Naruto_Avatar.jpeg"
        }
          alt="" 
          className="conversation-img" />
      <span className="conversation-name">{user.username}</span>
    </div>
  )
}
