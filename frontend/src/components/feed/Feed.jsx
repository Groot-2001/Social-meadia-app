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
      const res = axios.get("posts/timeline/629dbd87bac17b1c564c7cd8")
      console.log(res);
    }
    fetchPost();
  },[]);

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share/>
        {/* {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))} */}
        
      </div>
    </div>
  )
}
