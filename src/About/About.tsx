import React from 'react'

import './About.scss'
import me from './oliver-mini.jpeg'
import github from '../Utils/github-mark.svg'
import twitter from '../Utils/Twitter-logo.svg'
import linkedIn from '../Utils/linkedin.svg'

export default function About() {
    return (
        <div className="section grid-items section-about">
            <h1 className="section-header">me</h1>
            <div className="section-content about-me">
                <div className="left">
                    <h3 className="header">Oliver Carlsson</h3>
                    <div className="dash"></div>
                    <p className="bio">
                        I’m a social developer,
                        I love to create in collaboration. I collaborate with design, development,
                        creativity and sharing my passion.
                        Please say hello!
                    </p>
                    <div className="links">
                        <a href="https://github.com/oc-developer">
                            <img className="logo" src={github} alt="github"/>
                        </a>
                        <a href="https://twitter.com/obecarlsson">
                            <img className="logo" src={twitter} alt="twitter"/>
                        </a>
                        <a href="www.linkedin.com/in/oliver-carlsson">
                            <img className="logo" src={linkedIn} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img className="image-me" src={me} alt="Oliver" />
                </div>
            </div>
        </div>
    )
}