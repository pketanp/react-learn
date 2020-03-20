import React from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Counter from './component/Counter';
function App() {
  return (
    <div className="App">
      <Counter />

      {/*
      <Greet name='Ketan' aka=' pk...' >
        <p>This is master</p>
      </Greet>
      <Greet name='Shreyas' aka='CS[fx]' >
        <button>click</button>
      </Greet>
      <Welcome name='Ketan' aka=' pk...' />
      <Welcome name='Shreyas' aka='CS[fx]' />*/}
    </div>
  );
}

export default App;
