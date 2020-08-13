import React from 'react'

import './MiniLogo.scss'

type MiniLogoProps = {
    color: string
}

export default function MiniLogo(props: MiniLogoProps) {
    return (
        <svg className="mini-logo" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="logo-code" fillRule="evenodd" clipRule="evenodd" d="M17 39V43C17 49.0751 21.9249 54 28 54H36C42.0751 54 47 49.0751 47 43V39H52V43C52 51.8366 44.8366 59 36 59H28C19.1634 59 12 51.8366 12 43V39H17Z" fill={props.color} />
            <line className="logo-line" x1="17" y1="38.5" x2="47" y2="38.5" stroke={props.color} strokeWidth="5" />
            <path className="logo-c" fillRule="evenodd" clipRule="evenodd" d="M28 24H36C42.0751 24 47 28.9249 47 35V39H52V35C52 26.1634 44.8366 19 36 19H28C19.1634 19 12 26.1634 12 35V39H17V35C17 28.9249 21.9249 24 28 24Z" fill={props.color} />
            <rect className="logo-o" x="14.5" y="6.5" width="35" height="15" rx="7.5" stroke={props.color} strokeWidth="5" />
            <path className="eye" fillRule="evenodd" clipRule="evenodd" d="M25 18C27.2091 18 29 16.2091 29 14C29 11.7909 27.2091 10 25 10C22.7909 10 21 11.7909 21 14C21 16.2091 22.7909 18 25 18ZM26.5 13C26.7761 13 27 12.7761 27 12.5C27 12.2239 26.7761 12 26.5 12C26.2239 12 26 12.2239 26 12.5C26 12.7761 26.2239 13 26.5 13Z" fill={props.color} />
            <path className="eye" fillRule="evenodd" clipRule="evenodd" d="M39 18C41.2091 18 43 16.2091 43 14C43 11.7909 41.2091 10 39 10C36.7909 10 35 11.7909 35 14C35 16.2091 36.7909 18 39 18ZM40.5 13C40.7761 13 41 12.7761 41 12.5C41 12.2239 40.7761 12 40.5 12C40.2239 12 40 12.2239 40 12.5C40 12.7761 40.2239 13 40.5 13Z" fill={props.color} />
        </svg>
    )
}