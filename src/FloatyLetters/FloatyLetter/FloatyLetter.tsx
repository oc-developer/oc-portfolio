import React, { Component } from 'react'
import './FloatyLetter.css'
import ReactDOM from 'react-dom'

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
    yDuration: number,
    contentHeight: number | undefined
}

const measureElement = (element: HTMLElement) => {
    const DOMNode = ReactDOM.findDOMNode(element) as HTMLElement;
    return DOMNode ? {
        width: DOMNode.offsetWidth,
        height: DOMNode.offsetHeight,
    } : null;
}

export default class FloatyLetter extends Component<FloatyLetterProps, FloatyLetterState> {
    content: HTMLDivElement | null
    constructor(props: FloatyLetterProps) {
        super(props)

        const letterStyle = {
            width: 0,
            height: 0
        }

        this.content = null

        const xDuration = this.randDuration(props.maxDuration, props.minDuration)
        const xStartDirection = this.randDirection(xDuration)

        const yDuration = this.randDuration(props.maxDuration, props.minDuration);
        const yStartDirection = this.randDirection(yDuration);

        this.state = {
            style: letterStyle,
            xStartDirection: xStartDirection,
            xDuration: xDuration,
            yStartDirection: yStartDirection,
            yDuration: yDuration,
            contentHeight: undefined
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
        return (
            <div className='floaty-box fade-in' style={this.state.style}>
                <div className='floaty-ani-x' style={{ animationDuration: `${this.state.xDuration}ms`, animationDelay: `-${this.state.xStartDirection}ms` }}>
                    <div className='floaty-ani-y' style={{ animationDuration: `${this.state.yDuration}ms`, animationDelay: `-${this.state.yStartDirection}ms` }}>
                        <div ref={r => this.content = r} className='floaty-letter'>{this.props.letter}</div>
                    </div>
                </div>
            </div>
        )
    }
}