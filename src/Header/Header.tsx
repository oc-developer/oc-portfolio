import React from 'react'

import './Header.scss'

import Logo from '../Logo/MiniLogo/MiniLogo'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className="header-top fade-in">
            <div className="header-section left">
            </div>
            <div className="header-section center">
                <div className="logo" onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                    <Link to={"/"}>
                        <Logo color="black" />
                    </Link>
                </div>
            </div>
            <div className="header-section right"></div>
        </div >
    )
}

export default Header