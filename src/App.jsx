import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'
import PopularMovieDetail from './components/PopularMovieDetail'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movie/:id" element={<PopularMovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
