import React from 'react'
import '../styles/NavbarStyle.css'
import { Link } from 'react-router-dom'
import lightlogo from '../../src/assets/Logo_Light.png'
import darklogo from '../../src/assets/Logo_Dark.png'

export default function Navbar(props) {
    return (
        <div>
            <div className='nav_container'>
                <div className='navbar'>
                    <div className='left'>
                        <Link to={'/'} className='homepagelink'>
                            {
                                props.mode === 'white' ? <img src={lightlogo} alt="" style={{ height: "70px", width: "70px" }} /> : <img src={darklogo} alt="" style={{ height: "70px", width: "70px" }} />
                            }
                            {/* <p style={{ color: props.mode }}>Step Into Home</p> */}
                        </Link>
                    </div>
                    <div className='right'>
                        <p style={{ color: props.mode }}>Contact Us</p>
                        <Link to={"/about"}>
                            <p style={{ color: props.mode }}>About Us</p>
                        </Link>
                        <Link to={'/property'}>
                            <button className='btn-search' style={{ backgroundColor: props.mode, color: props.mode === 'white' ? 'black' : 'white' }}>Search Properties</button>
                        </Link>
                        <Link to={'/profile'}>
                            <div className='two_lines'>
                                <svg width="28" height="4" className='upperlinesvg' viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="4" rx="2" fill={props.mode} />
                                </svg>
                                <svg width="28" height="4" viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="4" rx="2" fill={props.mode} />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


