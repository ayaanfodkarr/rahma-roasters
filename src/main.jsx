import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// the bean-texture background lives in CSS, but its path depends on the build
// base (root locally, /rahma-roasters/ on GitHub Pages), so wire it up here.
document.documentElement.style.setProperty(
  '--bean-url',
  `url(${import.meta.env.BASE_URL}images/bean-spoon.png)`,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
