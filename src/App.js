import React from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
function App() {
  return (
    <div className="App">
      <Greet name='Ketan' aka=' pk...' ></Greet>
      <Greet name='Shreyas' aka='CS[fx]' ></Greet>
      <Welcome />
    </div>
  );
}

export default App;
