import React from 'react'
import FloatyLetters from '../FloatyLetters/FloatyLetters'
import './About.css'

function Home() {
    return (
        <div className="home">
            <div className="welcome-banner">
                <FloatyLetters word="Hi" maxDuration={15} minDuration={5} />
                <FloatyLetters word="there..." maxDuration={15} minDuration={5} />
            </div>
            <div className="about">
                I’m a social software engineer with special love for web-based application development.
                I enjoy being at the heart of the action, my passion is to bring people together and have fun.
                I’ve studied software engineering and Interaction design and I’m fascinated by the synergy that occurs between good tooling and people.
                My passion is in user experience and front-end development and hope to continue to explore the amazing world of web-based technology and develop as a good team-player.<br />
                <br />
                In my spare time I enjoy the outdoors, either the wonderful climbing walls around Gothenburg and Bohuslän or being out on the water when the wind kicks in kitesurfing.
                I also enjoy music and singing together with friends.
            </div>
        </div>
    )
}

export default Home