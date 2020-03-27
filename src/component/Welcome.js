import React, { Component } from "react";

class Welcome extends Component {
      render() {
            const { name, aka } = this.props;
            //const { state1, state2 } = this.state;
            return (
                  <h1>
                        Welcome {name} A.K.A {aka}{" "}
                  </h1>
            );
      }
}
export default Welcome;
