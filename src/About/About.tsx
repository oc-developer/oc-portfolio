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
                    <span className="breif">I’m a social developer,
                    I love to create in collaboration. I collaborate with design, development,
                    creativity and sharing my passion. You got an interesting project?
                    Please say hello!</span>
                    <div>links</div>
                </div>
                <div className="right">
                    <img className="image-me" src={me} alt="Oliver" />
                </div>
            </div>
        </div>
    )
}