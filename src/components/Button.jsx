import React from 'react'

export default function Button({ name, isBeam = false, containerClass }) {

    return (
        <center>
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className='relative flex h-3 w-3'>
                    <span className='ping-anim'></span>
                    <span className='green-dot'></span>
                </span>
            )}
            {name}
        </button>
        </center>

    )
}
