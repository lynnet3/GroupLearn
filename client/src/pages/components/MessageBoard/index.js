import React from "react";

class MessageBoard extends React.Component {
  render() {
    return (
      <div className="MessageBoard">
        <div className="container">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
              style={{
                width: "100%"
              }}
            />
            <p>Name/Title</p>
            <p>Email</p>
            <p>Location</p>
          </div>
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
          <button className="Reply">Reply</button>
        </div>
        <div className="container darker">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
              style={{
                width: "100%"
              }}
            />
            <p>Name</p>
            <p>Email</p>
            <p>Location</p>
          </div>
          <p>Hey! I'm fine. Thanks for asking!</p>
          <span className="time-right">11:01</span>
          <button className="Reply">Reply</button>
        </div>
        <div className="container">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
              style={{
                width: "100%"
              }}
            />
            <p>Name</p>
            <p>Email</p>
            <p>Location</p>
          </div>
          <p>Sweet! So, what do you wanna do today?</p>
          <span className="time-right">11:02</span>
          <button className="Reply">Reply</button>
        </div>
        <div className="container darker">
          <div id="AvatarInfo">
            <img
              src="#"
              alt="Avatar"
              style={{
                width: "100%"
              }}
            />
            <p>Name</p>
            <p>Email</p>
            <p>Location</p>
          </div>
          <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
          <span className="time-right">11:05</span>
          <button className="Reply">Reply</button>
        </div>
      </div>
    );
  }
}

export default MessageBoard;
