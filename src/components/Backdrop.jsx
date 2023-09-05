import React from 'react'

export default function Backdrop(props) {
    return (
        <div id='backdrop' className='animated2 fadeInBg'>
            <div className="backdrop-content animated fadeInDown">
                {/* Accepts JSX content */}
                {props.children}
            </div>
        </div>
    )
}
