import React from "react";

//function greet() {
//  return <h1> Hello pk... </h1>;
//}

const Greet = props => {
  const { name, aka } = props;
  return (
    <div>
      <h1>
        Hello {props.name} A.K.A {aka}
      </h1>
    </div>
  );
};

export default Greet;
