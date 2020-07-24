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
            <span>
                I wanted to make letters part of the dynamic experience in websites.
                To make the site more alive I created an organic library that randomize
                motion according to a few restrictions. <br /><br />
            </span>
            <span>
                Floaty letter is based on css animation and uses an infinite loop of translate. It contains three boxes:
                The X-Box moving the letter in the x-axis.
                </span>
            <div className="floaty-demo">
                <div className="demo-box x-box"></div>
            </div>
            <span>
                The Y-box moving the letter in y-axis.
            </span>
            <div className="floaty-demo">
                <div className="demo-box y-box"></div>
            </div>
            <span>
                ...and the letter.
            </span>
            <div className="floaty-demo">
                <div className="demo-box letter-box">
                    A
                </div>
            </div>
            <span>
                Putting these boxes together create an moving letter, but not very organic.
            </span>
            <div className="floaty-demo">
                <div className="demo-box x-box">
                    <div className="demo-box y-box">
                        <div className="demo-box letter-box">A</div>
                    </div>
                </div>
            </div>
            <span>
                ...however having different animation durations on the x and y-axis creates the feeling of the letter moving in an arbitrary way.
            </span>
            <div className="floaty-demo">
                <div className="demo-box x-box slow-box">
                    <div className="demo-box y-box">
                        <div className="demo-box letter-box">A</div>
                    </div>
                </div>
            </div>
            <span>
                With no background colors it looks even better.
            </span>
            <div className="floaty-demo">
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">A</div>
                    </div>
                </div>
            </div>
            <span>
                Using this technique when creating a phrase shows that it is important to have variation for each letter.
            </span>
            <div className="floaty-demo">
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">H</div>
                    </div>
                </div>
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">e</div>
                    </div>
                </div>
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">l</div>
                    </div>
                </div>
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">l</div>
                    </div>
                </div>
                <div className="demo-box x-box slow-box no-color">
                    <div className="demo-box y-box no-color">
                        <div className="demo-box letter-box no-color">o</div>
                    </div>
                </div>
            </div>
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
        </div>
    )
}