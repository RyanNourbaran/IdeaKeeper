import React, { Component } from "react";

import "./css/Stickie.css";

export default class Stickie extends Component {
  render() {
    const { type, title } = this.props;
    return (
      <div className="container">
        <div className="decor" />
        <div className="title">{this.props.title}</div>.
        <input className="note" type="textarea" />
      </div>
    );
  }
}
