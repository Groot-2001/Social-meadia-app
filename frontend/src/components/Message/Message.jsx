import React from 'react'
import "./message.css";
import {format} from "timeago.js";
export default function Message({message,own}) {
  return (
    <div className={own?"Message own":"Message"}>
      <div className="message-top">
        <img src={message.profilepicture?message.profilepicture:"https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"}
         alt="" 
         className="message-img" />
         <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">{format(message.createdAt)}</div>
    </div>
  )
}
