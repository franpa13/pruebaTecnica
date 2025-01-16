
import { createRoot } from 'react-dom/client'
import { UniqueUser } from './pages/UniqueUser.tsx';
import './index.css'
import { App } from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:idUser" element={<UniqueUser />} />
    </Routes>
  </BrowserRouter>
)
