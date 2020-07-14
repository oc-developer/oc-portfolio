import React from 'react'
import './leftbarIcon.css'

function LeftbarIcon() {
    return (
        // <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path className="arrow-lower" d="M26.8284 41.424C25.2663 39.8619 25.2663 37.3292 26.8284 35.7671L40.7671 21.8284C42.3292 20.2663 44.8619 20.2663 46.424 21.8284V21.8284C47.9861 23.3905 47.9861 25.9232 46.424 27.4853L32.4853 41.424C30.9232 42.9861 28.3905 42.9861 26.8284 41.424V41.424Z" />
        //     <path className="arrow-upper" d="M26.8284 6.82843C28.3905 5.26633 30.9232 5.26633 32.4853 6.82843L46.424 20.7671C47.9861 22.3292 47.9861 24.8619 46.424 26.424V26.424C44.8619 27.9861 42.3292 27.9861 40.7671 26.424L26.8284 12.4853C25.2663 10.9232 25.2663 8.39052 26.8284 6.82843V6.82843Z" />
        //     <path className="hamburger hamburger-3" d="M0 40C0 37.7909 1.79086 36 4 36H44C46.2091 36 48 37.7909 48 40V40C48 42.2091 46.2091 44 44 44H4C1.79086 44 0 42.2091 0 40V40Z" />
        //     <path className="hamburger hamburger-2" d="M0 24C0 21.7909 1.79086 20 4 20H44C46.2091 20 48 21.7909 48 24V24C48 26.2091 46.2091 28 44 28H4C1.79086 28 0 26.2091 0 24V24Z" />
        //     <path className="hamburger hamburger-1" d="M0 8C0 5.79086 1.79086 4 4 4H44C46.2091 4 48 5.79086 48 8V8C48 10.2091 46.2091 12 44 12H4C1.79086 12 0 10.2091 0 8V8Z" />
        // </svg>
        <div className="leftbar-icon">
            <div className="hamburger burger-line-top"></div>
            <div className="hamburger burger-line-bottom"></div>
            <div className="hamburger burger-line-center"></div>
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
        </div>
    )
}

export default LeftbarIcon

