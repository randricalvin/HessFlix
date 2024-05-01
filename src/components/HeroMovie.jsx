import React, {useEffect, useState} from 'react'
import axios from 'axios'
import transformers from '../assets/transformers.jpg'
import play from '../assets/play.svg'
import info from '../assets/info.svg'
import { Link } from 'react-router-dom'

const HeroMovie = () => {
    const [HeroMovie, setHeroMovie] = useState([614479])
    const [movieId, setMovieId] = useState(614479)


// find the movie with this id 614479
// https://api.themoviedb.org/3/movie/614479?api_key=dad59cab8629a6421cbcfd2f134b4839

useEffect(() => {
    axios.get (`https://api.themoviedb.org/3/movie/${HeroMovie}?api_key=dad59cab8629a6421cbcfd2f134b4839`)
    .then((res) => {
      setHeroMovie(res.data)
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
    , [HeroMovie])

    useEffect(() => {
        axios.get (`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=dad59cab8629a6421cbcfd2f134b4839`)
        .then((res) => {
            setMovieId(res.data.results[0])
            console.log(res.data.results[0])
        })
        .catch((error) => {
            console.log(error)
            }
        )
        }
        , [movieId])

  return (
    <div className='text-slate-300 flex flex-col'>
        <img src={`https://image.tmdb.org/t/p/original${HeroMovie.backdrop_path}`} alt={HeroMovie.original_title} className='h-screen object-cover'/>
        {/* <img src={transformers} alt="transformers" className='transformers'/> */}
        <div className='flex flex-col absolute  justify-center mx-10  w-1/3 h-screen'>
            <h1 className='text-4xl font-black text-green-200'>{HeroMovie.original_title}</h1>
            <p className='mt-5'>{HeroMovie.overview}</p>
            <div className='flex gap-5 mt-5'>
                <Link className='bg-[#ffffff] rounded-lg px-5 py-2 flex justify-evenly items-center w-36' to={`https://www.youtube.com/watch?v=${movieId.key}`} target='_blank' rel="noreferrer">
                    <img src={play} alt="play" className='h-8' />
                    <span className='text-black font-black text-lg'>
                        Play
                    </span>
                </Link>
                <button className='rounded-lg px-5 py-2 flex justify-evenly w-48 bg-[#585858] items-center'>
                    <img src={info} alt="info" className='h-6'/>
                    <span className='text-white font-black text-lg'>
                        <a href={HeroMovie.homepage} target='_blank' rel="noreferrer">More Info</a>
                    </span>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default HeroMovie