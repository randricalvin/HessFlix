import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PopularMovieDetail = () => {
    const {id} = useParams()
    const [PopularMovieDetail, setPopularMovieDetail] = useState({})
    console.log(PopularMovieDetail)

    useEffect(() => {
        axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=dad59cab8629a6421cbcfd2f134b4839&language=fr-FR`)
        .then((res) => {
            setPopularMovieDetail(res.data)
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    , [id])

  return (
    <div className='text-white'>
        <h1>PopularMovieDetail</h1>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${PopularMovieDetail.poster_path}`} alt={PopularMovieDetail.title}/>
            <h2>{PopularMovieDetail.title}</h2>
            <p>{PopularMovieDetail.overview}</p>
        </div>
    </div>
  )
}

export default PopularMovieDetail