import React, { useState } from 'react';
import './DynamicLetters.css'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'

export default function DynamicLetters() {
    const placeholder = 'Example...'
    const [phrase, setPhrase] = useState('')
    const [Speed, setSpeed] = useState(1)
    const [SliderScale, setSliderScale] = useState(0)

    const setPhraseDefault = () => {
        return phrase || placeholder;
    }

    return (
        <div className="dynamic-letters">
            <h1>Dynamic Letters</h1>
            <span>I wanted to create an organic animation to websites by creating motion to letters.</span>
            <br />
            <input type="text" placeholder={placeholder} value={phrase} onChange={e => setPhrase(e.target.value)} />
            <br />
            <label>Speed factor: {Speed.toFixed(2)}</label>
            <br />
            <input type="range" value={SliderScale} step={1} min={-4} max={4} onChange={e => {
                const value = Number(e.target.value)
                setSliderScale(value)
                setSpeed(Math.exp(value))
            }} />
            <br />
            <FloatyLetters phrase={setPhraseDefault()} maxDuration={15 / Speed} minDuration={5 / Speed} />
        </div>
    )
}