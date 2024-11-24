import React from 'react'
import './Hero.css'
import photo from '../../../assets/photo.jpeg'

const Hero = () => {
  return (
    <div  className='hero'>
        <img src={photo}  alt=""/>
        <h1>I'am Afaque Wasif , frontend developer based in India</h1>
        <p>I am a frontend developer from Delhi, India with 0 years of experience </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}


export default Hero
