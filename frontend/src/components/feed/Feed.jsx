import { useEffect } from "react";
import { useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";

export default function Feed() {
  const [posts,setPost] = useState([]);
 
  useEffect(()=>{
      const fetchPost = async () =>{
      const res = await axios.get("posts/timeline/629db603bac17b1c564c7cd0");
      setPost(res.data);
    }
    fetchPost();
  },[]);

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
