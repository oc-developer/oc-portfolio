import React from 'react'
import './ButtonClass.css'

export default class ButtonClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            randVal: Math.random() * 100,
            noClicks: 0
        }
    }

    render() {
        return (
            <div>
                <div>Random Value: {this.state.randVal}</div>
                <div>Number of Clicks Value: {this.state.noClicks}</div>
                <div className="button-class" onClick={e => this.setState({noClicks: this.state.noClicks + 1})}>Button Class</div>
            </div>
        )
    }
}