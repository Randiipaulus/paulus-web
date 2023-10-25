import React from 'react'
import './ProjectsStyle.css'
import weather from '../Assets/projects/weather.png'
import shoe from '../Assets/projects/e-commerce.png'
import uni from '../Assets/projects/uni-travel.png'
import simon from '../Assets/projects/simon.png'
import sporting from '../Assets/projects/sporting.png'
import tech from '../Assets/projects/tech.png'

const Projects = () => { 
  return (
    <div className='bk-proj'>
      
      <h1 className='title-p'>Projects</h1>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={weather} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>Weather app</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Full funcitioning Weather-app
                <br />
                - Search bar letting the user search of a city of his choice 
                <br/>
                - Display current weather and constantly updated 
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>HTML</li>
                <li className='skills-p'>React</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>JavaScript</li>
              </ul>
              <div className="live-p">
                <a href="https://weather-app-react-mocha.vercel.app/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/Randiipaulus/weather-app-react" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={shoe} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>E-commerce</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Store with a selection from different brand of sneakers 
                <br />
                - Full funcitioning Shoe Store called "Premium Shoes" 
                <br/>
                - Sidebar full funtioning colors, prices, and category  
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>HTML</li>
                <li className='skills-p'>React</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>JavaScript</li>
              </ul>
              <div className="live-p">
                <a href="https://e-commerce-rho-gold.vercel.app/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/Randiipaulus/weather-app-react" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={uni} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>Uni-Travel</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Full funcitioning front-end space travel company
                <br />
                - Website with funtioning contact form and section 
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>HTML</li>
                <li className='skills-p'>React</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>JavaScript</li>
              </ul>
              <div className="live-p">
                <a href="https://uni-travel.vercel.app/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/Randiipaulus/weather-app-react" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={simon} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>Simon Says</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Classic Game
                <br />
                - Interactive Memory Challenge
                <br/>
                - Full functioning browser game 
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>HTML</li>
                <li className='skills-p'>React</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>JavaScript</li>
              </ul>
              <div className="live-p">
                <a href="https://uni-travel.vercel.app/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/Randiipaulus/weather-app-react" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={sporting} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>Sportings Goods</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Collab project 
                <br />
                - Store with a vareaity of sports items to choose from 
                <br/>
                - Full Functioning website a CRUD functionality               
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>Python</li>
                <li className='skills-p'>Django</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>HTML</li>
              </ul>
              <div className="live-p">
                <a href="https://sportsstore.fly.dev/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/jbarcs92/sportsstore" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <div className="p-box">
        <div className="p-logo-box">
          <img src={tech} alt="" className='p-logo'/>
        </div>
        <div className="content-p">
            <h2 className='name-p'>Tech Blog</h2>  
            <div className="discrip-p">
              <p className="summary-p">
                - Collab project 
                <br />
                - A Blog page
                <br/>
                - Full Functioning website a CRUD functionality               
              </p>
              <ul className='tools-p'>
                <li className='skills-p'>Python</li>
                <li className='skills-p'>Django</li>
                <li className='skills-p'>CSS</li>
                <li className='skills-p'>HTML</li>
              </ul>
              <div className="live-p">
                <a href="https://64ca4aa211530b1691cd0642--resonant-rolypoly-eabc9a.netlify.app/" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Live</a>
                <a href="https://github.com/bcarpenter7/react-blog-new/tree/main" className='btn' id='link-p' target="_blank" rel="noreferrer">
                  Github</a>
              </div>
            </div>
          </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Projects