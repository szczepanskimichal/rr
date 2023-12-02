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

// class Test extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: this.props.x,
//       name: "Mija",
//       tab: [1, 2, 3],
//     };
//   }
//   increment = () => {
//     // console.log("increment", this.state.counter);
//     // this.setState({ counter: 999 });
//     // console.log(this);
//     // const { counter, name } = this.state;
//     // console.log("increment", this.state.counter);

//     this.setState((prevState, props) => ({
//       counter: prevState.counter + 1,
//       name: "Ada",
//     }));

//     // this.setState((prev) => {
//     //   return {
//     //     tab: [...prev.tab, 4],
//     //   };
//     // });
//     console.log("increment", this.state.counter);

//     this.setState(
//       {
//         name: "Ada",
//       },
//       () => {
//         console.log("after state update", this.state.name);
//       }
//     );
//   };

// render() {
//     console.log("render");
//     const { counter, name, tab } = this.state;
//     return (
//       <>
//         <button onClick={this.increment}>
//           CLICK - {counter}
//           <p>{name}</p>
//         </button>
//         <h1>{tab}</h1>
//       </>
//     );
//   }
// }
//------------------------------------------------------------

function Child({ user, foo }) {
  const handleClick = () => {
    foo("Message from child to parent", user);
  };
  return (
    <div>
      {user} - <button onClick={handleClick}>REMOVE</button>
    </div>
  );
}

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["Mija", "Ada", "Marysia"],
    };
  }

  send = (msg) => {
    console.log(msg);
  };

  render() {
    console.log("render parent");
    const { list } = this.state;
    return (
      <>
        {list.map((user) => (
          <Child key={user} user={user} foo={this.send} />
        ))}
      </>
    );
  }
}

export default Parent;

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
