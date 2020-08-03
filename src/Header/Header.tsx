import React from 'react'

import './Header.scss'

import LeftbarIcon from '../Leftbar/LeftbarIcon/LeftbarIcon'
import MiniLogo from '../Logo/MiniLogo/MiniLogo'

function Header() {
    return (
        <div className="header fade-in">
            <div className="header-section left">
                <div className="leftbar-btn">
                    <LeftbarIcon />
                </div>
            </div>
            <div className="header-section center">
                <div className="logo" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    <MiniLogo />
                </div>
            </div>
            <div className="header-section right"></div>
        </div >
    )
}

export default Header