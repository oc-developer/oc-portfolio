import React, { Component } from 'react'
import FloatyLetter from './FloatyLetter/FloatyLetter'
import './FloatyLetters.css'

export default class FloatyLetters extends Component<FloatyLettersProps, FloatyLettersState> {
    createPhrase = () => {
        const phraseList = this.props.phrase.split("");
        return phraseList.map((l, i) => {
            return (
                <FloatyLetter
                    letter={l}
                    key={i}
                    maxDuration={this.props.maxDuration}
                    minDuration={this.props.minDuration}
                />
            )
        })
    }

    render() {
        return (
            <div>
                <div className="floaty-letters">
                    {this.createPhrase()}
                </div>
            </div>
        )
    }
}

type FloatyLettersState = {
    letters: JSX.Element[]
}

type FloatyLettersProps = {
    phrase: string,
    maxDuration: number,
    minDuration: number
}