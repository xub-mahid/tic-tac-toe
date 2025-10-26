import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tictac from './component/Bord'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tictac/>
  </StrictMode>,
)
