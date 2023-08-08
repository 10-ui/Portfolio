import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Component/Header.tsx'
import Top from './Component/Top.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Top />
  </React.StrictMode>,
)