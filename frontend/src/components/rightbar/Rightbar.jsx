import "./rightbar.css"
import {User} from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

export default function Righbar({user}) {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(()=>{
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);

    } catch (err) {
    }
  };

  const HomeRightbar =()=>{
    return (
      <>
     <div className="birthday-container">
          <img src="assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today!
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbar-ad" />
      
      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-friends-list">
        {User.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        
      </ul>
    </>
    );
  };

  const ProfileRightbar = () =>{
    return(
      <>
     {user.username !== currentUser.username && (
          <button className="follow-btn" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
      <h4 className="rightbar-side-title">User-Status</h4>
      <div className="rightbar-info">
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">City:</span>
          <span className="rightbar-info-value">{user.city}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">From:</span>
          <span className="rightbar-info-value">{user.from}</span>
        </div>
        <div className="rightbar-info-item">
          <span className="rightbar-info-key">status:</span>
          <span className="rightbar-info-value">{user.relationship ===1?"single":user.relationship === 2?"married":"FindOne"}</span>
        </div>
      </div>
      <h4 className="rightbar-side-title">Friends</h4>
      <div className="friends-followings">
        {friends.map((friend)=>(
          <Link to={"/profile/"+friend.username}style={{textDecoration:"none"}}>
            <div className="friends">
             <img src={
                friend.profilePicture ? 
                Pubfol+friend.profilePicture 
                :Pubfol+"person/Naruto_Avatar.jpeg"
              }
              alt="" className="friends-pic" />
             <span className="friend-name">{friend.username}</span>
           </div>
          </Link>
        ))}
       
      </div>
      </>
    );
  }
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user?<ProfileRightbar/>:<HomeRightbar/>}
      </div>
    </div>
  )
}
