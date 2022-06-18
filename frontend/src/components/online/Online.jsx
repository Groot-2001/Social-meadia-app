
import "./online.css";

export default function Online({user}) {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbar-friends">
    <div className="rightbar-img-container">
      <img src={Pubfol+user.profilepicture} alt="" className="friends-img" />
      <span className="friends-online"></span>
    </div>
    <span className="username">{user.username}</span>
  </li>
  )
}
