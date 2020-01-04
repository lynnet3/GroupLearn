import React from "react";
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div id="header-content">
        <header>
          <h1>{this.props.subject} Group</h1>
        </header>
      </div>
    );
  }
}

export default Header;