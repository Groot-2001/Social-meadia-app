import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({});

  useEffect(()=>{
    const fetchUser = async () =>{
    const res = await axios.get(`/users?username=naruto`);
    setUser(res.data);
  }
  fetchUser();
},[]);
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img src={`${Pubfol}post/1.jpeg`} alt="" className="profile-cover-img" />
                    <img src={`${Pubfol}person/icon.png`} alt="" className="profile-user-img" />
                </div>
                <div className="profile-info">
                    <div className="profile-info-username"><b>{user.username}</b> </div>
                    <div className="profile-info-desc">{user.desc}</div>
                </div>
            </div>
                <div className="profile-right-bottom">
                    <Feed username="naruto"/> 
                    <Rightbar user={user}/>
                </div>
           </div>
    </div>
    </>
  )
}
