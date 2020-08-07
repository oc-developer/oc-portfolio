import React, { useState } from 'react';
import './DynamicLetters.scss'
import FloatyLetters from '../../FloatyLetters/FloatyLetters'
import DemoLetter from './DemoLetter/DemoLetter'

export default function DynamicLetters() {
    const placeholder = 'HELLO!'
    const [phrase, setPhrase] = useState('')
    const [Speed, setSpeed] = useState(1)
    const [SliderScale, setSliderScale] = useState(0)

    const setPhraseDefault = () => {
        return phrase || placeholder;
    }

    return (
        <div className="content">
            <div className="article dynamic-letters">
                <span className="floaty-letters-header">
                    {/* Make sure word wrap works correctly, should only wrap round the word, not for each letter */}
                    {/* <FloatyLetters phrase="Floaty Letters" maxDuration={15} minDuration={5} /> */}
                </span>
                <h1>Floaty Letters</h1>
                <p>
                    I wanted to add to find away for websites to feel more organic and alive. I thought,
                    by creating random movement in the letters,
                    surely the websites will feel cosy and organic. I decided to build a library that creates these randomly moving letters,
                    nice and efficently.
                </p>
                <p>This article goes through the steps of the technical soloution I came up with.</p>
                <div className="show-box">
                    <FloatyLetters phrase="HELLO!" maxDuration={15} minDuration={5} />
                </div>
                <p>
                    Floaty letters is based on css animation and uses an infinite loop and translates each letter individually.
                    It contains three boxes:
                    </p>
                <div className="show-box" style={{ display: "flex" }}>
                    <div className="title-box">
                        <h4>X-Box</h4>
                        <DemoLetter showX={true} xDuration={1} />
                    </div>
                    <div className="title-box">
                        <h4>Y-Box</h4>
                        <DemoLetter showY={true} yDuration={1} />
                    </div>
                    <div className="title-box">
                        <h4>Letter-Box</h4>
                        <DemoLetter letter="H" letterBg={true} />
                    </div>
                </div>
                <p>
                    Putting these boxes together create a moving letter, but it is not very organic.
                    </p>
                <div className="show-box" style={{ display: "flex" }}>
                    <DemoLetter showX={true} xDuration={1} showY={true} yDuration={1} letter="H" letterBg={true} />
                    <DemoLetter letter="H" xDuration={1} yDuration={1} />
                </div>
                <p>
                    To make the letters feel organic we need to add randomness to the movement,
                    we do this by giving the x and y axis different durations.
                </p>
                <div className="show-box" style={{ display: "flex" }}>
                    <DemoLetter showX={true} showY={true} letterBg={true} xDuration={1} yDuration={0.651} letter="H" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="H" />
                </div>
                <p>
                    Now the letter is not as predictable,
                    but when each letter has the exakt same duration it becomes predictable again.
                    </p>
                <div className="show-box" style={{ display: "flex" }}>
                    <DemoLetter xDuration={1} yDuration={0.651} letter="H" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="E" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="L" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="L" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="O" />
                    <DemoLetter xDuration={1} yDuration={0.651} letter="!" />
                </div>
                <p>Randomize each letter basically gets us the floaty letter package...</p>
                <div className="show-box" style={{ display: "flex" }}>
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="H" />
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="E" />
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="L" />
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="L" />
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="O" />
                    <DemoLetter xDuration={randDuration()} yDuration={randDuration()} letter="!" />
                </div>
                <p>Slowing it down, randomize startring position and direction,
                    makes it a nice ambient and organic feel.</p>
                <div className="show-box" style={{ fontSize: '1.5rem' }}>
                    <FloatyLetters maxDuration={15} minDuration={5} phrase="HELLO!" />
                </div>
                <div className="seperator"></div>
                <p>Try it yourself*:</p>
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
                <div className="show-box">
                    <FloatyLetters phrase={setPhraseDefault()} maxDuration={15 / Speed} minDuration={5 / Speed} />
                </div>
                <p className="side-note">* Works best on Chrome, Safari seems to optimize efficiency and behaves badly.
                I still have a few bugs that needs to be take care of before I can publish it to npm.
                </p>
            </div>
        </div>
    )
}

const randDuration = () => Math.random() + 0.5