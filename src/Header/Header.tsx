import React from 'react'

import './Header.scss'

import LeftbarIcon from '../Leftbar/LeftbarIcon/LeftbarIcon'
import MiniLogo from '../Logo/MiniLogo/MiniLogo'

function Header() {
    return (
        <div className="header">
            <div className="leftbar-btn">
                <LeftbarIcon />
            </div>
            <div className="logo">
                <MiniLogo />
            </div>
        </div>
    )
}

export default Header