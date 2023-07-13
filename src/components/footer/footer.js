import React from 'react'
import './footer.css'
import fb from '../../assets/fb.png'
import twitter from '../../assets/twitter.png'
import insta from '../../assets/insta.png'
import yt from '../../assets/youtube.png'
import arrow from '../../assets/arrow.png'
import star from '../../assets/star.png'

function Footer() {

    const top = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className='footer'>
                <div className='sb__footer section__padding'>
                    <div className='sb__footer-links'>
                        <div className='sb__footer-links-left-div'>
                            <h4>Thank You for Visiting Our Site</h4>
                            <div className='sb__footer-link-left-div-flex-para'>
                                <div className='sb__footer-link-left-div-para'>
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p>All trademarks are the property of their respective owners.</p>
                            </div>
                        </div>
                        <div className='sb__footer-links-left-div vertline'></div>
                        <div className='sb__footer-links-div'>
                            <h4>Connect With Us</h4>
                            <div className='socialmedia'>
                                <p><img src={twitter} alt="" /></p>
                                <p><img src={fb} alt="" /></p>
                                <p><img src={insta} alt="" /></p>
                                <p><img src={yt} alt="" /></p>
                            </div>
                            <a href='/terms'><div><p>SignUp/LogIn</p></div></a>
                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>Company</h4>
                            <a href='/terms'><p>Terms & Condition</p></a>
                            <p>Email support@stepintohome.com</p>
                            <p>Toll Free :    011 - 42546728
                            </p>
                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>Back to top</h4>
                            <img className='toparrow' src={arrow} alt="" onClick={top} />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
