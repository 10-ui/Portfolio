import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('header')!).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
