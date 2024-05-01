import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UpcomingMoviesList from './UpcomingMoviesList'

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([])


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=dad59cab8629a6421cbcfd2f134b4839&language=fr-FR&page=1`)
        .then((response) => {
            setUpcomingMovies(response.data.results)
            console.log(response.data.results)
        })
        .catch((error) => {
            console.log(error)
          })
    }, [])

  return (
    <div className=''>
        <h1 className="text-[#ffffff] font-extrabold text-2xl flex mx-10 py-10">Les sorties à venir</h1>

        <div className='flex overflow-x-scroll no-scrollbar'>
        {upcomingMovies.map((upcomingMovie) => {
            return (
                <UpcomingMoviesList
                key={upcomingMovie.id}
                id={upcomingMovie.id}
                title={upcomingMovie.original_title}
                description={upcomingMovie.overview}
                poster={upcomingMovie.backdrop_path}
                date={upcomingMovie.release_date}
                />
            )}
        )}
        </div>
    </div>
  )
}

export default UpcomingMovies