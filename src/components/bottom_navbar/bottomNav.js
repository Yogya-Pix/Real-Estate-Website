import React from 'react'
import './bottomNav.css'
import { Link } from 'react-router-dom'

function BottomNav() {

    const top = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className='btm__nav'>
            <Link to={'/property'} onClick={top}>
                <div className='btm__nav-btn'>Search Properties</div>
            </Link>
            <Link to={'/property'} onClick={top}>
                <div className='btm__nav-btn'>Explore in VR</div>
            </Link>
            <Link to={'/about'} onClick={top}>
                <div className='btm__nav-btn'>Who We Are</div>
            </Link>
            <Link to={'/property'} onClick={top}>
                <div className='btm__nav-btn'>List your Property</div>
            </Link>
        </div>
    )
}

export default BottomNav
