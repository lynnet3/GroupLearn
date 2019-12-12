import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <a className="active item" href="index.html">
          Home
        </a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
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
