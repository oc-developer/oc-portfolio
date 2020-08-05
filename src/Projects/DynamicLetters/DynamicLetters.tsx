import React, { useState } from 'react';
import './DynamicLetters.scss'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'
import DemoLetter from './TestLetter/TestLetter'

export default function DynamicLetters() {
    const placeholder = 'Example...'
    const [phrase, setPhrase] = useState('')
    const [Speed, setSpeed] = useState(1)
    const [SliderScale, setSliderScale] = useState(0)

    const setPhraseDefault = () => {
        return phrase || placeholder;
    }

    return (
        <div className="content">
            <div className="section dynamic-letters">
            </div>
            <h2>Floaty Letters</h2>
            <p>
                I wanted to make letters part of the dynamic experience in websites.
                To make the site more alive I created an organic library that randomize
                motion according to a few restrictions. <br /><br />
            </p>
            <p>
                Floaty letter is based on css animation and uses an infinite loop of translate.
                It contains three boxes:
            </p>
            <div style={{ display: "flex" }}>
                <div className="title-box">
                    <p><b>X-Box</b></p>
                    <DemoLetter showX={true} xDuration={1} />
                </div>
                <div className="title-box">
                    <p><b>Y-Box</b></p>
                    <DemoLetter showY={true} yDuration={1} />
                </div>
                <div className="title-box">
                    <p><b>Letter-Box</b></p>
                    <DemoLetter letter="H" letterBg={true} />
                </div>
            </div>
            <p>
                Putting these boxes together create a moving letter, but not very organic...
            </p>
            <div style={{ display: "flex" }}>
                <DemoLetter showX={true} xDuration={1} showY={true} yDuration={1} letter="H" letterBg={true} />
                <DemoLetter letter="H" xDuration={1} yDuration={1} />
            </div>
            <p>
                ...however having different animation durations on the x and y-axis creates the feeling of the letter moving in an arbitrary way.
            </p>
            <div style={{ display: "flex" }}>
                <DemoLetter showX={true} showY={true} letterBg={true} xDuration={1} yDuration={0.651} letter="H" />
                <DemoLetter xDuration={1} yDuration={0.651} letter="H" />
            </div>
            <p>
                Using this technique when creating a phrase shows that it is important to have variation for each letter.
            </p>
            <div style={{ display: "flex" }}>
                <DemoLetter xDuration={1} yDuration={0.651} letter="H" />
                <DemoLetter xDuration={1} yDuration={0.651} letter="E" />
                <DemoLetter xDuration={1} yDuration={0.651} letter="L" />
                <DemoLetter xDuration={1} yDuration={0.651} letter="L" />
                <DemoLetter xDuration={1} yDuration={0.651} letter="O" />
            </div>
            <p>Randomize each letter basically gets us the floaty letter package...</p>
            <div style={{ display: "flex" }}>
                <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="H" />
                <DemoLetter xDuration={1} yDuration={randDuration()} letter="E" />
                <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="L" />
                <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="L" />
                <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="O" />
            </div>
            <p>Slowing it down, randomize startring position and direction, makes it a nice ambient and organic feel...</p>
            <FloatyLetters maxDuration={15} minDuration={5} phrase="HELLO" />

            <h3>Try it yourself*:</h3>

            <div className="settings">
                <input className="dynamic-text-input" type="text" placeholder={placeholder} value={phrase} onChange={e => setPhrase(e.target.value)} />
                <br />
                <label>Speed factor: {Speed.toFixed(2)}</label>
                <br />
                <input type="range" value={SliderScale} step={1} min={-4} max={4} onChange={e => {
                    const value = Number(e.target.value)
                    setSliderScale(value)
                    setSpeed(Math.exp(value))
                }} />
            </div>
            <FloatyLetters phrase={setPhraseDefault()} maxDuration={15 / Speed} minDuration={5 / Speed} />
            <p>* Works best on Chrome, Safari seems to optimize efficiency and behaves badly.</p>
        </div>
    )
}

const randDuration = () => Math.random() + 0.5