import React, { Component } from "react";

class Counter1 extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Counter 1 is calling");
    return (
      <div>
        <h2>Counter 1</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleCLick}>ADD</button>
        <button onClick={this.decrement} handleCLick={this.decrement1}>
          MINUS
        </button>
      </div>
    );
  }
}

export default Counter1;
