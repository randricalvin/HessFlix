import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TrendingMoviesList from './TrendingMoviesList'

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([])
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=dad59cab8629a6421cbcfd2f134b4839&language`)
        .then((response) => {
            setTrendingMovies(response.data.results)
            console.log(response.data.results)
        }).catch((error) => {
            console.log(error)
          })
    }, [])
        
  return (
    <div className=''>
        <h1 className="text-[#ffffff] font-extrabold text-2xl flex mx-10 py-10">Les tendances de la semaine</h1>

        <div className='flex overflow-x-scroll no-scrollbar'>
            {trendingMovies.map((trendingMovie) => {
                return (
                    <TrendingMoviesList
                    key={trendingMovie.id}
                    id={trendingMovie.id}
                    title={trendingMovie.original_title}
                    description={trendingMovie.overview}
                    poster={trendingMovie.backdrop_path}
                    date={trendingMovie.release_date}
                    />
                )}
            )}
        </div>
    </div>
  )
}

export default TrendingMovies