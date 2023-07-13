import React from 'react'
import './SummaryStyle.css'

export default function Summary(props) {

    function openpopup() {
        const toggle = document.getElementById('mypopupcontainer')
        const contactpage1 = document.getElementById("owner-contact-page")
        toggle.classList.add('show-pop-up')
        toggle.classList.remove('dont-show-pop-up')
        contactpage1.classList.remove("show-contact-page")
        contactpage1.classList.add("dont-show-contact-page")
    }

    function closepopup() {
        const toggle = document.getElementById('mypopupcontainer')
        toggle.classList.add('dont-show-pop-up')
        toggle.classList.remove('show-pop-up')
    }

    return (
        <div>
            <div className="aboutproperty">
                <div className='aboutpropertydetial'>
                    <p className='aboutpropertyname'>About the Property</p>
                    <div className='summary'>
                        <p className='s_title'>summary</p>
                        <p className='s_desc'>{props.data.summary}</p>
                    </div>
                    <p className='btn-showmore' onClick={openpopup}>Show More...</p>
                </div>
            </div>
            <div className='pop-up-property-container dont-show-pop-up' id='mypopupcontainer'>
                <div className='pop-up-property-detail'>
                    <div className='xicon' onClick={closepopup}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                    </div>
                    <div className='summary my-top'>
                        <p className='s_title'>summary</p>
                        <p className='s_desc'>{props.data.summary}</p>
                    </div>
                    <div className='summary my-top'>
                        <p className='s_title'>Description</p>
                        <p className='s_desc'>{props.data.description}</p>
                    </div>
                    <div className='summary my-top'>
                        <p className='s_title'>Entrance Hallway</p>
                        <p className='s_desc'>{props.data.entrancehall}</p>
                    </div>
                    <div className='row-summary my-top'>
                        <p className='s_title pad-right'>Lounge</p>
                        <p className='s_desc'>{props.data.lounge}</p>
                    </div>
                    <div className='row-summary my1-top'>
                        <p className='s_title pad-right'>Kitchen</p>
                        <p className='s_desc'>{props.data.kitchen}</p>
                    </div>
                    <div className='row-summary my1-top'>
                        <p className='s_title pad-right'>Number of Bedrooms</p>
                        <p className='s_desc'>{props.data.noofbedrooms} Bedrooms</p>
                    </div>
                    <div className='row-summary my1-top'>
                        <p className='s_title pad-right'>Bedroom Dimensions</p>
                        <p className='s_desc'>{props.data.bedroomdimensions}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
