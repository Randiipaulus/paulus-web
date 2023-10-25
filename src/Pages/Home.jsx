import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../Assets/logo-bk/logo.png'
import './HomeStyle.css'
import video from '../Assets/logo-bk/bk-video.mp4'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

const Home = () => {
  return (

    <div className="all-home">
        <video src={video} autoPlay loop muted className='home-video' />

    <div className='bk-home'>

      <div className="pic-home">
        <img src={logo} alt="" className='logo-home'/>
      </div>

      <div className="box-home">
            <Link to='/about' className='btn' id='section-home'>About</Link>
            <Link to='/skills' className='btn' id='section-home'>Skills</Link>
            <Link to='/education' className='btn' id='section-home'>Education</Link>
            <Link to='/experience' className='btn' id='section-home'>Experience</Link>
            <Link to='/projects' className='btn' id='section-home'>Projects</Link>
            <a href="https://docs.google.com/document/d/1BH7ABF_Vxn8tqcsco-C_fGfAQhqbakxeYRKZGtZmw9Y/edit" 
            className='btn' target="_blank" id='section-home' rel="noreferrer">Resume</a>
      </div>

      <div className='socials'>
          <a href="https://www.linkedin.com/in/rpaulus/" className='links' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          <a href="https://github.com/Randiipaulus?tab=repositories" className='links' target="_blank" rel="noreferrer"><AiFillGithub /></a>
          <a href="mailto:randyulises18@gmail.com" className='links' target="_blank" rel="noreferrer"><BiLogoGmail /></a>
      </div>

        </div>
    </div>
  )
}

export default Home