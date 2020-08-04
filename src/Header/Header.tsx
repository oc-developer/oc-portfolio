import React from 'react'

import './Header.scss'

import MiniLogo from '../Logo/MiniLogo/MiniLogo'

function Header() {
    return (
        <div className="header-top fade-in">
            <div className="header-section left">
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