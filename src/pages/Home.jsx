import React from 'react'
import PopularMovies from '../components/PopularMovies'
import HeroMovie from '../components/HeroMovie'
import TrendingMovies from '../components/TrendingMovies'
import UpcomingMovies from '../components/UpcomingMovies'
import TopRatedMovies from '../components/TopRatedMovies'

const Home = () => {
  return (
    <div className=''>
      <HeroMovie />
      <PopularMovies />
      <TrendingMovies />
      <UpcomingMovies />
      <TopRatedMovies />
    </div>
  )
}

export default Home