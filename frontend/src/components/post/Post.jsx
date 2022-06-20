import { MoreVert } from "@material-ui/icons";
import "./post.css";
// import {user} from "../../dummyData";
import axios from "axios";
import { useEffect, useState } from "react";
import {format} from "timeago.js"
import {Link} from "react-router-dom";

export default function Post({post}) {
  const [like,setlike] = useState(post.likes.length);
  const [islike,setislike] = useState(false);
  const [user,setUser] = useState({});

  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
      const fetchUser = async () =>{
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchUser();
  },[post.userId]);
  const likehandler = () =>{
    setlike(islike? like+1 : like-1);
    setislike(!islike);
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <Link to={`/profile/${user.username}`}>
              <img src={user.profilePicture || Pubfol+"person/Naruto_Avatar.jpeg"} alt="" className="post-top-img" />
            </Link>
            <span className="post-top-left-username">{user.username}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVert/>
          </div>
        </div>
        <div className="post-center">
          <span className="post-description">{post?.desc}</span>
          <img src={Pubfol+post.img} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src={`${Pubfol}like.png`} alt="" onClick={likehandler} className="post-reaction" />
            <img src={`${Pubfol}heart.png`} alt="" onClick={likehandler} className="post-reaction" />
            <span className="post-reaction-counter">{like} people liked it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
