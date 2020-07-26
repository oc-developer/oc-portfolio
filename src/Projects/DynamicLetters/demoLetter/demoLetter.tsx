import React from 'react'
import './DemoLetter.css'

export default function DemoLetter(props: demoLetterProps) {

    const xColor = props.xColor ? 'chocolate' : ''

    return (
        <div className="floaty-demo">
            <div className="demo-box x-box" style={{ backgroundColor: xColor }} ></div>
        </div>
    )
}

type demoLetterProps = {
    xColor?: boolean
}