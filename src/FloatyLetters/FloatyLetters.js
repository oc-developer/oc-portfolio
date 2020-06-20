import React from 'react'
import './FloatyLetters.css'
import useDimensions from 'react-use-dimensions'


function FloatyLetters(props) {
    const [ref, letterSize] = useDimensions();
    const letterStyle = {
        width: letterSize.width,
        height: letterSize.width
    }
    const maxDuration = 15
    const minDuration = 5

    const XAniDurationFn = randAniDurationInit(maxDuration, minDuration);
    const XstartDirectionFn = aniDelayDirectionInit(XAniDurationFn());
    
    const YAniDurationFn = randAniDurationInit(maxDuration, minDuration);
    const YstartDirectionFn = aniDelayDirectionInit(XAniDurationFn());

    return (
        <div className='floaty-box fade-letter' style={letterStyle}>
            <div className='floaty-ani-x' style={{ animationDuration: `${XAniDurationFn()}ms`, animationDelay: `-${XstartDirectionFn()}ms` }}>
                <div className='floaty-ani-y' style={{ animationDuration: `${YAniDurationFn()}ms`, animationDelay: `-${YstartDirectionFn()}ms` }}>
                    <div ref={ref} className='floaty-letter'>H</div>
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