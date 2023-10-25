import React from 'react'
import './AboutStyle.css'
import pic1 from '../Assets/about/me.jpg'
import video from '../Assets/logo-bk/bk-video.mp4'

 
const About = () => {
  return (

    <div className="video-about">
      <video src={video} autoPlay loop muted className='bk-video' />
    <div className='bk-about'>

      <h1 className='about-title'>About me</h1>

       <div className="body-about">

          <div className="firs-pic">
            <img src={pic1} alt="" className='pic-1'/>
          </div>

          <div className="about-box">
          <p className='content-about'>My primary area of expertise is software engineering. My professional journey began in the 
          medical field, but my fascination with computers eventually led me to transition into the 
          world of software engineering. I embarked on this career path through General Assembly.
          </p>

          <p className='content-about'>
          A pivotal moment in my software engineering journey was the independent development of
          'Simon Says,' a JavaScript-based game in my portfolio. Overcoming intricate logic 
          challenges during this project solidified my passion for software engineering. My 
          specialization in frontend development emphasizes seamlessly blending design aesthetics
            with functional interfaces to create captivating digital experiences.
          </p>
          
          <p className='content-about'>
          My personal goals in this career are to establish a stable and fulfilling profession 
          that allows me to provide for my family while continually pursuing growth, learning, 
          and pushing the boundaries of my creativity to new heights.
          </p>
          </div>

          {/* <div className="sec-pic">
           <img src={pic1} alt="" className='pic-1'/>
          </div> */}

        </div> 
        </div>
    </div>
  )
}

export default About