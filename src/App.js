import './App.css';
import React from 'react';
import Sum from './components/Sum/Sum';
import Average from './components/Average/Average';
import Sort from './components/Sort/Sort';
import Interval from './components/Interval/Interval';


function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>

      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Average/>
        <Sum />
        <Sort/>
      </div>

      <div className="linha">
        
      </div>
      
    </div>
  );
}

export default App;
