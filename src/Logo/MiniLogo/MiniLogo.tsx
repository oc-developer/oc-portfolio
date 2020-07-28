import React from 'react'
import { Link } from 'react-router-dom'

import './MiniLogo.scss'

export default function MiniLogo() {
    return (
        <Link to="/">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14.5" y="5.5" width="35" height="15" rx="7.5" stroke="black" strokeWidth="5" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22 25H42C44.7614 25 47 27.2386 47 30V40H52V30C52 24.4772 47.5228 20 42 20H22C16.4772 20 12 24.4771 12 30V40H17V30C17 27.2386 19.2386 25 22 25Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 40V50C17 52.7614 19.2386 55 22 55H42C44.7614 55 47 52.7614 47 50V40H52V50C52 55.5228 47.5228 60 42 60H22C16.4772 60 12 55.5228 12 50V40H17Z" fill="black" />
                <line x1="15" y1="39.5" x2="49" y2="39.5" stroke="black" strokeWidth="5" />
                <circle cx="25" cy="13" r="4" fill="black" />
                <circle cx="39" cy="13" r="4" fill="black" />
                <circle cx="26.5" cy="11.5" r="0.5" fill="white" />
                <circle cx="40.5" cy="11.5" r="0.5" fill="white" />
            </svg>
        </Link>
    )
}