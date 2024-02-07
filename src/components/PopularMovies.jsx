import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PopularMoviesList from '../components/PopularMoviesList'


const Home = () => {
  const [PopularMovies, setPopularMovies] = useState([])
  console.log(PopularMovies)

  useEffect(() => {
    axios.get (`https://api.themoviedb.org/3/movie/popular?api_key=dad59cab8629a6421cbcfd2f134b4839&language=fr-FR&page=1`)
    .then((res) => {
      setPopularMovies(res.data.results)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  , [])

  return (
    <div className=''>
      <h1 className="text-[#ffffff] font-extrabold text-xl flex mx-10 mt-8">Les films populaires</h1>
      <div className=''>
        <div className=''>
          <div className="" >
            <img />
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
        </div>
      </div>

    </div>
  )
}

export default Home