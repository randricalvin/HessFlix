import React from 'react'
import PopularMovies from '../components/PopularMovies'
import HeroMovie from '../components/HeroMovie'
import TrendingMovies from '../components/TrendingMovies'
import UpcomingMovies from '../components/UpcomingMovies'

const Home = () => {
  return (
    <div>
      <HeroMovie />
      <PopularMovies />
      <TrendingMovies />
      <UpcomingMovies />
    </div>
  )
}

export default Home