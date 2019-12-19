import React from "react";
import MessageBoard from "../MessageBoard";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h3>Math Board</h3>
        <MessageBoard></MessageBoard>
      </div>
    );
  }
}

export default Jumbotron;
