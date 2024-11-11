import React from 'react'
import './About.css'
import theme_pattern from '../../../src/assets/theme_pattern.svg'
import profile_img from '../../../src/assets/profile_img.svg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>II am an unexperienced forntend developer with over 0 years of experience </p>
                    <p>A front-end developer is responsible for designing and implementing the user-facing aspects of a website or web application. They use technologies like HTML, CSS, and JavaScript to create visually appealing, responsive, and interactive user interfaces. A key part of their role involves ensuring that the website is optimized for performance across various devices and browsers, providing a seamless user experience. They often collaborate with designers and back-end developers to integrate visual designs and ensure functionality, while keeping up with the latest web development trends and best practices.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style ={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style ={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style ={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style ={{width:"50%"}} /></div>
                </div>

            </div>

        </div>
        <div className="about-acvhievements">
            <div className="about-achievement">
                <h1>0+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPELETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>
      
    </div>
  )
}

export default About
