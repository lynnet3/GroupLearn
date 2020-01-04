import React from "react";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          src="/w3images/team2.jpg"
          alt="John"
          style={{
            width: "100%"
          }}
        />
        <h1>John Doe</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <div
          style={{
            margin: "24px 0"
          }}
        >
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
