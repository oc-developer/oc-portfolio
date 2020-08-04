import React from 'react'
import './leftbar.scss'
import LeftbarIcon from './LeftbarIcon/LeftbarIcon'
import { Link } from 'react-router-dom'


function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbar-btn">
                <LeftbarIcon />
            </div>
            <div className="leftbar-content">
                <h2 className="header">
                    Oliver Carlsson
                </h2>
                <div className="divider"></div>
                <div className="links">
                    <Link to={'/'}>
                        <div className="link">Overview</div>
                    </Link>
                    <Link to={'/floaty-letter'}>
                        <div className="link">Floaty letters</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Leftbar