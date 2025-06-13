import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
import Login from './Components/Login'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Login />
    </>
  
  )
}

export default App
