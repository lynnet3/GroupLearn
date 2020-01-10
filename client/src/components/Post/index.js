import React from "react";
import "./style.css"


const Post = props => (
<div className="post-container" id={props.subject}>
          <div id="AvatarInfo">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
            />
    <p id="userName">{props.name}</p>
    <p>User's Email: {props.email}</p>
    <p>Tag: {props.subject}</p>
          </div>

    <p>{props.content}</p>
    <p>Location: {props.location}</p>
    <span className="time-right">{props.time}</span>
    <form>
    <input className="ReplyText"
    name={props.asdf}
    type="text"
    onChange={props.handleInputChange}
    value={props.reply}
    ></input>
    <button className="Reply"
    type="submit"
    onClick={ e => props.submitReply(e, props.asdf)}
    >Reply</button>
    </form>
        </div>
      )


export default Post;