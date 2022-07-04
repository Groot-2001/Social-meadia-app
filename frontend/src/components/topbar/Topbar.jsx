import "./Topbar.css";
import {Search,Person, Chat, Notifications} from '@material-ui/icons';
import {Link} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="Topbar-Container">

        <div className="topbar-left">
          <Link to="/" className="link">
              <span className="logo">FunChat</span>
          </Link>
        </div>


        <div className="topbar-center">
          <div className="searchbar">
              <Search className="searchIcon"/>
              <input placeholder="search for friends,posts or videos" className="searchInput" />
          </div>
        </div>

        <div className="topbar-right">

          <div className="topbar-links">
            <span className="topbar-links">Homepage</span>
            <span className="topbar-links">Timeline</span>
          </div>

          <div className="topbar-icons">
            <div className="topbar-icons-item">
              <Person/>
              <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icons-item">
              <Link to={"/messenger"}>
                  <Chat className="chat-icon"/>
              </Link>
              <span className="topbar-icon-badge">2</span>
            </div>
            <div className="topbar-icons-item">
              <Notifications/>
              <span className="topbar-icon-badge">1</span>
            </div>

          </div>
          <Link to={`/profile/${user.username}`}>
            <img src={
              user.profilePicture
              ?Pubfol+user.profilePicture
              :Pubfol+"person/Naruto_Avatar.jpeg"
            } 
              alt="" className="topbar-Img" 
              />
          </Link>
        </div>
    </div>
  )
}
