import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/App.css'
import './assets/styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'

/**
 * This should hold everything in our app where
 * routing is needed. That means, if we need routing
 * in our entire app, we must wrap our higher component
 * with BrowserRouter.
 * By the way, you don't have to rename BrowserRouter as Router
 * as I do here, I just want to keep things readable.
 * A router alone doesn't do much. So let's add a route
 */
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
