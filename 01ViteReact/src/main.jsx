import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
      <div>
        <h1>Custom App</h1>   
        {/* this html syntax is parsed and then it understand by react */}
      </div>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <App />
  </StrictMode>,
)
