import React from "react";
import "./style.css"

class Cancel extends React.Component {
  render() {
    return (
      <button type="button" className="btn cancel" onclick="closeForm()">
        Close
      </button>
    );
  }
}

export default Cancel;