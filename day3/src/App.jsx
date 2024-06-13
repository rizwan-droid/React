import './App.css';
import { useState } from 'react';

function App() {
  let [counter, setcounter] = useState(0)
  console.log("initial counter value", counter);
  // let counter = 0;
  const Increment=()=>{
    console.log("inc fun fire");
    // console.log(counter++);
    setcounter(counter+1);
  }

  return (
    <div className="App">
     Counter app using functional component

     <p>Counter: {counter}</p>
     <button onClick={Increment}>Increment</button>
    </div>
  );
}

export default App;
