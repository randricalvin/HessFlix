import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/LOGO.png'
import search from '../assets/search.svg'
import smiley from '../assets/smiley.svg'
import alert from '../assets/alert.svg'
import arrow from '../assets/arrow.svg'

const NavBar = () => {
  return (
    <div className='flex justify-around text-slate-200 pt-8 items-center fixed top-0 left-0 right-0 z-2'>
        <div>
            <img src={Logo} alt="logo" style={{width:200}}/>
        </div>

        <nav className='flex gap-10 font-bold'> 
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/page2">
                    Movies
                </Link>
            </div>
            <div>
                <Link to="/page3">
                    Sports
                </Link>
            </div>
            <div>
                <Link to="/page4">
                    Kids
                </Link>
            </div>
        </nav>

        <div className='flex justify-end gap-5'>
            {/* <input type="text" placeholder='Search the movies' className='border-1 p-1 rounded-full text-slate-200 w-96'/> */}
            <button type="submit" className=''>
                <img src={search} alt="search button" />
            </button>
            <img src={alert} alt="alert button" />
            <img src={smiley} alt="smiley" className='bg-yellow-500 h-8 w-8 flex justify-center items-center'/>
            <img src={arrow} alt="arrow" />
        </div>

    </div>

  )
}

export default NavBar