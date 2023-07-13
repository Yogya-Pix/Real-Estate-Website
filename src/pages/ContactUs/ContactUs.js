import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer'

function ContactUs() {
    return (
        <div>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="about-us-container">
                <h2>Contact Us</h2>
                <p style={{ margin: "10px", fontSize: "18px" }}>We are a platform specifically made in order for our customer to enjoy the properties across the globe first-hand in VR, AR and Matterport. In case if you face any inconvenience feel free to contact us </p>
                <p style={{ margin: "10px", fontSize: "18px" }}>Email: support@stepintohome.com</p>
                <p style={{ margin: "10px", marginBottom: "50px", fontSize: "18px" }}>Phone number - 011 - 42546728</p>
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

export default ContactUs
