import React from 'react'
import "./chatonline.css";

export default function ChatOnline() {
  return (
    <div className='chat-online'>
        <div className="chat-online-friends">
            <div className="chat-img-container">
            <img 
                src="https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
                alt="" className="online-friends-img" 
            />
            <div className="online-friends-badge"></div>
            </div>
            <span className="chat-online-friends-name">Shiva</span>
        </div>
    </div>
  )
}
