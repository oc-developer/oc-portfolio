import React from 'react'
import { Link } from 'react-router-dom'

import './Articles.scss'

import FloatyLetters from '../FloatyLetters/FloatyLetters'

export default function Articles() {
    return (
        <div className="section grid-items" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <h1 className="section-header">
                articles
            </h1>
            <Link to={'/floaty-letter'} className="section-content section-hover note note-floaty-letter">
                <h2 className="article-header">
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="FLOATY" />
                    <FloatyLetters maxDuration={10} minDuration={3} phrase="LETTERS" />
                </h2>
                <div className="dash"></div>
                <p className="note-text">A walk through of how you can create a organically moving letters,
                spicing up your app or making it compeletly useless.</p>
            </Link>
        </div>
    )
}