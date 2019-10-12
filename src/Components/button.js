//https://magnusbenoni.com/radio-buttons-react/

import React, { Component } from "react";

export default class Multiplechoice extends React.Component {
  constructor() {
    super();

    this.state = {
      size: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You chose that " ${this.state.size} ".`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Custom Radio Buttons</h1>
        <label class="container">
          {" "}
          One
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Two
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Three
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Four
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>

        {/* </body> */}

        <button type="submit" className="submit-button">
          Make your choice
        </button>
      </form>
    );
  }
}
