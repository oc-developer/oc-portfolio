import React from 'react'

import './Header.css'

import LeftbarIcon from '../Leftbar/LeftbarIcon/LeftbarIcon'
import MiniLogo from '../Logo/MiniLogo/MiniLogo'

function Header() {
    return (
        <div className="header">
            <LeftbarIcon />
            <MiniLogo />
        </div>
    )
}

export default Header