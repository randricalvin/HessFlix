import React from 'react'

const PopularMoviesList = (
    {id,
    title,
    description,
    poster,
    date}
    ) => {
  return (
    <div className=''>
        <div className='bg-red-500'>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="rounded-box" src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">{description.substring(0, 100)}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{date}</span>
            </div>
            </div>
        </div>
    </div>

    
  )
}

export default PopularMoviesList