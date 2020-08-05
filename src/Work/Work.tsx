import React from 'react'
import './Work.scss'

import ictechLogo from '../Utils/ictech.png'
import wcar from '../Utils/wirelesscar-white.svg'
import tibco from '../Utils/tibco.svg'

export default function Work() {
    return (
        <div className="section grid-items work">
            <h1 className="section-header">work</h1>
            <div className="section-content section-work">
                <a href="https://ictech.se/" className="work-place work-hover ictech">
                    <img className="logo" src={ictechLogo} alt="ictech" />
                    <p> I'm currently a consultant at ictech, we are a creative tech-company for the software development industry, based out of Gothenburg.</p>
                </a>
                <a href="https://www.wirelesscar.com/" className="work-place work-hover wireless-car">
                    <img className="logo" src={wcar} alt="Wireless Car" />
                    <p>Lead front-end developer for wireless car call center services developing and modernize the platform and its user experience.</p>
                </a>
                <a href="https://www.tibco.com/products/tibco-spotfire" className="work-place work-hover tibco">
                    <img className="logo" src={tibco} alt="TIBCO" />
                    <p>Tibco Spotfire Application developer for the Data Analytics platform.</p>
                </a>
            </div>
        </div>
    )
}