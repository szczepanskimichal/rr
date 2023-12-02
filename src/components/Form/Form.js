import React, { Component } from "react";

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.elements);
    const inputVal = form.elements[0].value;
    // console.log(event.currentTarget);
    console.log("submit", inputVal);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
