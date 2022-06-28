import { useEffect } from "react";
import { useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username}) {
  const [posts,setPost] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
      const fetchPost = async () =>{
      const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id);
      setPost(res.data.sort((post1,post2)=>{
        return new Date(post2.createdAt) - new Date(post1.createdAt);
      }));
    }
    fetchPost();
  },[username,user._id]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share/>
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}
