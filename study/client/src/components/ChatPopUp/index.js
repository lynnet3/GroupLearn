import React from "react";
import Submit from "../Submit";
import Cancel from "../Cancel";

class ChatPopup extends React.Component {
  render() {
    return (
      <div className="chat-popup" id="myForm">
        <form action="/action_page.php" className="form-container">
          <h1>Post Message</h1>
          <input className="Titlefinder" placeholder="Title" />
          <label htmlFor="msg">
            <b>Message</b>
          </label>
          <textarea
            placeholder="Type message.."
            name="msg"
            required
            defaultValue={""}
          />
          <Submit></Submit>
          <Cancel></Cancel>
        </form>
      </div>
    );
  }
}

export default ChatPopup;
