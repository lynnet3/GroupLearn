import React from "react";
import "./style.css"

class NavBar extends React.Component {
  render() {
    return (
      <div className="ui secondary menu" id="nav">
        <a className="active item" href="/">
          <i className="home icon" id="home-nav" />
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui fluid icon input">
              <input type="text" placeholder="Search..." id="place-nav" />
              <i className="search link icon" id="search-nav" />
            </div>
          </div>
          <div className="ui compact menu">
            <div className="ui simple dropdown item" id="subjects-dd">
              Subjects
              <i className="book icon"/>
              <div className="menu">
              <a className="active item" href="/subjects/Math">
                <div className="item" id="math-dd">
                  Math
                </div>
                </a>
                <a className="active item" href="/subjects/Science">
                <div className="item" id="science-dd">
                  Science
                </div>
                </a>
                <a className="active item" href="/subjects/Art">
                <div className="item" id="art-dd">
                  Art
                </div>
                </a>
                <a className="active item" href="/subjects/History">
                <div className="item" id="history-dd">
                  History
                </div>
                </a>
              </div>
            </div>
          </div>
          <a className="item" id="subjects-dd" href="/">
            Friends
            <i className="child icon" id="friend-nav"></i>
          </a>
          <a className="ui item" id="signup-nav" href="/signup">
            Sign Up
          </a>
          <a className="ui item" id="login-nav" href="/login">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
