import React, { Component } from "react";

const initValues = {
  username: "Welcome",
  password: "",
  isChecked: false,
  color: null,
};

class Form extends Component {
  // xyz = 0;
  state = {
    ...initValues,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.username);
    // this.setState(initValues);
    this.reset();
    // this.setState({
    //   username: "",
    //   password: "",
    // });
  };
  //   // const form = event.currentTarget;
  //   // console.log(form.elements);
  //   // const inputVal = form.elements.username.value;
  //   // // console.log(event.currentTarget);
  //   // console.log("submit", inputVal);
  // }

  handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  reset = () => {
    this.setState(initValues);
  };

  // handleChangeChecbox = (event) => {
  //   console.log(event.target.checked);
  //   this.setState({
  //     isChecked: event.target.checked,
  //   });
  // };

  render() {
    console.log(this);
    const { username, password, isChecked } = this.state;
    return (
      <>
        <h1>{username}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="isChecked"
            checked={isChecked}
            onChange={this.handleChange}
          />
          <label>
            BLACK
            <input type="radio" />
          </label>
          <label>
            WHITE
            <input type="radio" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
