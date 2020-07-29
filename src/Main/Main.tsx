import React from 'react'

import './Main.scss'

import Protagonist from '../Protagonist/Protagonist'
import Notes from '../Notes/Notes'

export default function Main() {
    return (
        <div className="main">
            <Protagonist />
            <Notes />
        </div>
    )
}