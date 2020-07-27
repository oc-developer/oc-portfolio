import React from 'react'
import './Logo.css'

export default function Logo() {
    return (
        <div className="protagonist-tab fade-in">
            <svg className="tab logo-robot" width="1399" height="1000" viewBox="0 0 1399 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="logo-letter logo-d" fillRule="evenodd" clipRule="evenodd" d="M1079 950H949V50H1079C1228.12 50 1349 170.883 1349 320V680C1349 829.117 1228.12 950 1079 950ZM949 0H1079C1255.73 0 1399 143.269 1399 320V680C1399 856.731 1255.73 1000 1079 1000H949H899V950L899 50V0H949Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M500 680L500 320C500 170.883 620.883 50 770 50H900V0H770C593.269 0 450 143.269 450 320L450 680C450 856.731 593.269 1000 770 1000H900V950H770C620.883 950 500 829.117 500 680Z" fill="black" />
                <rect className="logo-letter logo-o" x="25" y="25" width="450" height="950" rx="225" stroke="black" strokeWidth="50" />
                <path className="robot-eyes left-eye" fillRule="evenodd" clipRule="evenodd" d="M250 810C277.614 810 300 787.614 300 760C300 732.386 277.614 710 250 710C222.386 710 200 732.386 200 760C200 787.614 222.386 810 250 810ZM240 760C245.523 760 250 755.523 250 750C250 744.477 245.523 740 240 740C234.477 740 230 744.477 230 750C230 755.523 234.477 760 240 760Z" fill="black" />
                <path className="robot-eyes right-eye" fillRule="evenodd" clipRule="evenodd" d="M240 300C267.614 300 290 277.614 290 250C290 222.386 267.614 200 240 200C212.386 200 190 222.386 190 250C190 277.614 212.386 300 240 300ZM230 250C235.523 250 240 245.523 240 240C240 234.477 235.523 230 230 230C224.477 230 220 234.477 220 240C220 245.523 224.477 250 230 250Z" fill="black" />
            </svg>
        </div>



    )
}