import React, { Component } from "react";

// export default function Test() {
//   return <div>TEST</div>;
// }

// class Test extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this);
//     this.foo = this.foo.bind(this);
//   //   }

//   xyz = () => {
//     console.log("Hi, my name is: ", this.props.x);
//   };

//   //   foo(name) {
//   //     console.log("Hi, my name is: ", this.props.x);
//   //   }
//   render() {
//     console.log(this);
//     return <button onClick={this.xyz}>CLICK</button>;
//   }
// }

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      name: "Mija",
    };
  }
  increment = () => {
    // console.log("increment", this.state.counter);
    // this.setState({ counter: 999 });
    // console.log(this);
    // const { counter, name } = this.state;
    console.log("increment", this.state.counter);

    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  render() {
    console.log("render");
    const { counter, name } = this.state;
    return (
      <button onClick={this.increment}>
        CLICK - {counter}
        <p>{name}</p>
      </button>
    );
  }
}

export default Test;

//   foo() {
//     console.log("foo");
//   }

//   render() {
//     // console.log(this.props.x);
//     // return <div>TEST 2</div>;
//     return (
//       <button
//         // onClick={() => {
//         //   console.log("clicked");
//         // }}
//         onClick={this.foo}
//       >
//         CLICK
//       </button>
//     );
//   }
// }

// export default Test;
