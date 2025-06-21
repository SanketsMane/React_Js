##  Why We Need Hooks in React - 

1. for best understanding i have create new React project React Counter - 03_Counter

2. React Hooks are functions that allow functional components to access React state and lifecycle features

### Commonly Used Hooks:
`useState: Manages state within a functional component.
useEffect: Performs side effects like data fetching or DOM manipulation.
useContext: Accesses values from React context.
useRef: Creates mutable variables that persist across renders without triggering re-renders.
useMemo: Memoizes values to avoid recalculation on every render.
useCallback: Memoizes callbacks to prevent unnecessary re-creation on every render.
useReducer: Manages complex state logic using a reducer function.
`
## UseState EX - 
1. Hooks like useState enable functional components to manage their own state, simplifying code and improving readability.
2. It Means it will help to change UI state - it has two parameters - count and setCount 


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

