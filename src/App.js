import React, { Component, useState } from "react";
import "./styles.css";
import { render } from "react-dom";

// Components
import { AppContext } from "./libs/contextLib";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      userHasAuthenticated: false
    };
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div class="Item">
          <h1>Coin</h1>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }
}
