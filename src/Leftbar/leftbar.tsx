import React from 'react'
import './leftbar.scss'
import LeftbarIcon from './LeftbarIcon/LeftbarIcon'

function Leftbar() {
    return (
        <div className="leftbar">
            <div className="header">
                <LeftbarIcon />
            </div>
        </div>
    )
}

export default Leftbar