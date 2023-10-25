import React from 'react'
import css from '../Assets/skills/css.png'
import django from '../Assets/skills/django.png'
import docker from '../Assets/skills/docker.png'
import git from '../Assets/skills/git.png'
import html from '../Assets/skills/html.png'
import intellij from '../Assets/skills/intellij.png'
import js from '../Assets/skills/js.png'
import mongo from '../Assets/skills/mongo-db.png'
import mysql from '../Assets/skills/mysql.png'
import nodejs from '../Assets/skills/nodejs.png'
import photoshop from '../Assets/skills/photoshop.png'
import postman from '../Assets/skills/postman.png'
import python from '../Assets/skills/python.png'
import react from '../Assets/skills/react.png'
import spring from '../Assets/skills/spring.png'
import vs from '../Assets/skills/vs.png'
import './SkillsStyle.css'


const Skills = () => {
  return (
    <div className='bk-skills'>

      <h1 className='h1-skills'>Skills</h1>

      <p className='p-skills'>I love to learn new things and experiment with new technologies.
        These are some of the major languages, technologies, tools and platforms I have worked with:</p>

      <h2 className='h2-skills'>Languages & Databases</h2>
        <ul className='box-skills'>
          <li className='list-skills'><img src={mongo} alt="" className='img-skills'/></li>
          <li className='list-skills'><img src={postman} alt="" className='img-skills'/></li>
          <li className='list-skills'><img src={spring} alt="" /></li>
          <li className='list-skills'><img src={js} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={python} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={mysql} alt="" className='img-skills' /></li>
        </ul>

      <h2 className='h2-skills'>Frameworks & Technologies</h2>
        <ul className='box-skills'>
          <li className='list-skills'><img src={django} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={react} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={nodejs} alt="" className='img-skills' /></li>
          </ul>

      <h2 className='h2-skills'>Tools, Platforms & Markup language</h2>
        <ul className='box-skills'>
          <li className='list-skills'><img src={git} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={docker} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={intellij} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={html} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={css} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={vs} alt="" className='img-skills' /></li>
          <li className='list-skills'><img src={photoshop} alt="" className='img-skills' /></li>
        </ul>


    </div>
  )
}

export default Skills