import React from "react";
import Post from "../Post";
import "./style.css"
class MessageBoard extends React.Component {
  render() {
    return (
      <div className="MessageBoard">
        <Post
        name = "fred"
        email = "fred@hotmail.com"
        location = "Starbucks"
        content = "Hey, who wants to meet up for coffee and reading european history?"
        >
        </Post>
        <Post></Post>
        <Post></Post>
      </div>
    );
  }
}
export default MessageBoard;