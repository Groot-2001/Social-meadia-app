import "./rightbar.css"
import {User} from "../../dummyData";
import Online from "../online/Online";


export default function Righbar({user}) {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar =()=>{
    return (
      <>
     <div className="birthday-container">
          <img src="/assets/gift.png" alt="" className="birthday-img" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today!
          </span>
        </div>
        <img src="/assets/ad.avif" alt="" className="rightbar-ad" />
      
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
        <div className="friends">
          <img src={`${Pubfol}person/icon.png`} alt="" className="friends-pic" />
          <span className="friend-name">You</span>
        </div>
        <div className="friends">
          <img src={`${Pubfol}person/2.jpeg`} alt="" className="friends-pic" />
          <span className="friend-name">Jhon carter</span>
        </div>
        <div className="friends">
          <img src={`${Pubfol}person/3.jpeg`} alt="" className="friends-pic" />
          <span className="friend-name">Jhon carter</span>
        </div>
        <div className="friends">
          <img src={`${Pubfol}person/4.jpeg`} alt="" className="friends-pic" />
          <span className="friend-name">Jhon carter</span>
        </div>
        <div className="friends">
          <img src={`${Pubfol}person/5.jpeg`} alt="" className="friends-pic" />
          <span className="friend-name">Jhon carter</span>
        </div>
        <div className="friends">
          <img src={`${Pubfol}person/5.jpeg`} alt="" className="friends-pic" />
          <span className="friend-name">Jhon carter</span>
        </div>
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
