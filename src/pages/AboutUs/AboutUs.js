import React from 'react'
import './AboutUs.css'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <div>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="about-us-container">
                <h2>Who We Are</h2>
                <p>We are a platform specifically made in order for our customer to enjoy the properties across the globe first-hand in VR, AR and Matterport. And be able to purchase them after deep conversations with the owner.</p>

                <div className='btm__nav'>
                    <Link to={'/'}>
                    <div className='btm__nav-btn'>
                        Go Back
                    </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default AboutUs
