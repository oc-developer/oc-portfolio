import React, { Component } from 'react'
import './FloatyLetter.css'

export type FloatyLetterProps = {
    maxDuration: number,
    minDuration: number,
    letter: string
}

type FloatyLetterState = {
    style: {
        width: number,
        height: number
    },
    xStartDirection: number,
    yStartDirection: number,
    xDuration: number,
    yDuration: number
}

export default class FloatyLetter extends Component<FloatyLetterProps, FloatyLetterState> {
    constructor(props: FloatyLetterProps) {
        super(props)

        const letterStyle = {
            width: 70,
            height: 70
        }

        const xDuration = this.randDuration(props.maxDuration, props.minDuration)
        const xStartDirection = this.randDirection(xDuration)

        const yDuration = this.randDuration(props.maxDuration, props.minDuration);
        const yStartDirection = this.randDirection(yDuration);

        this.state = {
            style: letterStyle,
            xStartDirection: xStartDirection,
            xDuration: xDuration,
            yStartDirection: yStartDirection,
            yDuration: yDuration
        }
    }

    /**
    * Randomly picks a duration of an animation cycle within the limits.
    * @param {number} maxDuration - The max cycle duration.
    * @param {number} minDuration - The min cycle duration
    * @returns {number} the duration.
    */
    randDuration(maxDuration: number, minDuration: number) {
        const flexDuration = maxDuration * 1000 - minDuration * 1000;
        return Math.round(Math.random() * flexDuration + minDuration * 1000);
    }

    /**
    * Takes the animation cycle duration and makes sure the letter appears in the middle of the animation.
    * @param {number} loopDuration - The duration which one cyckle takes of the animation.
    */
    randDirection(loopDuration: number) {
        return Math.random() > 0.5 ? loopDuration / 2 : (loopDuration / 2) * 3;
    }

    render() {
        return (
            <div className='floaty-box fade-in' style={this.state.style}>
                <div className='floaty-ani-x' style={{ animationDuration: `${this.state.xDuration}ms`, animationDelay: `-${this.state.xStartDirection}ms` }}>
                    <div className='floaty-ani-y' style={{ animationDuration: `${this.state.yDuration}ms`, animationDelay: `-${this.state.yStartDirection}ms` }}>
                        <div className='floaty-letter'>{this.props.letter}</div>
                    </div>
                </div>
            </div>
        )
    }
}