import { useContext,useRef } from "react";
import { LoginCalls } from "../../apiCalls";
import "./login.css";
import {AuthContext} from "../../context/AuthContext";

export default function Login() {
    const email = useRef();
    const password = useRef();

    const {user,isFetching,dispatch} = useContext(AuthContext);

    const handlfunc = (e) =>{
        e.preventDefault();
        LoginCalls({ email: email.current.value, password: password.current.value},dispatch);
        };
    console.log(user);

  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="app-logo">FunChat</h3>
                <span className="company-slogan">
                    Connect with friends and the world around you on FunChat.
                </span>
            </div>
            <div className="login-right" >
                <form className="login-box" onSubmit={handlfunc}>
                    <input placeholder="Email" type="email" required className="login-input" ref={email}/>
                    <input placeholder="Password" type="password" required  minLength={6} className="login-input" ref={password}/>
                    <button className="login-btn">{isFetching?"Loading":"Login"}</button>
                    <span className="password-forgot">forgot password ?</span>
                    <button className="create-button">Create An Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
