import React, { Component } from "react";
import Counter1 from "../Counter/Counter1";
import Counter2 from "../Counter/Counter2";
// class Child extends Component {
//   state = {
//     name: "Mija",
//   };
//   componentDidMount() {
//     console.log("Child componentDidMount");
//   }
//   // console.log("Child render");
//   // return <div>Child</div>;
//   static getDerivedStateFromProps(props, state) {
//     console.log("Child getDerivedStateFromProps");

//     if (props.name !== state.name) {
//       return {
//         name: props.name,
//       };
//     }

//     return null;
//   }

//   render() {
//     console.log("Child render");
//     return <div>Child - {this.state.name}</div>;
//   }
// }

class Livecycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      counter1: 0,
      counter2: 0,
    };
  }

  increment1 = () => {
    this.setState((prev) => ({ counter1: prev.counter1 + 1 }));
    console.log(this.state.counter1);
  };

  increment2 = () => {
    this.setState((prev) => ({ counter2: prev.counter2 + 1 }));
    console.log(this.state.counter2);
  };

  //   decrement1 = () => {
  //     this.setState((prev) => ({ counter1: prev.counter1 - 1 }));
  //   };

  //   decrement2 = () => {
  //     this.setState((prev) => ({ counter2: prev.counter2 - 1 }));
  //   };

  componentDidMount() {
    console.log("componentDidMount");
    // this.id = setInterval(() => {
    //   this.setState((prev) => ({ counter: prev.counter + 1 }));
    // }, 2000);
    // setTimeout(() => {
    //   //   alert("twoja reklama");
    // }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state);
    // console.log("componentDidUpdate", this.state.counter, this.id);
    // if (this.state.counter === 10) {
    //   clearInterval(this.id);
    // }
  }

  render() {
    console.log("render");
    const { counter1, counter2 } = this.state;
    return (
      <>
        {/* <h1>{counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button> */}
        {/* <Child name="Ada" /> */}
        <Counter1
          value={counter1}
          handleCLick={this.increment1}
          //   handleDecrement={this.decrement1}
        />
        <Counter2
          value={counter2}
          handleCLick={this.increment2}
          //   handleDecrement={this.decrement2}
        />
        {/* <Counter1 />
        <Counter2 /> */}
      </>
    );
  }
}

export default Livecycle;
