import React from 'react'
import './FloatyLetters.css'
import useDimensions from 'react-use-dimensions'

function FloatyLetters(props) {
    const phraseList = props.word.split("");
    const letters = phraseList.map((l, i) => {
        return (
            <FloatyLetter
                letter={l}
                key={i}
                maxDuration={props.maxDuration}
                minDuration={props.minDuration}
            />
        )
    })
    return (
        <div className="floaty-letters">
            {letters}
        </div>
    )
}

function FloatyLetter(props) {
    const [ref, letterSize] = useDimensions();
    const height = isNaN(letterSize.height) ? 0 : letterSize.height;
    
    const letterStyle = {
        width: height * 0.7,
        height: height * 0.7
    }

    const XAniDurationFn = randAniDurationInit(props.maxDuration, props.minDuration);
    const XstartDirectionFn = aniDelayDirectionInit(XAniDurationFn());

    const YAniDurationFn = randAniDurationInit(props.maxDuration, props.minDuration);
    const YstartDirectionFn = aniDelayDirectionInit(XAniDurationFn());

    return (
        <div className='floaty-box fade-in' style={letterStyle}>
            <div className='floaty-ani-x' style={{ animationDuration: `${XAniDurationFn()}ms`, animationDelay: `-${XstartDirectionFn()}ms` }}>
                <div className='floaty-ani-y' style={{ animationDuration: `${YAniDurationFn()}ms`, animationDelay: `-${YstartDirectionFn()}ms` }}>
                    <div ref={ref} className='floaty-letter'>{props.letter}</div>
                </div>
            </div>
        </div>
    );
}

/**
* A curry function that sets the outer bounds of animation duration cycle.
* @param {number} maxDuration - The longest time an animation cycle can take.
* @param {number} minDuration - The fastest time an animation cycle can take.
* @returns {Function} the function with set max and min duration.
*/
const randAniDurationInit = (maxDuration, minDuration) => () => {
    const flexDuration = maxDuration * 1000 - minDuration * 1000;
    return Math.round(Math.random() * flexDuration + minDuration * 1000);
};

/**
* Takes the animation cycle duration and makes sure the letter appears in the middle of the animation.
* @param {number} loopDuration - The duration which one cyckle takes of the animation.
*/
const aniDelayDirectionInit = loopDuration => () => {
    return Math.random() > 0.5 ? loopDuration / 2 : (loopDuration / 2) * 3;
}

export default FloatyLetters;