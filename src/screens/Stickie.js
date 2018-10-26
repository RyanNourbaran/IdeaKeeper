import React, { Component } from "react";

import "./css/Stickie.css";

export default class Stickie extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          {this.props.type}
          {this.props.title}
        </div>
        <div className="note">
          <input type="textarea" />
        </div>
      </div>
    );
  }
}
