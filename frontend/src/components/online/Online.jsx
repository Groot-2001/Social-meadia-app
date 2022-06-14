
import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightbar-friends">
    <div className="rightbar-img-container">
      <img src={user.profilepicture} alt="" className="friends-img" />
      <span className="friends-online"></span>
    </div>
    <span className="username">{user.username}</span>
  </li>
  )
}
