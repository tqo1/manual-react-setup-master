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
        <p className="title">Select the correct answer:</p>

        <ul>
          <li>
            <label>
              <input
                type="radio"
                value="I have one carrot"
                checked={this.state.size === "I have one carrot"}
                onChange={this.handleChange}
              />
              I have one carrot
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="I have one carrots"
                checked={this.state.size === "I have one carrots"}
                onChange={this.handleChange}
              />
              I have two carrots
            </label>
          </li>

          <li>
            <label>
              <input
                type="radio"
                value="I have three carrots"
                checked={this.state.size === "I have three carrots"}
                onChange={this.handleChange}
              />
              I have three carrots
            </label>
          </li>
        </ul>

        <button type="submit" className="submit-button">
          Make your choice
        </button>
      </form>
    );
  }
}
