import React from 'react'
import './FloatyLetters.css'
import useDimensions from 'react-use-dimensions'


function FloatyLetters(props) {
    const [ref, letterSize] = useDimensions();
    console.log("width", letterSize.width);

    const letterStyle = {
        width: letterSize.width,
        height: letterSize.width
    }

    return (
        <div className='floaty-box' style={letterStyle}>
            <div className='floaty-ani-x' style={{ animationDuration: '2s' }}>
                <div className='floaty-ani-y' style={{ animationDuration: '2s' }}>
                    <div ref={ref} className='floaty-letter'>H</div>
                </div>
            </div>
        </div>
    );
}

export default FloatyLetters;