import React, { Component } from "react";

class Counter2 extends Component {
  render() {
    console.log("Counter 2 is calling");
    return (
      <div>
        <h2>Counter 2</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleCLick}>ADD</button>
      </div>
    );
  }
}

export default Counter2;
