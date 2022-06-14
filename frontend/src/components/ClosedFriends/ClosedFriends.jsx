import "./closedfriends.css";

export default function ClosedFriends({user}) {
  return (
         <li className="sidebar-friends-list">
           <img src={user.profilepicture} alt="" className="sidebar-friends-img" />
           <span className="sidebar-friend-name">{user.username}</span>
         </li>
  )
}
