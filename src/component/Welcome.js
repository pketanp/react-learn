import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, aka } = this.props;
    return (
      <h1>
        Welcome {name} A.K.A {aka}{" "}
      </h1>
    );
  }
}
export default Welcome;
