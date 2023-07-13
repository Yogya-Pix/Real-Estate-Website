import React from 'react'
import './FeaturesDiv.css'
import mglass1 from '../../assets/mglass1.png'
import VRbox1 from '../../assets/VRbox1.png'
import userlike from '../../assets/userlike.png'

function FeaturesDiv() {
  return (
    <>
      <div className='features_parent-div'>
                <div className='features-div'>
                    <div className='features-child-div'>
                        <h1>01</h1>
                        <div className="features-details">
                            <h4>Find What You are Looking for</h4>
                            <p>Discover your dream home or ideal commercial space worldwide. Our user-friendly search feature lets you effortlessly browse properties by city and type. Simply select your desired location and property category, and find your next real estate gem with ease.</p>
                            <a href="/property">
                                <div className="features-details-search-btn"><p>Search properties</p></div>
                            </a>
                        </div>
                        <div className="features-image">
                            <img src={mglass1} alt="" />
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
                            <img src={userlike} alt="" />
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default FeaturesDiv
