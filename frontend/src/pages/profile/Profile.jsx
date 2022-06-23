import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});
  const username = useParams().username;


  useEffect(()=>{
    const fetchUser = async () =>{
    const res = await axios.get(`/users?username=${username}`);
    setUser(res.data);
  }
  fetchUser();
},[username]);
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img 
                        src={
                          user.coverPicture
                            ? Pubfol+user.coverPicture
                            : Pubfol+"coverpicCrow.jpg"
                        }
                        alt=""
                        className="profile-cover-img" />
                    <img src={
                      user.profilePicture
                        ? Pubfol + user.profilePicture
                        : Pubfol+"person/Naruto_Avatar.jpeg"
                    }
                      alt="" 
                      className="profile-user-img" />
                </div>
                <div className="profile-info">
                    <div className="profile-info-username"><b>{user.username}</b> </div>
                    <div className="profile-info-desc">{user.desc}</div>
                </div>
            </div>
                <div className="profile-right-bottom">
                    <Feed username={username}/> 
                    <Rightbar user={user}/>
                </div>
           </div>
    </div>
    </>
  );
}
