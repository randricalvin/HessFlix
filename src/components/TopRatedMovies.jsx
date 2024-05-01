import React, {useState, useEffect } from 'react'
import axios from 'axios'
import TopRatedMoviesList from './TopRatedMoviesList'

const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=dad59cab8629a6421cbcfd2f134b4839&language`)
        .then((response) => {
            setTopRatedMovies(response.data.results)
            console.log(response.data.results)
        }).catch((error) => {
            console.log(error)
          })
    }, [])


  return (
    <div className=''>
        <h1 className="text-[#ffffff] font-extrabold text-2xl flex mx-10 py-10">Les films les plus aimés</h1>

        <div className='flex overflow-x-scroll no-scrollbar'>
            {topRatedMovies.map((topRatedMovie) => {
                return (
                    <TopRatedMoviesList
                    key={topRatedMovie.id}
                    id={topRatedMovie.id}
                    title={topRatedMovie.original_title}
                    description={topRatedMovie.overview}
                    poster={topRatedMovie.backdrop_path}
                    date={topRatedMovie.release_date}
                    />
                )}
            )}
        </div>
    </div>
  )
}

export default TopRatedMovies