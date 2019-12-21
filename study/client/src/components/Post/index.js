import React, {component} from "react";
import "./style.css"


const Post = props => (
<div className="post-container">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
            />
    <p>{props.name}</p>
    <p>{props.email}</p>
    <p>{props.location}</p>
          </div>
    <p>{props.content}</p>
    <span className="time-right">{props.time}</span>
    <button className="Reply">Reply</button>
        </div>
      )


export default Post;