import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import Feed from './pages/Feed/Feed'
import PhotoDetail from './pages/PhotoDetail/PhotoDetail'
import SearchResults from './pages/SearchResults/SearchResults'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/photo/:id" element={<PhotoDetail />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App

// hi i have added nav bar and sider bar