import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// Disable service worker, then reload the page
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready
    .then(registration => registration.unregister())
    .then(result => document.location.reload(true))
}
