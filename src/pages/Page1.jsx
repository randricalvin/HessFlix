import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PopularMoviesList from '../components/PopularMoviesList'

const Page1 = () => {
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
    <div className="flex justify-center text-2xl">
      <h1>Les films populaires</h1>
      {PopularMovies.map((PopularMovie) => {
        return (
        <PopularMoviesList
        key={PopularMovie.id}
        title={PopularMovie.original_title}
        description={PopularMovie.overview}
        poster={PopularMovie.poster_path}
        date={PopularMovie.release_date}
        />
        )
      })}

    </div>
  )
}

export default Page1