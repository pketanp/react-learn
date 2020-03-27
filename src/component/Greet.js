import React from "react";

//function greet() {
//  return <h1> Hello pk... </h1>;
//}

const Greet = ({ name, aka }) => {
  return (
    <div>
      <h1>
        Hello {name} A.K.A {aka}
      </h1>
    </div>
  );
};

export default Greet;
