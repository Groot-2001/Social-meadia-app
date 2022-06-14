import "./sidebar.css";
import {RssFeed,Chat,PlayCircleFilledOutlined,WorkOutline,HelpOutline,Group,Bookmark,School,Event} from "@material-ui/icons"
import { user } from "../../dummyData";
import ClosedFriends from "../ClosedFriends/ClosedFriends";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
       <ul className="sidebar-list">
         <li className="sidebar-list-items">
            <RssFeed className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Feed</span>
         </li>
         <li className="sidebar-list-items">
            <Chat className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Chats</span>
         </li>
         <li className="sidebar-list-items">
            <PlayCircleFilledOutlined className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Videos</span>
         </li>
         <li className="sidebar-list-items">
            <Group className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Groups</span>
         </li>
         <li className="sidebar-list-items">
            <Bookmark className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Bookmark</span>
         </li>
         <li className="sidebar-list-items">
            <HelpOutline className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Questions</span>
         </li>
         <li className="sidebar-list-items">
            <WorkOutline className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Jobs</span>
         </li>
         <li className="sidebar-list-items">
            <Event className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Events</span>
         </li>
         <li className="sidebar-list-items">
            <School className="sidebar-Icons"/>
            <span className="sidebar-list-items-text">Courses</span>
         </li>
       </ul>
       <button className="sidebar-button">Show more</button>
       <hr className="sidebar-horizontal"/>
       <ul className="sidebar-friends">
        {user.map(u =>(
          <ClosedFriends key={u.id} user={u}/>
        ))}
       </ul>
      </div>
    </div>
  )
}
