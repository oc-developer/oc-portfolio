import React from 'react'
import LeftbarIcon from '../Leftbar/LeftbarIcon/LeftbarIcon'
import Logo from '../Logo/Logo'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <LeftbarIcon />
            <Logo />
        </div>
    )
}

export default Header