import React, { useState } from 'react'
import './RegisterStyle.css'
import { ReactComponent as Google } from '../../assets/google.svg'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Register() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        country: undefined,
        city: undefined,
        phone: undefined,
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
    };

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/register", credentials);
        navigate("/signin")
    };

    return (
        <>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="signup-page-main-container">
                <h2>Register</h2>
                <div className="register-container">
                    <div className="name-input">
                        <p>Enter Username</p>
                        <input type="text" id='username' onChange={handleChange} />
                    </div>
                    <div className="email-input">
                        <p>Enter Email</p>
                        <input type="email" id='email' onChange={handleChange} />
                    </div>
                    <div className="name-input">
                        <p>Enter Password</p>
                        <input type="password" id='password' onChange={handleChange} />
                    </div>
                    <div className="name-input">
                        <p>Country</p>
                        <input type="type" id='country' onChange={handleChange} />
                    </div>
                    <div className="name-input">
                        <p>City</p>
                        <input type="type" id='city' onChange={handleChange} />
                    </div>
                    <div className="name-input">
                        <p>Phone</p>
                        <input type="type" id='phone' onChange={handleChange} />
                    </div>
                </div>

                <div className='sign_btn'>
                    <div className='signin_btn' style={{marginBottom: "0"}}>
                        <button onClick={handleClick} className='btm__nav-btn'>Register</button>
                    </div>
                </div>

                <div className='google-container'>
                    <div className="google-sign-in-option">
                        Register using
                        <Google />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
