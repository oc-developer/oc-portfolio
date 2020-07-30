import React from 'react'
import './About.scss'
import me from './oliver-mini.jpeg'

export default function About() {
    return (
        <div className="section grid-items section-about">
            <h2 className="section-header">me</h2>
            <div className="section-content about-me">
                <div className="left">
                    <h3 className="header">Oliver Carlsson</h3>
                    <div className="dash"></div>
                    <span className="breif">I’m a social developer, I love to create and to bring teams closer together. 
                        I design, develop, create and share my passion. 
                        You got an interesting project? Please say hello!</span>
                </div>
                <div className="right">
                    <img className="image-me" src={me} alt="Oliver" />
                </div>
            </div>
        </div>
    )
}