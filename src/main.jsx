import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectDetail from './pages/projectDetail'
import BreakpointProvider from './components/breakpointContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BreakpointProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:project" element={<ProjectDetail />} />
        </Routes>
      </BreakpointProvider>
    </BrowserRouter>
  </StrictMode>,
)
