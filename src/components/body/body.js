import React from 'react'
import './body.css';
import Footer from '../footer/footer';
import BottomNav from '../bottom_navbar/bottomNav';
import FlexboxSlider from '../flexboxSlider/flexboxSlider';
import mglass1 from '../../assets/mglass1.png'
import VRbox1 from '../../assets/VRbox1.png'
import userlike from '../../assets/userlike.png'
import PropertyBtn from '../propertyTypeButton/PropertyBtn';
import motion1 from '../../assets/Group 51.png'
import motion2 from '../../assets/Group 52.png'
import mag_glass from '../../assets/Group 53.png'
// import likeicon from '../../assets/Group 55.png'
import usericon from '../../assets/Group 54.png'
import photos from '../../assets/Group 56.png'
import { ReactComponent as Likeicon } from '../../assets/Group 55.svg'


// import { ReactComponent as Motion1 } from '../../assets/motion_img1.svg'
// import { ReactComponent as Motion2 } from '../../assets/motion_img2.svg'


// import FilterBox from '../filterBox/FilterBox';

function Body() {
    return (
        <>

            <div className='features_parent-div'>
                <div className='features-div'>
                    <div className='features-child-div'>
                        <h1>01</h1>
                        <div className="features-details">
                            <h4>Find What You are Looking for</h4>
                            <p>Discover properties like never before with our revolutionary 3D 360 Technology. We offer an immersive experience that allows you to explore every detail of a property from anywhere in the world. Step into a property and feel as though you are physically present, walking through each room and examining every aspect. </p>
                            <a href="/property">
                                <div className="features-details-search-btn"><p>Search properties</p></div>
                            </a>
                        </div>
                        <div className="features-image">

                            <img id='prior2' src={motion2} alt="" />
                            <img id='prior3' src={motion1} alt="" />
                            <img id='prior1' src={mag_glass} alt="" />
                        </div>
                    </div>
                </div>
                <div className='features-div'>
                    <div className="features-child-div">
                        <h1>02</h1>

                        <div className="features-image">
                            <img src={VRbox1} alt="" />
                        </div>
                        <div className="features-details">
                            <h4>The VR Experience of Buying!</h4>
                            <p>Enter a new era of property buying. Experience augmented reality, virtual reality, and Matterport tours to explore properties like never before, regardless of your location. Engage with international real estate through immersive virtual tours.</p>
                            <a href="/VR">
                                <div className="features-details-AR-btn"><p>Explore in VR</p></div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className='features-div'>
                    <div className="features-child-div">
                        <h1>03</h1>
                        <div className="features-details">
                            <h4>Browsing Convenience</h4>
                            <p>Save properties for future browsing convenience. Join us now and gain the ability to bookmark your favorite properties!</p>

                            <div className="features-details-input-signup">
                                <input type="text" placeholder='Enter Your E-mail ID Here' />
                                <a href="/signup"><div className='features-details-input-signup-btn'>Sign Up</div></a>
                            </div>

                        </div>
                        <div className="features-image">
                            <Likeicon />
                            <img id='p2' src={usericon} alt="" />
                            <img id='p3' src={photos} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <FlexboxSlider />
            <div className='horizontal-break'>
                <div className='horizontal-break-div'></div>
            </div>
            <BottomNav />
            <Footer />
        </>
    )
}

export default Body
