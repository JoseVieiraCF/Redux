import './App.css';
import React, { useState } from 'react';
import Sum from './components/Sum/Sum';
import Average from './components/Average/Average';
import Sort from './components/Sort/Sort';
import Interval from './components/Interval/Interval';


function App() {

  const [min, setMin] = useState(10);
  const [max, setMax] = useState(2);


  return (
    <div className="App">
      <h1>React Redux</h1>

      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Average min={min} max={max}/>
        <Sum min={min} max={max} />
        <Sort min={min} max={max}/ >
      </div>
      
    </div>
  );
}

export default App;
