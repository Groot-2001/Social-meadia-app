import "./register.css";
import { useRef } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function Register() {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const passwordAgain = useRef();
    const history = useHistory();


    const handlfunc = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("password doesn't matched!!");
        }else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value,
            };
            try {
                await axios.post("/auth/register",user);
                history.push("/login");
            } catch (error) {
                console.log(error);
            }
        }
   
    };

  return (
    <div className="register">
        <div className="register-wrapper">
            <div className="register-left">
                <h3 className="app-logo">FunChat</h3>
                <span className="company-slogan">
                    Connect with friends and the world around you on FunChat.
                </span>
            </div>
            <div className="register-right">
                <form className="register-box" onSubmit={handlfunc}>
                    <input placeholder="First Name" required ref={username} className="register-input" />
                    <input placeholder="last Name" className="register-input"/>
                    <input placeholder="Email" type="email" required ref={email} className="register-input" />
                    <input placeholder="Password" type="password" minLength="6" required ref={password} className="register-input" />
                    <input placeholder="re-enter Password" required  ref={passwordAgain} className="register-input" />
                    <button className="register-btn" type="submit">Create</button>
                    <span className="option-symbol">OR</span>
                    <button className="create-button">Login</button>
                 </form>
            </div>
        </div>
    </div>
  )
}

