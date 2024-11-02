


import { StrictMode } from 'react'
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const root = document.getElementById('root')  
const ReactRoot = ReactDOM.createRoot(root);
ReactRoot.render(
    <StrictMode>
      <App />
    </StrictMode>
)
