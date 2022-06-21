import { useRef } from "react";
import "./login.css";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handlfunc = (e) =>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="app-logo">FunChat</h3>
                <span className="company-slogan">
                    Connect with friends and the world around you on FunChat.
                </span>
            </div>
            <form className="login-right" onSubmit={handlfunc}>
                <div className="login-box">
                    <input 
                        placeholder="Email" 
                        type={"email"}
                        required 
                        className="login-input"
                        ref={email}
                    />

                    <input 
                        placeholder="Password" 
                        type={"password"}
                        required 
                        minLength={6}
                        className="login-input"
                        ref={password}
                    />

                    <button className="login-btn">Login</button>
                    <span className="password-forgot">forgot password ?</span>
                    <button className="create-button">Create An Account</button>
                </div>
            </form>
        </div>
    </div>
  )
}
