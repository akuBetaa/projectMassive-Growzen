import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//css dan css boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css'
import './dist/css/component.css'
import './dist/css/comments.css'

import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
