import './App.css';
import React from 'react';
import Card from './components/Card';


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className="linha">
        <Card title="Card 1" Purple>X</Card>
        <Card title="Card 2" Red>Y</Card>
      </div>

      <div className="linha">
        <Card title="Card 3" Red>A</Card>
        <Card title="Card 4" Red>B</Card>
      </div>
      
    </div>
  );
}

export default App;
