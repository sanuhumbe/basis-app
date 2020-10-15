import React from "react";
import "./index.css";
import "antd/dist/antd.css";

import Home from "./component/home";
import SignUp from "./component/signup";
export default class App extends React.Component {
  state = {
    login: false,
  };
  render() {
    return <div>{this.state.login ? <Home /> : <SignUp />}</div>;
  }
}
