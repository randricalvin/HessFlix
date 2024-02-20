import React from 'react'
import { Link } from 'react-router-dom'

const TopRatedMoviesList = (
    {
    id,
    title,
    description,
    poster,
    }
) => {
  return (
    <div className="mx-2">
        <div className="rounded-lg shadow w-80 hover:">
            <Link to={`/toprated-movie/${id}`}>
              <img className="rounded-t-lg w-80 h-40 object-cover transition duration-300 ease-in-out hover:scale-105" src={`https://image.tmdb.org/t/p/w500/${poster}`} alt={title} />
            </Link>
      </div>
      </div>
  )
}

export default TopRatedMoviesList