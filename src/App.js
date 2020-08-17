import './App.css';
import React, { useState } from 'react';
import Sum from './components/Sum/Sum';
import Average from './components/Average/Average';
import Sort from './components/Sort/Sort';
import Interval from './components/Interval/Interval';


function App() {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);


  return (
    <div className="App">
      <h1>React Redux</h1>

      <div className="linha">
        <Interval min={min} max={max} onMaxChanged={setMax} onMinChanged={setMin}/>
      </div>
      <div className="linha">
        <Average/>
        <Sum/>
        <Sort/>
      </div>
      
    </div>
  );
}

export default App;
