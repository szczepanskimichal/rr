import React, { Component } from "react";

class Child extends Component {
  state = {
    name: "Mija",
  };
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  // console.log("Child render");
  // return <div>Child</div>;
  static getDerivedStateFromProps(props, state) {
    console.log("Child getDerivedStateFromProps");

    if (props.name !== state.name) {
      return {
        name: props.name,
      };
    }

    return null;
  }

  render() {
    console.log("Child render");
    return <div>Child - {this.state.name}</div>;
  }
}

class Livecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({ counter: prev.counter - 1 }));
  };

  componentDidMount() {
    console.log("componentDidMount");
    // setInterval(() => {
    //   this.setState((prev) => ({ counter: prev.counter + 1 }));
    // }, 2000);
    // setTimeout(() => {
    //   alert("twoja reklama");
    // }, 5000);
  }

  render() {
    console.log("render");
    const { counter } = this.state;
    return (
      <>
        <h1>{counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <Child name="Ada" />
      </>
    );
  }
}

export default Livecycle;
