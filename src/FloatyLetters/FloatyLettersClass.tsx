import React, { Component } from 'react'
import FloatyLetter from './FloatyLetter/FloatyLetter'
import './FloatyLetters.css'

export default class FloatyLettersClass extends Component<FloatyLettersProps, FloatyLettersState> {
    constructor(props: FloatyLettersProps) {
        super(props)

        const phraseList = props.phrase.split("");
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
        this.state = {
            letters: letters
        }
    }

    render() {
        return (
            <div>
                <FloatyLetter letter="A" maxDuration={15} minDuration={5} />
                <div className="floaty-letters">
                    {this.state.letters}
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