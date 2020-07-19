import React, { useState } from 'react';
import './DynamicLetters.css'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'

export default function DynamicLetters() {
    const placeholder = 'Example...'
    const [phrase, setPhrase] = useState('')
    const [maxDuration, setMaxDuration] = useState(15)
    const [minDuration, setMinDuration] = useState(5)

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
            <label>{maxDuration}</label>
            <input type="range" value={maxDuration} min={1} max={60} onChange={e => setMaxDuration(Number(e.target.value))} />
            <br/>
            <label>{minDuration}</label>
            <input type="range" value={minDuration} min={1} max={60} onChange={e => setMinDuration(Number(e.target.value))} />
            <br/>
            <FloatyLetters phrase={setPhraseDefault()} maxDuration={15} minDuration={5} />
        </div>
    )
}