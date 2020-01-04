import React from "react";
import bioInfo from "./bioInfo";
import BioBTN from "./BioBTN";

class bio extends React.Component {
  render() {
    return (
      <aside className="bio">
        <form>
          <h3>Bio</h3>
          <bioInfo></bioInfo>
          <textarea
            cols={50}
            rows={5}
            defaultValue={
              "          This is where the user can enter text. If there's too much text, the textbox can develop scrollbars to accommodate the extra text...\n          "
            }
          />
          <BioBTN></BioBTN>
        </form>
      </aside>
    );
  }
}

export default bio;
