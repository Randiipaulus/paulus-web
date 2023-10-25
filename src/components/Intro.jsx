import React from 'react'
import {Link} from 'react-router-dom';
import './IntroStyle.css'
import video from '../Assets/logo-bk/bk-video.mp4'
import logo from '../Assets/logo-bk/logo.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Typewriter from 'typewriter-effect'

function Intro() {
  return (
    <div className='bk-intro'>

      <video src={video} autoPlay loop muted className='bk-video'></video>
       
      <div className="bk-content">
      <img src={logo} alt="" className='bk-logo' />

      <h1 className='bk-name'>Randy Paulus</h1>
          <h4 className="text-intro">
            
          </h4>

          <Link to='/home' className='btn' id='well'>Welcome</Link>
      </div>

      <div className='socials'>
          <a href="https://www.linkedin.com/in/rpaulus/" className='links' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          <a href="https://github.com/Randiipaulus?tab=repositories" className='links' target="_blank" rel="noreferrer"><AiFillGithub /></a>
          <a href="mailto:randyulises18@gmail.com" className='links' target="_blank" rel="noreferrer"><BiLogoGmail /></a>
      </div>

    </div>
  )
}

export default Intro