import React from 'react'
import { Link } from 'react-router-dom'


import './Notes.css'

import FloatyLetters from '../FloatyLetters/FloatyLetters'

export default function Notes() {
    return (
        <div className="section grid-items notes-section">
            <h2 className="section-header">
                notes
            </h2>
            <Link to={'floaty-letter'} className="section-content note note-floaty-letter">
                <h2 className="note-header">
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="FLOATY" />
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="LETTERS" />
                </h2>
                <div className="dash"></div>
                <span className="note-text">A walk through of how you can create a organically moving letters,
                spicing up your app or making it compeletly useless.</span>
            </Link>
        </div>
    )
}