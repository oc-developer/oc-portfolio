import React from 'react'

import './About.scss'
import me from './oliver-mini.jpeg'
import twitter from '../Utils/Twitter-logo.svg'

export default function About() {
    return (
        <div className="section grid-items section-about">
            <h2 className="section-header">me</h2>
            <div className="section-content about-me">
                <div className="left">
                    <h3 className="header">Oliver Carlsson</h3>
                    <div className="dash"></div>
                    <span className="breif">
                        I’m a social developer,
                        I love to create in collaboration. I collaborate with design, development,
                        creativity and sharing my passion. You got an interesting project?
                        Please say hello!
                    </span>
                    <div className="links">
                        <a href="https://github.com/oc-developer">
                            <svg className="github-mark" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="62" height="60" viewBox="0 0 62 60">
                                <path d="M31 0a30.7 30.7 0 0 0-9.8 59.9c1.55.3 2.116-.6 2.116-1.4s-.026-2.7-.042-5.3c-8.622 1.9-10.44-4.1-10.44-4.1-1.414-3.5-3.448-4.5-3.448-4.5-2.815-1.9.213-1.9.213-1.9a6.74 6.74 0 0 1 4.746 3.2c2.766 4.7 7.254 3.3 9.023 2.6a6.3 6.3 0 0 1 1.966-4.1c-6.88-.8-14.12-3.5-14.12-15.2a11.964 11.964 0 0 1 3.193-8.3 10.9 10.9 0 0 1 .3-8.1s2.6-.9 8.525 3.1a30.617 30.617 0 0 1 15.522 0c5.92-4 8.517-3.1 8.517-3.1a10.886 10.886 0 0 1 .308 8.1 11.946 11.946 0 0 1 3.186 8.3c0 11.8-7.248 14.4-14.155 15.1a7.52 7.52 0 0 1 2.1 5.7c0 4.1-.04 7.5-.04 8.5 0 .8.56 1.7 2.13 1.4A30.708 30.708 0 0 0 31 0"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/obecarlsson">
                            <img className="twitter" src={twitter} alt=""/>
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