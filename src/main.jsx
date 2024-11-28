import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Info from './Info.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Info />
  </StrictMode>,
)
