import React, { useState } from 'react';
import './DynamicLetters.css'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'

function DynamicLetters() {
    const [word, setWord] = useState('Example...')
    return (
        <div className="dynamic-letters">
            <h1>Dynamic Letters</h1>
            <span>I wanted to create an organic animation to websites by creating motion to letters.</span>
            <br />
            <input type="text" value={word} onChange={e => setWord(e.target.value)}/>
            <FloatyLetters phrase={word} maxDuration={15} minDuration={5} />
        </div>
    )
}

export default DynamicLetters