import React from 'react'
import './Work.scss'

import ictechLogo from '../Utils/ictech.png'
import wcar from '../Utils/wirelesscar-white.svg'

export default function Work() {
    return (
        <div className="section grid-items">
            <h2 className="section-header">Work</h2>
            <div className="section-content section-work">
                <div className="half">

                    <a href="https://ictech.se/" className="work-place ictech">
                        <img className="ictech-logo" src={ictechLogo} alt="ictech" />
                        <span> I'm currently a consultant at ictech, we are a creative tech-company for the software development industry, based out of Gothenburg.</span>
                    </a>
                    <a href="https://www.wirelesscar.com/" className="work-place wireless-car">
                        <img className="wcar-logo" src={wcar} alt="Wireless Car" />
                        <span>Lead front-end developer for wireless car call center services developing and modernize the platform and its user experience.</span>
                    </a>
                </div>
                <div className="work-place">
                    <h2>Tibco Spotfire</h2>
                </div>
            </div>
        </div>
    )
}