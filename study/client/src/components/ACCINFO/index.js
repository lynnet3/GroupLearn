import React from "react";

class AccInfo extends React.Component {
  render() {
    return (
      <div className="AccInfo">
        <h3> Account info</h3>
        <br />
        <br />
        <form>
          UserName:
          <input type="text" name="username" placeholder="Username" />
          <br />
          First name:
          <input type="text" name="firstname" placeholder="Firstname" />
          <br />
          Last name:
          <input type="text" name="lastname" placeholder="lastname" />
          <br />
          Email:
          <input type="text" name="Email" placeholder="Email" />
          <br />
          Title:
          <input type="text" name="title" placeholder="Title" />
          <br />
          Image:
          <input type="text" name="image" placeholder="Image" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AccInfo;
