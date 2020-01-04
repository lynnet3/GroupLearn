import React from "react";

class UserGreet extends React.Component {
  render() {
    return (
      <div className="login-greet" id="greeting">
        <h2>Hello {this.props.returnedName}</h2>
      </div>
    );
  }
}

export default UserGreet;
