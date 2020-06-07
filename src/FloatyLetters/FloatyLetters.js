import React from 'react';
import './FloatyLetters.css'

function FloatyLetters(props) {
    return (
        <div className='floaty-box'>
            <div className='floaty-ani-x' style={{ animationDuration: '2s' }}>
                <div className='floaty-ani-y' style={{ animationDuration: '2s' }}>
                    <div className='floaty-letter'>H</div>
                </div>
            </div>
        </div>
    );
}

export default FloatyLetters;