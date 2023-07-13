import React, { useContext, useState } from 'react'
import './SignInPage1.css'
import { ReactComponent as Google } from '../../assets/google.svg'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/Navbar'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


function SignUpPage1() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("https://real-estate-backend-wihx.onrender.com/api/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="signup-page-main-container">
                <h2>Sign In</h2>
                <div className="SignUpPage1-container">
                    <div className="name-input">
                        <p>Enter Username</p>
                        <input type="text" id='username' onChange={handleChange} />
                    </div>
                    <div className="email-input">
                        <p>Enter Password</p>
                        <input type="password" id='password' onChange={handleChange} />
                    </div>
                    <div className="google-sign-in-option">
                        Sign In using
                        <Google />
                    </div>
                </div>

                <div className='sign_btn'>
                    <div className='signin_btn'>
                        <button disabled={loading} onClick={handleClick} className='btm__nav-btn'>Sign In</button>
                        {error && <span>{error.message}</span>}
                        <div className='signupifnew'>
                            <Link to={"/register"} style={{ color: "black" }}>
                                <p>Create your Account</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUpPage1