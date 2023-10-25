import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo-bk/logo.png' 
import '../components/HeaderStyle.css'
import video from '../Assets/logo-bk/bk-video.mp4'


const Header = () => {
  return (

    <div className="video-about">
      <video src={video} autoPlay loop muted className='bk-video' />

    <div className='bk-head'>

      <ul className='content-head'>
        <div className='box-head'>
        <Link to='/home'><img src={logo} alt=""  className='logo-head'/></Link>
        </div>

        <div className='header-box'>
          <li>
            <Link className='list-head'  to='/about'>About</Link>
          </li>
          <li>
            <Link className='list-head' to='/skills'>skills</Link>
          </li>
          <li>
            <Link className='list-head' to='/education'>Education</Link>
          </li>
          <li>
            <Link className='list-head' to='/experience'>Experience</Link>
          </li>
          <li>
            <Link className='list-head' to='/projects'>Projects</Link>
          </li> 
          <li>
            <a href="https://docs.google.com/document/d/1BH7ABF_Vxn8tqcsco-C_fGfAQhqbakxeYRKZGtZmw9Y/edit?usp=sharing" 
            className='list-head' target="_blank" rel="noreferrer">Resume</a>
          </li>

        </div>

      </ul>
    </div>
  </div>
  )
}

export default Header