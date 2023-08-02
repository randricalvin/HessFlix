import React from 'react'

const PopularMoviesList = (
    {id,
    title,
    description,
    poster,
    date}
    ) => {
  return (
<div className='w-1/4 shadow-lg'>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=''>
          <div className="overflow-hidden ease-in-out hover:scale-105 duration-300 flex flex-col items-center">
            <img className="object-contain w-48" src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
              <div className="px-6 py-4 bg-white">
                  <div className="font-extrabold lg:text-xl mb-2 name-service">{title}</div>
                  <p className="lg:text-base description-service">
                    {description.substring(0, 100)}
                  </p>
                  <div class="pt-4 pb-2 flex justify-start">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Date de sortie : {date}</span>
                    </div>
              </div>
          </div>
      </div>
</div>

    
  )
}

export default PopularMoviesList