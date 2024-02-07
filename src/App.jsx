import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import './App.css'
import PopularMoviesList from './components/PopularMoviesList'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular-movie/:id" element={<PopularMoviesList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
