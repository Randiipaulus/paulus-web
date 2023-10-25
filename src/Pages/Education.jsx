import React from 'react'
import './EducationStyle.css'
import ga from '../Assets/education/ga.png'
import google from '../Assets/education/google.webp'
import high from '../Assets/education/high.png'
import lccc from '../Assets/education/lccc.png'



const Education = () => {
  return (
    <div className='bk-education'>
        <h1>Education</h1>

      <div className="E-box">
        <div className="E-logo-box">
        <img src={ga} alt="" className='E-logo'/>
        </div>
        
      <div className="box-edu">
          <h2>General Assembly</h2>
          <div className="E-left">
            <p className="E-assing">
            Software Engineering Immerse |  Remote  | Jan 2023 - July 2023</p>
          </div>
          <div className="E-dicript">
            <p className='E-summ'>Full-stack software engineering immersive student 
              in an intensive, 24-week, 450+ hour program focused
              on product development fundamentals, object-oriented
              programming, MVC frameworks, data modeling, and
              team collaboration strategies. Developed a 
              portfolio of individual and group projects.</p>
          </div>
        </div>
      </div>
      <div className="E-box">
        <div className="E-logo-box">
        <img src={google} alt="" className='E-logo'/>
        </div>

      <div className="box-edu">
          <h2>Google Certifications</h2>
          <div className="E-left">
            <p className="E-assing">
            Google IT Support Professional Certificate |  Remote  | June 2023 - Agust 2022</p>
          </div>
          <div className="E-dicript">
            <p className='E-summ'>I earned a Google IT Support 
            Professional Certificate, which gave me the skills 
            and knowledge to provide technical support for a variety
            of IT products and services. I can troubleshoot common
            computer problems, provide customer service, and use
            IT tools and technologies. I am also familiar with
            networking, operating systems, system administration,
            and cloud computing.</p>
          </div>
        </div>
      </div>

      <div className="E-box">
        <div className="E-logo-box">
        <img src={lccc} alt="" className='E-logo'/>
        </div>

      <div className="box-edu">
          <h2>Lehigh Carbon Community College</h2>
          <div className="E-left">
            <p className="E-assing">
            Physical therapist assistant |  In-Person  | Sep 2019 - May 2021</p>
          </div>
          <div className="E-dicript">
            <p className='E-summ'>A physical therapist assistant (PTA) is 
            a healthcare professional who works under the supervision of a 
            physical therapist (PT) to provide physical therapy services to
            patients. PTAs help patients recover from injuries and surgeries,
            improve their mobility and function, and manage chronic pain.</p>
          </div>
        </div>
      </div>

      <div className="E-box">
        <div className="E-logo-box">
        <img src={high} alt="" className='E-logo'/>
        </div>

      <div className="box-edu">
          <h2>Louis E. Dieruff High School</h2>
          <div className="E-left">
            <p className="E-assing">
            High School |  In-Person  | May 2018</p>
          </div>
          <div className="E-dicript">
            <p className='E-summ'>In high school, students take a 
            variety of courses, including English, math, science,
            social studies, and foreign languages. They also have
            the opportunity to participate in extracurricular activities,
            such as sports, clubs, and student government.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Education