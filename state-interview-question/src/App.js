import './App.css';
import {useState} from 'react';
function App() {
  const [value,setValue] = useState(1);
  let multipliedValue  = value*5;
  return (
    <div className="App">
     <h1>State</h1>
     <h1>Main Value : {value}</h1>
     <button onClick={()=>{setValue(value + 1)}}>Click to multiply by 5</button> 
     <h1>Multiplied value : {multipliedValue}</h1>
    </div>
  );
}

export default App;
