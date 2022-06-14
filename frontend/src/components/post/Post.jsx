import { MoreVert } from "@material-ui/icons";
import "./post.css";
import {user} from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {
  const [like,setlike] = useState(post.like);
  const [islike,setislike] = useState(false);

  const likehandler = () =>{
    setlike(islike? like+1 : like-1);
    setislike(!islike);
  }

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src={user.filter(u=>u.id===post.userId)[0].profilepicture} alt="" className="post-top-img" />
            <span className="post-top-left-username">{user.filter(u=>u.id===post.userId)[0].username}</span>
            <span className="post-date">1 hr ago</span>
          </div>
          <div className="post-top-right">
            <MoreVert/>
          </div>
        </div>
        <div className="post-center">
          <span className="post-description">{post?.desc}</span>
          <img src={post.photo} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" onClick={likehandler} className="post-reaction" />
            <img src="/assets/heart.png" alt="" onClick={likehandler} className="post-reaction" />
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
