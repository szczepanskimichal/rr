import React, { Component } from "react";

class Counter2 extends Component {
  state = {
    name: "Mija",
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState.name, this.state.name);
    return true;
    // if (nextProps.value !== this.props.value) {
    //   return true;
    // }
    // return false;
    if (nextState.name !== this.state.name) {
      return true;
    }
    return false;
  }

  changeName = () => {
    this.setState({
      name: "Ada",
    });
  };

  render() {
    console.log("Counter 2 is calling");
    return (
      <div>
        <h2>Counter 2</h2>
        <h2>{this.props.value}</h2>
        <h3>{this.props.value}</h3>
        <button onClick={this.props.handleCLick}>ADD</button>
        {/* <button onClick={this.changeName}>CHANGE</button> */}
        <button onClick={this.changeName}>CHANGE</button>
      </div>
    );
  }
}

export default Counter2;
