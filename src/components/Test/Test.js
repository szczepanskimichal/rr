import React, { Component } from "react";

// export default function Test() {
//   return <div>TEST</div>;
// }

class Test extends Component {
  foo() {
    console.log("foo");
  }

  render() {
    // console.log(this.props.x);
    // return <div>TEST 2</div>;
    return (
      <button
        // onClick={() => {
        //   console.log("clicked");
        // }}
        onClick={this.foo}
      >
        CLICK
      </button>
    );
  }
}

export default Test;
