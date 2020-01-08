import React from "react";
import "./style.css"


const Post = props => (
    
<div className="post-container2">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
            />
    <p>{props.name}</p>
    <p>{props.subject}</p>
    <p>{props.email}</p>
    <p>{props.location}</p>
          </div>
    <p>{props.content}</p>
    <div className="repliesBox">
        {props.replies[0].replyContent}
    
    </div>
    <span className="time-right">{props.time}</span>
        </div>
      )


export default Post;