import React, { useState } from 'react'
import './leftbar.scss'
import LeftbarIcon from './LeftbarIcon/LeftbarIcon'
import { Link } from 'react-router-dom'


function Leftbar() {
    const [isOpen, setOpen] = useState(false);

    function openLeftbar() {
        setOpen(!isOpen);
    }

    return (
        <div className={isOpen ? "leftbar open" : "leftbar"}>
            <div className={isOpen ? "leftbar-btn open" : "leftbar-btn"}  onClick={() => openLeftbar()}>
                <LeftbarIcon state={isOpen ? 'open' : ''} />
            </div>
            <div className="leftbar-content">
                <h3 className="header">
                    Oliver Carlsson
                </h3>
                <div className="divider"></div>
                <div className="links">
                    <Link to={'/'}>
                        <div className="link">Overview</div>
                    </Link>
                    <Link to={'/floaty-letter'}>
                        <div className="link">Floaty Letters</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Leftbar