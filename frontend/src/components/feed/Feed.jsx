import { useEffect } from "react";
import { useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Feed({username}) {
  //setting the post state according to the user changes with the help of useState hook
  const [posts,setPost] = useState([]);
  const {user} = useContext(AuthContext);

  //get the users data using asynchronous functions and sort them as recent post should be at top
  useEffect(()=>{
      const fetchPost = async () =>{
      const res = username
        ? await axios.get("/posts/profile/"+username)
        : await axios.get("/posts/timeline/"+user._id);

      setPost(res.data.sort((post1,post2)=>{
        return new Date(post2.createdAt) - new Date(post1.createdAt);
        /* if you are interested with this implementation and want to know more about it: */
        //you can visit:"https://stackabuse.com/how-to-sort-an-array-by-date-in-javascript/"
      }));
    }
    fetchPost();
  },[username,user._id]);

  //creating feed component and fetching all the users post stored in db
  return (
    <div className="feed">
      <div className="feed-wrapper">
        {/*adding props of post in post components*/}
        {(!username || username === user.username) && <Share />}
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}
