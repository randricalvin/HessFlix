import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between font-serif'>
        <div>
            <h1>
                LOGO
            </h1>
        </div>
        <nav className='flex gap-10'> 
            <div>
                <Link to="/">
                    Page 1
                </Link>
            </div>
            <div>
                <Link to="/page2">
                    Page 2
                </Link>
            </div>
            <div>
                <Link to="/page3">
                    Page 3
                </Link>
            </div>
            <div>
                <Link to="/page4">
                    Page 4
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar