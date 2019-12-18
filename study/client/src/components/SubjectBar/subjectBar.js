import React from "react";

class SubjectBar extends React.Component {
  render() {
    return (
      <div className="subject-container">
        <h4 className="subject-heading">Choose Your Subjects</h4>
        <div className="ui centered" id="subject-btns">
          <div
            className="ui red huge  animated button"
            tabIndex={0}
            id="math-btn"
          >
            <div className="visible content">
              <i className="plus icon" />
            </div>
            <div className="hidden content">
              <div className="subject-text">MATH</div>
            </div>
          </div>
          <div
            className="ui blue huge animated button"
            tabIndex={0}
            id="art-btn"
          >
            <div className="visible content">
              <i className="cut icon" />
            </div>
            <div className="hidden content">
              <div className="subject-text">ART</div>
            </div>
          </div>
          <div
            className="ui green huge animated button"
            tabIndex={0}
            id="science-btn"
          >
            <div className="visible content">
              <i className="space shuttle icon" />
            </div>
            <div className="hidden content">
              <div className="subject-text">SCIENCE</div>
            </div>
          </div>
          <div
            className="ui orange huge animated button"
            tabIndex={0}
            id="history-btn"
          >
            <div className="visible content">
              <i className="book icon" />
            </div>
            <div className="hidden content">
              <div className="subject-text">HISTORY</div>
            </div>
          </div>
          <h5 className="subject-subheading">
            Which subjects are you interested in studying?
          </h5>
        </div>
      </div>
    );
  }
}

export default SubjectBar;
