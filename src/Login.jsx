import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" nam="username" />
          <label htmlFor="username"></label>
        </div>
      </form>
    );
  }
}
