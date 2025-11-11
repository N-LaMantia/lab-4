import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Use a real backend server for API in development instead of MSW.
// Start the server separately with `npm run server` and then run the frontend `npm run dev`.
renderApp();

function renderApp() {

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

