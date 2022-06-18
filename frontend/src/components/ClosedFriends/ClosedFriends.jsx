import "./closedfriends.css";

export default function ClosedFriends({user}) {
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
         <li className="sidebar-friends-list">
           <img src={Pubfol+user.profilepicture} alt="" className="sidebar-friends-img" />
           <span className="sidebar-friend-name">{user.username}</span>
         </li>
  )
}
