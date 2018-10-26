import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import Stickie from "./Stickie";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numStickies: 0
    };
  }

  createStickie() {
    let oldStickies = this.state.numStickies;
    let newStickies = oldStickies + 1;
    this.setState({
      stickes: newStickies
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Stickie type="Goals" title="Goals" />
          <button className="btn ideas" onClick={this.createStickie.bind(this)}>
            New Idea
          </button>
        </header>
      </div>
    );
  }
}

export default App;
