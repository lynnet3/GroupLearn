import React from "react";
import "./style.css"


const Post = props => (
<div className="post-container">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
            />
    <p style={{font: "30px"}}>{props.name}</p>
    <p>{props.subject}</p>
    <p>{props.email}</p>
    <p>{props.location}</p>
          </div>
    <p>{props.content}</p>
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