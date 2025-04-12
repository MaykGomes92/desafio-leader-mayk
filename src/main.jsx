import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserStorage } from './Hook/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserStorage>
      <App />
    </UserStorage>
  </StrictMode>,
)
