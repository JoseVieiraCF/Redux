import './App.css';
import React from 'react';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className="linha">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      
    </div>
  );
}

export default App;
