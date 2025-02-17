import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayOut from './Layouts/MainLayOut'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayOut/>
  </StrictMode>,
)
