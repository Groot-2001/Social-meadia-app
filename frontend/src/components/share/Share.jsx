import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons";
import { useContext, useState } from "react";
import {AuthContext} from "../../context/AuthContext";
import { useRef } from "react";
import axios from "axios";


export default function Share() {
    const {user} = useContext(AuthContext);
    const Pubfol = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null);

    const fileHandler = async (e)=>{
        e.preventDefault();
        const newPost = {
            userId : user._id,
            desc: desc.current.value
        }
        try {
            await axios.post("/post",newPost);
        } catch (err) {
            
        }
    }
  return (
    <div className="share">
      <div className="share-wrapper">
          <div className="share-top">
              <img src={
                    user.profilePicture
                    ? Pubfol+user.profilePicture
                    : Pubfol+"person/Naruto_Avatar.jpeg"
                } 
                alt="" className="share-profile-img" />
              <input placeholder=
                {"What's in your mind "+user.username+"?"}
                className="share-input"
                ref={desc} 
               />
          </div>
          <hr className="share-horizontal" />
          <form className="share-bottom" onSubmit={fileHandler}>
              <div className="share-options">
                  <label htmlFor="file" className="share-options-list">
                      <PermMedia htmlColor="tomato" className="share-icon"/>
                      <span className="share-options-list-text">Photo or Video</span>
                      <input 
                        type="file" 
                        id="file" 
                        accept=".png,.jpeg,.jpg" 
                        onChange={(e)=>setFile(e.target.files[0])}
                      />
                  </label>
                  <div className="share-options-list">
                      <Label htmlColor="blue" className="share-icon"/>
                      <span className="share-options-list-text">Tag</span>
                  </div>
                  <div className="share-options-list">
                      <Room htmlColor="green" className="share-icon"/>
                      <span className="share-options-list-text">Location</span>
                  </div>
                  <div className="share-options-list">
                      <EmojiEmotions htmlColor="orange" className="share-icon"/>
                      <span className="share-options-list-text">Feelings</span>
                  </div>
              </div>
              <button className="share-button" type="submit">Share</button>
          </form>
      </div>
    </div>
  )
}
