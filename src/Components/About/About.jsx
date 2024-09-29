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
                    <p>I</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
