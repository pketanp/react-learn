import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Counter from "./component/Counter";
import Message from "./component/Message";
import FunctionClick from "./component/FunctionClick";
import ClassClicks from "./component/ClassClicks";

function App() {
	return (
		<div className="App">
			<FunctionClick />
			<ClassClicks />
			{/* <Greet name="Ketan" aka=" pk..." />
                  <Welcome name="Ketan" aka=" pk..." /> */}
			{/*
                  <Message /> 
                  <Greet name='Ketan' aka=' pk...' >
                  <p>This is master</p>
                  </Greet>
                  <Greet name='Shreyas' aka='CS[fx]' >
                  <button>click</button>
                  </Greet>
                  <Welcome name='Ketan' aka=' pk...' />
                  <Welcome name='Shreyas' aka='CS[fx]' />
                  <Counter />
                  */}
		</div>
	);
}

export default App;
