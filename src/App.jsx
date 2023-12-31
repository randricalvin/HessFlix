import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
