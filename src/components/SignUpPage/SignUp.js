import React from 'react'
import user from '../../assets/user.png'
import google from '../../assets/google.png'
import fb from '../../assets/fb2.png'
import ig from '../../assets/insta2.png'
import './SignUp.css'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <div className="super-parent-signup-page">
                <div className="parent-signup-page">
                    <div className="signup-page-div">
                        <div className="userbtn">
                            <img src={user} alt="" />
                        </div>
                        <Link to={'/signin'} className='login-signup-btn' style={{ color: "black" }}>
                            <div>
                                <p>Login / SignUp with E-mail</p>
                            </div>
                        </Link>
                    </div>
                    <div className="signup-page-div">
                        <div className="signup-google-btn">
                            <p>Log in using</p>
                            <img src={fb} alt="" />
                            <img src={google} alt="" />
                            <img src={ig} alt="" />
                        </div>
                    </div>
                    <div className="signup-page-div">
                        <div className="ar-vr-compatibility">
                            <p>Check VR / AR Compatibility</p>
                        </div>
                        <div className="country-language">
                            <p>india</p>
                        </div>
                    </div>
                    <div className="remiander">
                        <h4>Uh oh.. Looks like you have not Signed In !</h4>
                        <p>Sign In to view your saved properties</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
