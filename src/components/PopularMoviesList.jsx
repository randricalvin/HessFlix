import React from 'react'

const PopularMoviesList = (
    {id,
    title,
    description,
    poster,
    date}
    ) => {

  return (
<div className='shadow-lg '>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=''>
          <div className="ease-in-out hover:scale-105 duration-300">
            <img className="overflow-hidden " src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
          </div>
      </div>
</div>


    
  )
}

export default PopularMoviesList