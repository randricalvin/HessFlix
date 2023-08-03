import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PopularMoviesList from '../components/PopularMoviesList'

const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([])
  console.log(PopularMovies)

  useEffect(() => {
    axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=dad59cab8629a6421cbcfd2f134b4839`)
    .then((res) => {
      setPopularMovies(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  , [])

  return (
    <div className='w-screen'>
      <h1 className="text-2xl flex justify-center">Les films populaires</h1>
      <div className='flex justify-center flex-wrap gap-6 hover:z-0'>
        {PopularMovies.map((PopularMovie) => {
          return (
          <PopularMoviesList
          key={PopularMovie.id}
          title={PopularMovie.original_title}
          description={PopularMovie.overview}
          poster={PopularMovie.backdrop_path}
          date={PopularMovie.release_date}
          />
          )
        })}
      </div>

    </div>
  )
}

export default Home