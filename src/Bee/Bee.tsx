import React from 'react'
import './Bee.css'

export default function Bee() {
    return (
        <div>
            <svg width="100" height="104" viewBox="0 0 100 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 68.5L9 67.201V69.799L0 68.5Z" fill="black" />
                <path className="bee-wing backbeat" name="wing-back-down" d="M84.5723 58.984C88.2153 56.3335 92.7154 48.6221 76.0006 32L68.5004 35.0222L55 37.1809L58.643 49.2697C58.643 49.2697 60.143 57.6887 65.7146 61.3586C71.2862 65.0284 80.7151 61.7903 84.5723 58.984Z" fill="#FDFCFC" stroke="#272727" stroke-width="2" />
                <path className="bee-wing" name="wing-back-up" d="M84.5723 12.016C88.2153 14.6665 92.7154 22.3779 76.0006 39L68.5004 35.9778L55 33.8191L58.643 21.7303C58.643 21.7303 60.143 13.3113 65.7146 9.64144C71.2862 5.97161 80.7151 9.20968 84.5723 12.016Z" fill="#FDFCFC" stroke="#272727" stroke-width="2" />
                <path d="M99.5 68.5C99.5 87.7215 79.4754 103.5 54.5 103.5C29.5246 103.5 9.5 87.7215 9.5 68.5C9.5 49.2785 29.5246 33.5 54.5 33.5C79.4754 33.5 99.5 49.2785 99.5 68.5Z" fill="#FFF493" stroke="black" />
                <path d="M68.7846 70.2948C84.1134 91.5102 91.2236 77.6232 93.9204 68.233L68.7846 70.2948Z" fill="white" stroke="black" stroke-linecap="round" />
                <circle cx="72" cy="57" r="2" fill="black" />
                <circle cx="87" cy="56" r="2" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7698 97.6053C25.4389 86.0354 22.7299 60.7557 34.34 37.1789C37.5938 35.9459 40.6051 35.1539 42.9172 34.7117C42.9815 35.3995 42.8433 36.1132 42.477 36.7598C29.2079 60.1795 32.5699 86.7347 35.8679 96.8841C36.2848 98.1672 35.9207 99.5167 35.0376 100.418C33.5213 99.9184 31.2626 99.0117 28.7698 97.6053Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.1666 33.2537C38.7135 60.3599 42.0714 90.1653 46.3837 102.692C50.2601 103.197 53.5782 103.252 55.1022 103.205C55.4138 102.274 55.4245 101.235 55.063 100.241C51.3479 90.0248 47.8503 62.6977 64.7901 38.0497C65.5762 36.9059 65.7614 35.5272 65.415 34.2875C64.2028 34.0665 61.0589 33.5863 57.1666 33.2537Z" fill="black" />
                <path className="bee-wing backbeat" name="wing-front-down" d="M51.073 66.3118C65.6652 63.7367 70.8155 31.977 68.8841 32.6208C66.9528 33.2646 58.3691 34.3375 51.2876 33.9083C44.4099 33.4915 35.8369 31.977 33.4764 30.6894C31.1159 29.4019 26.1803 44.8457 26.1803 53.4362C26.1803 64.1658 36.4807 68.8869 51.073 66.3118Z" fill="#FDFDFD" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path className="bee-wing backbeat" name="wing-front-down-line" d="M46 53C49.5606 47.236 50.2424 41.8696 51 37" stroke="#737373" stroke-width="3" stroke-linecap="round" />
                <path className="bee-wing" name="wing-front-up" d="M51.073 1.68889C65.6652 4.26401 70.9313 35.6438 69 35C67.0687 34.3562 58.3691 33.6631 51.2876 34.0923C44.4099 34.5092 35.3605 35.7124 33 37C30.6395 38.2876 26.1803 23.155 26.1803 14.5644C26.1803 3.83482 36.4807 -0.886217 51.073 1.68889Z" fill="#FDFDFD" stroke="black" stroke-width="2" stroke-linecap="round" />
                <path className="bee-wing" name="wing-front-down" d="M46 15C48.8485 20.4037 49.3939 25.4348 50 30" stroke="#737373" stroke-width="3" stroke-linecap="round" />
            </svg>
        </div>
    )
}