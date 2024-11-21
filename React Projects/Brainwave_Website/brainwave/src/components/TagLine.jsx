import React from 'react'
import brackets from '../assets/svg/Brackets'

export default function TagLine({ className, children }) {
    return (
        <div className={`tagline flex items-center ${className || ''}`}>
            {brackets('left')}
            <div className='mx-4 text-n-2'>{children}</div>
            {brackets('right')}
        </div>
    )
}