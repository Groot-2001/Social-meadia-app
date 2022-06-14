import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="app-logo">FunChat</h3>
                <span className="company-slogan">
                    Connect with friends and the world around you on FunChat.
                </span>
            </div>
            <div className="login-right">
                <div className="login-box">
                    <input placeholder="Email" className="login-input" />
                    <input placeholder="Password" className="login-input" />
                    <button className="login-btn">Login</button>
                    <span className="password-forgot">forgot password ?</span>
                    <button className="create-button">Create An Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
