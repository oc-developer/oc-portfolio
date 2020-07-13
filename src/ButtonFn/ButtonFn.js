import React, { useState } from 'react'
import './ButtonFn.css'

// Goal is to generate the random inital value ones. Might only be possible with classes?
export default function ButtonFn(props) {
    let [noClicks, newClick] = useState(0)
    let randVal = Math.random()*100
    return (
        <div>
            <div>Random Value: {randVal}</div>
            <div>Number of Clicks Value: {noClicks}</div>
            <div className="button-fn" onClick={e => newClick(noClicks+1)}>Button function</div>
        </div>
    )
}