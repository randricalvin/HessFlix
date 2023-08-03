import React from 'react'
import PopularMovies from '../components/PopularMovies'
import HeroMovie from '../components/HeroMovie'

const Home = () => {
  return (
    <div>
      <HeroMovie />
      <PopularMovies />
    </div>
  )
}

export default Home