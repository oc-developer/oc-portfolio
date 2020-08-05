import React from 'react'
import { Link } from 'react-router-dom'

import './Notes.scss'

import FloatyLetters from '../FloatyLetters/FloatyLetters'

export default function Notes() {
    return (
        <div className="section grid-items" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <h1 className="section-header">
                notes
            </h1>
            <Link to={'floaty-letter'} className="section-content section-hover note note-floaty-letter">
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