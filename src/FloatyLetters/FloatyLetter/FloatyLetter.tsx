import React, { Component } from 'react'
import './FloatyLetter.css'
import ReactDOM from 'react-dom'
import memoize from "memoize-one";

export default class FloatyLetter extends Component<FloatyLetterProps, FloatyLetterState> {
    content: HTMLDivElement | null = null
    constructor(props: FloatyLetterProps) {
        super(props)

        this.state = {
            style: {
                width: 0,
                height: 0
            },
            isSpace: props.letter === ' ',
            contentHeight: undefined,
            xStartDirection: randDirection(),
            yStartDirection: randDirection()
        }
    }

    xDurationMem = memoize(
        (maxDuration, minDuration) => randDuration(maxDuration, minDuration)
    )

    yDurationMem = memoize(
        (maxDuration, minDuration) => randDuration(maxDuration, minDuration)
    )

    /**
     * Measure the letter size to get a size of the animation container.
     */
    componentDidMount() {
        let contentHeight = this.content && measureElement(this.content)?.height
        if (contentHeight) {
            this.setState({
                style: {
                    width: contentHeight,
                    height: contentHeight
                }
            })
        }
    }

    render() {
        const xDuration = this.xDurationMem(this.props.maxDuration, this.props.minDuration)
        const yDuration = this.yDurationMem(this.props.maxDuration, this.props.minDuration)

        const yStartDirection = StartDirection(yDuration, this.state.xStartDirection)
        const xStartDirection = StartDirection(xDuration, this.state.yStartDirection)

        const letter = this.state.isSpace ? '_' : this.props.letter

        return (
            <div className='floaty-box fade-in' style={this.state.style}>
                <div className='floaty-ani-x'
                    style={{
                        animationDuration: `${xDuration}ms`,
                        animationDelay: `-${xStartDirection}ms`
                    }}>
                    <div className='floaty-ani-y'
                        style={{
                            animationDuration: `${yDuration}ms`,
                            animationDelay: `-${yStartDirection}ms`
                        }}>
                        <div ref={r => this.content = r}
                            className='floaty-letter'
                            style={this.state.isSpace ? { visibility: "hidden" } : {}}>{letter}</div>
                    </div>
                </div>
            </div>
        )
    }
}

/**
* Randomly picks a duration of an animation cycle within the limits.
* @param {number} maxDuration - The max cycle duration.
* @param {number} minDuration - The min cycle duration
* @returns {number} the duration.
*/
const randDuration = (maxDuration: number, minDuration: number) => {
    const flexDuration = maxDuration * 1000 - minDuration * 1000;
    return Math.round(Math.random() * flexDuration + minDuration * 1000);
}

/**
* Takes the animation cycle duration and makes sure the letter appears in the middle of the animation.
* @param {number} loopDuration - The duration which one cyckle takes of the animation.
*/
const randDirection = () => {
    return Math.random() > 0.5 ? true : false;
}

/**
* Takes the animation cycle duration and makes sure the letter appears in the middle of the animation.
* @param {number} loopDuration - The duration which one cyckle takes of the animation.
*/
const StartDirection = (loopDuration: number, direction: boolean) => {
    return direction ? loopDuration / 2 : (loopDuration / 2) * 3;
}

/**
 * A function that measures the dom element. (Could be moved to a utils file?)
 * @param element the dom element that should be measured.
 */
const measureElement = (element: HTMLElement) => {
    const DOMNode = ReactDOM.findDOMNode(element) as HTMLElement;
    return DOMNode ? {
        width: DOMNode.offsetWidth,
        height: DOMNode.offsetHeight,
    } : null;
}

type FloatyLetterProps = {
    maxDuration: number,
    minDuration: number,
    letter: string
}

type FloatyLetterState = {
    style: {
        width: number,
        height: number
    },
    isSpace: boolean,
    xStartDirection: boolean,
    yStartDirection: boolean,
    contentHeight: number | undefined
}