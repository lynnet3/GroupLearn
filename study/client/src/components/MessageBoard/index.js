import React from "react";
import Post from "../Post";
import "./style.css"
class MessageBoard extends React.Component {

  render() {
    console.log("hiyah friend")
    if (this.props.data.data) {
    console.log(this.props.data.data)
  }
    return (
      <div className="MessageBoard">
        {this.props.data.data.map(post => (
        <Post
        key={post._id}
         name = {post.user.userName}
         subject = {post.subject}
         email = {post.user.email}
         location = {post.location}
         content = {post.content}
        >
        </Post> 
        ))}
      </div> 
    );
  }
}
export default MessageBoard;