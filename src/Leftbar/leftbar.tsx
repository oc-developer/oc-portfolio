import React from 'react'
import './leftbar.scss'
import LeftbarIcon from './LeftbarIcon/LeftbarIcon'
import { Link } from 'react-router-dom'


function Leftbar() {
    return (
        <div className="leftbar">
            <div>close button</div>
            <div className="header">
                Oliver Carlsson
            </div>
            <Link to={'/'}>
                <div>Overview</div>
            </Link>
            <Link to={'/floaty-letter'}>
                <div>Floaty letters</div>
            </Link>
        </div>
    )
}

export default Leftbar