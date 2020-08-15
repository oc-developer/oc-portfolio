import React, { useState } from 'react'
import './Leftbar.scss'
import LeftbarIcon from './LeftbarIcon/LeftbarIcon'
import { Link } from 'react-router-dom'
import Logo from '../Logo/MiniLogo/MiniLogo'


export default function Leftbar() {
    const [isOpen, setOpen] = useState(false);

    function openLeftbar() {
        setOpen(!isOpen);
    }

    return (
        <div className={isOpen ? "leftbar open" : "leftbar"}>
            <div className={isOpen ? "leftbar-btn open" : "leftbar-btn"} onClick={() => openLeftbar()}>
                <LeftbarIcon state={isOpen ? 'open' : ''} />
            </div>
            <div className="leftbar-content"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                <Link to={"/"} onClick={() => setOpen(false)}>
                    <div className="logo">
                        <Logo color="white" />
                    </div>
                </Link>
                <div className="divider"></div>
                <div className="links">
                    <Link to={'/'} onClick={() => setOpen(false)}>
                        <div className="link">Overview</div>
                    </Link>
                    <Link to={'/floaty-letter'} onClick={() => setOpen(false)}>
                        <div className="link">Floaty Letters</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}