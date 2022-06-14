import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
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
                <div className="register-box">
                    <input placeholder="First Name" className="register-input" />
                    <input placeholder="last Name" className="register-input"/>
                    <input placeholder="Email" className="register-input" />
                    <input placeholder="Password" className="register-input" />
                    <input placeholder="re-enter Password" className="register-input" />
                    <button className="register-btn">Create</button>
                    <span className="option-symbol">Or</span>
                    <Link to="/frontend/src/pages/Login/Login.jsx" className="btn btn-primary">Login</Link>
                 </div>
            </div>
        </div>
    </div>
  )
}

