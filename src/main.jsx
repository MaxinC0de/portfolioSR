import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './pages/projectDetail'
import Error from './pages/error'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
