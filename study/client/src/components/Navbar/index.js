import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#news">Profile</a>
        <div className="dropdown">
          <button className="dropbtn">
            Subjects
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <a href="#">English</a>
            <a href="#">History</a>
            <a href="#">Science</a>
          </div>
        </div>
        <a href="#Settings">Settings</a>
      </div>
    );
  }
}

export default Navbar;
