import React from 'react'
import './Notes.css'

import FloatyLetters from '../FloatyLetters/FloatyLetters'

export default function Notes() {
    return (
        <div className="section grid-items notes-section">
            <h2 className="section-header">
                Notes
            </h2>
            <div className="note note-floaty-letter">
                <h2 className="note-header">
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="FLOATY" />
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="LETTERS" />
                </h2>
                <span className="note-text">A walk through of how you can create a organically moving letters, spicing up your app or making it compeletly useless</span>
            </div>
        </div>
    )
}