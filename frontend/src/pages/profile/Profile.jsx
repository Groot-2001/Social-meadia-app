import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
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
                    <div className="profile-info-username"><b>Shiva Silmawala</b> </div>
                    <div className="profile-info-desc">Busy at work</div>
                </div>
            </div>
                <div className="profile-right-bottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
           </div>
    </div>
    </>
  )
}
