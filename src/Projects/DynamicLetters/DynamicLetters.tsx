import React, { useState } from 'react';
import './DynamicLetters.css'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'

export default function DynamicLetters() {
    const placeholder = 'Example...'
    const [phrase, setPhrase] = useState('')
    const [Speed, setSpeed] = useState(1)

    const setPhraseDefault = () => {
        return phrase || placeholder;
    }

    return (
        <div className="dynamic-letters">
            <h1>Dynamic Letters</h1>
            <span>I wanted to create an organic animation to websites by creating motion to letters.</span>
            <br />
            <input type="text" placeholder={placeholder} value={phrase} onChange={e => setPhrase(e.target.value)} />
            <br/>
            <label>{Speed}</label>
            <input type="range" value={Speed} step={0.1} min={0.1} max={10} onChange={e => setSpeed(Number(e.target.value))} />
            <br/>
            <FloatyLetters phrase={setPhraseDefault()} maxDuration={15*Speed} minDuration={5*Speed} />
        </div>
    )
}