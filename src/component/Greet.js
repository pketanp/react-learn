import React from 'react';

//function greet() {
//  return <h1> Hello pk... </h1>;
//}


const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} A.K.A {props.aka} </h1>
            {props.children}
        </div>
    )
}


export default Greet;
