import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return (
    <footer className="py-20 text-white">
        <div className='flex justify-end gap-10 w-1/4'>
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
        </div>
        <div className='flex w-4/5 justify-around text-lg font-bold'>
            <div className='py-5'>
                <p className='py-3'>Audio and Subtitles</p>
                <p className='py-3'>Media Center</p>
                <p className='py-3'>Privacy</p>
                <p className='py-3'>Contact Us</p>
            </div>
            <div className='py-5'>
                <p className='py-3'>Audio Description</p>
                <p className='py-3'>Inventor Relations</p>
                <p className='py-3'>Legal Notices</p>
            </div>
            <div className='py-5'>
                <p className='py-3'>Help Center</p>
                <p className='py-3'>Jobs</p>
                <p className='py-3'>Cookies Preferences</p>
            </div>
            <div className='py-5'>
                <p className='py-3'>Gift Cards</p>
                <p className='py-3'>Terms of Use</p>
                <p className='py-3'>Corporate Information</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer