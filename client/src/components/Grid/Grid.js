import React from "react";

class Grid extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column">Grid</div>
        <div className="four wide column">Grid</div>
        <div className="four wide column">Grid</div>
        <div className="four wide column">Grid</div>
        <div className="two wide column">Grid</div>
        <div className="eight wide column">Grid</div>
        <div className="six wide column">Grid</div>
      </div>
    );
  }
}

export default Grid;
