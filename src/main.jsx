import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context'


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter basename="/food-recipe-app">
 <React.StrictMode>
  <GlobalState>
      <App/>
  </GlobalState>
  </React.StrictMode>
 </BrowserRouter> 
)


