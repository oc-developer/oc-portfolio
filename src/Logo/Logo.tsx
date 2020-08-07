import React from 'react'
import './Logo.scss'

export default function Logo() {
    return (
        <div className="protagonist-tab">
            <svg className="tab logo" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="logo-letter logo-d" fillRule="evenodd" clipRule="evenodd" d="M272 584V696C272 793.202 350.798 872 448 872H576C673.202 872 752 793.202 752 696V584H832V696C832 837.385 717.385 952 576 952H448C306.615 952 192 837.385 192 696V584H272Z" fill="black" />
                <line className="logo-line" x1="272" y1="624" x2="752" y2="624" stroke="black" strokeWidth="80" />
                <path className="logo-letter logo-c" fillRule="evenodd" clipRule="evenodd" d="M448 392H576C673.202 392 752 470.798 752 568V664H832V568C832 426.615 717.385 312 576 312H448C306.615 312 192 426.615 192 568V664H272V568C272 470.798 350.798 392 448 392Z" fill="black" />
                <rect className="logo-letter logo-o" x="232" y="112" width="560" height="240" rx="120" stroke="black" strokeWidth="80" />
                <path className="robot-eyes" fillRule="evenodd" clipRule="evenodd" d="M400 296C435.346 296 464 267.346 464 232C464 196.654 435.346 168 400 168C364.654 168 336 196.654 336 232C336 267.346 364.654 296 400 296ZM424 216C428.418 216 432 212.418 432 208C432 203.582 428.418 200 424 200C419.582 200 416 203.582 416 208C416 212.418 419.582 216 424 216Z" fill="black" />
                <path className="robot-eyes" fillRule="evenodd" clipRule="evenodd" d="M624 296C659.346 296 688 267.346 688 232C688 196.654 659.346 168 624 168C588.654 168 560 196.654 560 232C560 267.346 588.654 296 624 296ZM648 216C652.418 216 656 212.418 656 208C656 203.582 652.418 200 648 200C643.582 200 640 203.582 640 208C640 212.418 643.582 216 648 216Z" fill="black" />
            </svg>
        </div>
    )
}