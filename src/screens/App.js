import React, { Component } from "react";
import logo from "../logo.svg";
import "./css/App.css";

//@Imports
import Draggable from "react-draggable";

//@Mine
import Stickie from "./Stickie";

//@Component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numStickiesArray: []
    };
  }

  createStickie() {
    let oldStickies = this.state.numStickiesArray;
    let newStickies = oldStickies.push("stickie_" + oldStickies.lengtth);
    this.setState({
      stickes: newStickies
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button
          className={["idea", "btn"].join(" ")}
          onClick={this.createStickie.bind(this)}
        >
          NEW IDEA
        </button>
        <div>
          {this.state.numStickiesArray.map((sticky, i) => {
            return (
              <div key={i}>
                <Draggable
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: 0, y: 0 }}
                  position={null}
                  grid={[1, 1]}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}
                >
                  <div className="handle">
                    <Stickie type="Goals" title="Goals" />
                  </div>
                </Draggable>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
