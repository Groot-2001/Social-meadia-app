import "./messenger.css";
import React, { useContext, useState, useEffect } from "react";
import Topbar from "../components/Topbar/Topbar";
import Conversation from "../components/conversations/Conversation";
import Message from "../components/Message/Message";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ChatOnline from "../components/chatonline/ChatOnline";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useRef } from "react";

export default function Messenger() {
  const [conversations,setConversation] = useState([]);
  const [currentChat,setCurrentchat] = useState("");
  const [messages,setMessages] = useState([]);
  const [newMessage,setnewMessage] = useState("");
  const {user} = useContext(AuthContext);
  const scrollRef = useRef();

  //conversation get handler
  useEffect(()=>{
    const getConversation = async () =>{
      try {
        const response = await axios.get("/conversation/"+user._id);
        setConversation(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    getConversation();
  },[user._id]);

  //get a messages according to current user
 useEffect(()=>{
    const getMessages = async () =>{
        try {
          const res = await axios.get("/message/"+currentChat._id);
          setMessages(res.data);
        } catch (error) {
          console.log(error);
        }
    }
    getMessages();
 },[currentChat]);


 //new chat message post handler
 const handleSubmit = async (e)=>{
  e.preventDefault();
  const Newmessage ={
      sender:user._id,
      text:newMessage,
      conversationId:currentChat._id,  
  };
  try {
    const res = await axios.post("/message",Newmessage);
    setMessages([...messages,res.data]);
    setnewMessage("");{/* after the message submit clear the input from text area */}
  } catch (error) {
    console.log(error);
  }
 };

 //whenever a new message send scroll-bar comes to at bottom
 useEffect(()=>{
  {/*It does not work initially because by the time your component function run there is no elements yet.*/}
  {/*Hence,we need to check if there is an element present or not then scroll or else just return from there*/}
  if (!scrollRef.current) return;
  scrollRef.current.scrollIntoView({ behavior: "smooth" });
 },[messages]);

  return(
    <div>
    <Topbar/>
       <div className="Messenger">
          <div className="chat-menu">
            <div className="chat-menu-wrapper">
                <input placeholder="search for friends" className="chat-menu-input" />
                <hr />
                {conversations.map((u)=>(
                  <div className="container" onClick={()=>setCurrentchat(u)}>
                      <Conversation conversation={u} currentUser={user}/>
                  </div>
                    
                ))}
               
            </div>
          </div>
          <div className="chat-box">
            <div className="chat-box-wrapper">
              {
                currentChat ?
                <>
                <div className="chat-box-top">
                  {
                    messages.map((m)=>(
                      <div ref={scrollRef}>
                         <Message message={m} own={m.sender === user._id}/>
                      </div>
                    ))
                  }
                  
                </div>
                <div className="chat-box-bottom">
                  <SentimentSatisfiedAltIcon className="chat-emoji"/>
                  <textarea 
                    placeholder="write something..." 
                    className="chat-bottom-input"
                    onChange={(e)=>setnewMessage(e.target.value)}
                    value={newMessage}
                    />
                  <button className="chat-send-button" onClick={handleSubmit}>Send</button>
                </div>
                </>
                : <span className="no-chat">Open a Conversation to start a Chat</span> 
                }
            </div>
          </div>
          <div className="chat-online">
            <div className="chat-online-wrapper">
                <span className="online-heading">Active user</span>
                 <ChatOnline/>
            </div>
          </div>
       </div>
    </div>
  )
}
