import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar/>
    </BrowserRouter>
  )
}

export default App

// hi i have added nav bar and sider bar