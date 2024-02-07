import React from 'react'
import { Link } from 'react-router-dom'

const PopularMoviesList = (
    {id,
    title,
    description,
    poster,
    date}
    ) => {

  return (
<div className='shadow-lg bg-blue-500'>
      {/* <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=''>
          <div className="ease-in-out hover:scale-105 duration-300">
            <Link to={`/popular-movie/${id}`}>
              <img className="overflow-hidden " src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            </Link>
          </div>
      </div> */}
      

  <div class="">
    <Link to={`/popular-movie/${id}`}>
            <img class=" object-cover" src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
    </Link>
  </div>

</div>

    
  )
}

export default PopularMoviesList