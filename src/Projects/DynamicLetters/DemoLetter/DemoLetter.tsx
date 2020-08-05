import React from 'react'
import './DemoLetter.scss'

export default function DemoLetter(props: demoLetterProps) {
    const xBoxStyle: React.CSSProperties = {
        backgroundColor: props.showX ? "chocolate" : "transparent",
        animationDuration: props.xDuration ? props.xDuration + 's' : ''
    }
    const yBoxStyle: React.CSSProperties = {
        backgroundColor: props.showY ? "hotpink" : "transparent",
        animationDuration: props.yDuration ? props.yDuration + 's' : ''
    }

    const letterBoxStyle: React.CSSProperties = {
        backgroundColor: props.letterBg ? "lawngreen" : "transparent",
    }

    return (
        <div className="floaty-demo">
            <div className="demo-box x-box" style={xBoxStyle}>
                <div className="demo-box y-box" style={yBoxStyle}>
                    <div className="demo-box letter-box" style={letterBoxStyle}>{props.letter}</div>
                </div>
            </div>
        </div>
    )
}

type demoLetterProps = {
    showX?: boolean
    xDuration?: number
    showY?: boolean
    yDuration?: number
    letter?: string
    letterBg?: boolean
}