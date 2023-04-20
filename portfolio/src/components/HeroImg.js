import React from 'react'
import "./HeroImgStyle.css"
import IntroImg from "../assets/back.jpg"
import { Link } from 'react-router-dom'
const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img'
                    src={IntroImg} alt='IntroImg'
                />
            </div>
            <div className='content'>
            <p> HI, I'M Ishant Sharma</p>
            <h1>Web/Android Developer</h1>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact  </Link>
                </div>
            </div>
            
        </div>
    )
}

export default HeroImg