import React from "react";
import "./index.css";
import "antd/dist/antd.css";

import Home from "./component/home";
import SignUp from "./component/signup";
export default class App extends React.Component {
  state = {
    login: false,
    counter: 0,
  };

  setCounter = (params) => {
    this.setState({ counter: params });
  };

  render() {
    return (
      <div>
        {!this.state.login && this.state.counter < 8 ? (
          <SignUp setCounter={this.setCounter} />
        ) : (
          <Home setCounter={this.setCounter} />
        )}
      </div>
    );
  }
}
