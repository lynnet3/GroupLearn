import React from "react";
import "../../client/public/assets/styles/login.css";

class Login extends React.Component {
  render() {
    return (
      <form action="/action_page.php" method="post">
        <div className="imgcontainer">
          <img src="assets/images/logo.jpg" alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <div className="ui animated fade button" tabIndex={0} id="login-btn">
            <div className="visible content">Login</div>
            <div className="hidden content">Study!</div>
          </div>
          <label>
            <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <div
          className="container"
          style={{
            backgroundColor: "#f1f1f1"
          }}
        >
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot your <a href="#">password?</a>
          </span>
        </div>
      </form>
    );
  }
}

export default Login;
