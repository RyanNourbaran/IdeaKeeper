import React, { Component } from "react";

export default class Stickie extends Component {
  render() {
    return (
      <div class="container">
        <div class="title">
          {this.props.type}
          {this.props.title}
        </div>
        <div class="note">
          <input type="text" name="fname" />
        </div>
      </div>
    );
  }
}
