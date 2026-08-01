import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const navEntry = performance.getEntriesByType('navigation')[0];
if (
  navEntry?.type === 'reload' &&
  ['/about', '/services', '/amenities', '/gallery', '/booking'].includes(window.location.pathname)
) {
  window.history.replaceState(null, '', '/');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
