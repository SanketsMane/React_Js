
import { useState } from 'react';
import './App.css'

function App() {

  
  const [counter, setCounter] = useState(5)   //with useState Hook we are able to chnage ui values
  // let counter = 5;
  const addValue = () => {
      console.log("Clicked", counter); 

      //here we have done actual logic but without react hooks we are not able to do any changes in UI

      setCounter(counter +1)
  }

  const rmValue =() =>{
    setCounter(counter -1);
    console.log("Value is removed.")
  }

  return (
    <>
      
     <h1>Sanket and React</h1>
     <h2>Counter value: {counter} </h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={rmValue}>Remove Value</button>
    </>
  )
}

export default App
