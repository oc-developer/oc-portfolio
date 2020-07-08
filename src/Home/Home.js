import React from 'react'
import FloatyLetters from '../FloatyLetters/FloatyLetters'
import './Home.css'

function Home() {
    return (
        <div className="welcome-banner">
            <FloatyLetters word="Welcome!" maxDuration={15} minDuration={5} />
        </div>
    )
}

export default Home