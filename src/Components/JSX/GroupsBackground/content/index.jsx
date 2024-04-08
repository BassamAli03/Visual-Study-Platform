import { Component } from "react";
import renderer from "./renderer";
import React from "react";

export default class Components extends Component {
  componentDidMount() {
    new renderer();
  }
  render() {
    return <canvas id="content" />;
  }
}
