import React from "react";
import "../Nav/style.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui fluid secondary pointing menu">
        <a className="active itebm" href="index.html">
          Home
        </a>
        <a className="item">Messages</a>
        <a className="item">Study Buddies</a>
        <a className="item">Subjects</a>
        <div className="right menu">
          <a className="ui item" href="login.html">
            Login
          </a>
          <a className="ui item">Logout</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
