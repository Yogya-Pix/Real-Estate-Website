import React, { useContext } from 'react'
import './ProfilePage.css'
import lang from '../../assets/lang.png'
import downArrow from '../../assets/downArrow.png'
import close from '../../assets/close.png'
import google from '../../assets/google.png'
import fb from '../../assets/fb2.png'
import ig from '../../assets/insta2.png'
import '../SignUpPage/SignUp.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function ProfilePage() {
    const { user } = useContext(AuthContext);

    const handlesignout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <>
            {user ?
                (<div>
                    <Link to={'/'}>
                        <div className="profile-container-close-btn">
                            <img src={close} alt="" />
                        </div>
                    </Link>
                    <div className="super-parent-profile-container">
                        <div className="parent-profile-container">
                            <div className="profile-row">
                                <div className="profile-pic profile-row-items">
                                    <img src="https://i.ibb.co/MBtjqXQ/no-avatar.gif" style={{ width: "60px" }} alt="avatar" />
                                </div>
                                <div className="profile-name profile-row-items">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-purchase-history profile-row-items">
                                    <p>Purchase History</p>
                                </div>
                                <div className="profile-signout-btn profile-row-items" onClick={handlesignout}>
                                    <p>Sign Out</p>
                                </div>
                            </div>
                            <div className="profile-row">
                                <div className="profile-setting profile-row-items">
                                    <p>Settings</p>
                                </div>
                                <div className="profile-country-lang profile-row-items">
                                    <img src={downArrow} alt="" />
                                    <img id='lang' src={lang} alt="" />
                                    <img src={downArrow} alt="" />
                                    <img id='lang' src={lang} alt="india" />
                                </div>
                            </div>
                            <div className="profile-row profile-row-d profile-row-items">
                                <p>Check VR / AR Compatibility</p>
                            </div>
                        </div>
                    </div>
                </div>)
                :
                (<div>
                    <Link to={'/'}>
                        <div className="profile-container-close-btn">
                            <img src={close} alt="" />
                        </div>
                    </Link>
                    <div className="super-parent-signup-page">
                        <div className="parent-signup-page">
                            <div className="signup-page-div">
                                <div className="userbtn">
                                    <img src="https://i.ibb.co/MBtjqXQ/no-avatar.gif" style={{ width: "60px" }} alt="avatar" />
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
                </div>)
            }
        </>
    )
}

export default ProfilePage
