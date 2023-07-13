import React from 'react'
import './BriefStyle.css'
export default function Brief(props) {

  function opencontact(){
    const contactpage = document.getElementById("owner-contact-page")
    const summarypage = document.getElementById('mypopupcontainer')
    contactpage.classList.add("show-contact-page")
    contactpage.classList.remove("dont-show-contact-page")
    summarypage.classList.add("dont-show-pop-up")
    summarypage.classList.remove("show-pop-up")
  }

  function closecontact(){
    const contactpage = document.getElementById("owner-contact-page")
    contactpage.classList.add("dont-show-contact-page")
    contactpage.classList.remove("show-contact-page")
  }
  
  return (
    <div>
      <div className='header_container'>
        <div className='header_left'>
          <p className='title'>{props.data.propertytitle}<span>.</span>₹{props.data.price} </p>
          <p className='features'>{props.data.bhk} Bhk<span>.</span>{props.data.propertytype}<span>.</span>{props.data.feature}</p>
          <p className='location'>{props.data.location}, {props.data.country}</p>
        </div>
        <div className='header_right'>
          <button className="btn-contact" onClick={opencontact}>Contact Owner</button>
        </div>
      </div>
      <div className='owner-contact-detail dont-show-contact-page' id='owner-contact-page'>
        <div className='owner-detail1'>
          <div className='crossicon1' onClick={closecontact}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
          </div>
          <div className='owner-left-detail'>
            <p className='aboutowner'>About the Owner</p>
            <p className='ownername'>{props.data.ownername}</p>
            <p className='ownerdesc'>{props.data.ownerdesc}</p>
          </div>
          <div className='owner-right-detail'>
            <p className='contactowner'>Contact</p>
            <p className='ownerphone owneremail'>{props.data.ownerphoneno}</p>
            <p className='ownerphone '>{props.data.owneremailid}</p>
            <div className='btn_owner'>
              <div className='verified_owner'>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.52727 15L4.14545 12.7143L1.52727 12.1429L1.78182 9.5L0 7.5L1.78182 5.5L1.52727 2.85714L4.14545 2.28571L5.52727 0L8 1.03571L10.4727 0L11.8545 2.28571L14.4727 2.85714L14.2182 5.5L16 7.5L14.2182 9.5L14.4727 12.1429L11.8545 12.7143L10.4727 15L8 13.9643L5.52727 15ZM6.14545 13.1786L8 12.3929L9.89091 13.1786L10.9091 11.4643L12.9091 11L12.7273 9L14.0727 7.5L12.7273 5.96429L12.9091 3.96429L10.9091 3.53571L9.85455 1.82143L8 2.60714L6.10909 1.82143L5.09091 3.53571L3.09091 3.96429L3.27273 5.96429L1.92727 7.5L3.27273 9L3.09091 11.0357L5.09091 11.4643L6.14545 13.1786ZM7.23636 10.0357L11.3455 6L10.3273 4.96429L7.23636 8L5.67273 6.5L4.65455 7.5L7.23636 10.0357Z" fill="black" />
                </svg>
                <p className='v_owner'>Verified Owner</p>
              </div>
              <div className='verified_owner'>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8368 5.12146L3.03732 0.220051C2.65059 0.0275025 2.2139 -0.0410462 1.7868 0.0237512C1.35969 0.0885486 0.962959 0.283539 0.650686 0.582136C0.338414 0.880734 0.1258 1.26841 0.0418322 1.6923C-0.0421352 2.11619 0.00663017 2.55568 0.18148 2.95083L1.86139 6.71091C1.89951 6.80182 1.91914 6.89941 1.91914 6.99799C1.91914 7.09658 1.89951 7.19417 1.86139 7.28508L0.18148 11.0452C0.0391775 11.3649 -0.0209803 11.7152 0.00647321 12.0642C0.0339267 12.4132 0.148121 12.7497 0.338679 13.0433C0.529236 13.3369 0.790115 13.5782 1.09761 13.7453C1.4051 13.9124 1.74945 13.9999 2.09938 14C2.42712 13.9967 2.74998 13.9202 3.04432 13.7759L12.8438 8.87453C13.1914 8.69961 13.4836 8.43152 13.6877 8.10017C13.8919 7.76881 14 7.38723 14 6.99799C14 6.60876 13.8919 6.22718 13.6877 5.89582C13.4836 5.56447 13.1914 5.29638 12.8438 5.12146H12.8368ZM12.2138 7.62117L2.41436 12.5226C2.28568 12.5844 2.14119 12.6054 2.00025 12.5827C1.85932 12.56 1.72868 12.4948 1.62586 12.3957C1.52304 12.2967 1.45295 12.1686 1.42498 12.0285C1.39702 11.8885 1.41252 11.7433 1.46941 11.6123L3.14232 7.85224C3.16398 7.80203 3.18267 7.75059 3.19832 7.69819H8.02105C8.20669 7.69819 8.38473 7.62442 8.516 7.49311C8.64727 7.3618 8.72101 7.1837 8.72101 6.99799C8.72101 6.81229 8.64727 6.63419 8.516 6.50288C8.38473 6.37156 8.20669 6.29779 8.02105 6.29779H3.19832C3.18267 6.2454 3.16398 6.19396 3.14232 6.14375L1.46941 2.38367C1.41252 2.25271 1.39702 2.10748 1.42498 1.96745C1.45295 1.82742 1.52304 1.6993 1.62586 1.60025C1.72868 1.5012 1.85932 1.43597 2.00025 1.4133C2.14119 1.39063 2.28568 1.4116 2.41436 1.47341L12.2138 6.37482C12.3285 6.43357 12.4247 6.52285 12.4919 6.6328C12.5591 6.74275 12.5946 6.86912 12.5946 6.99799C12.5946 7.12686 12.5591 7.25323 12.4919 7.36319C12.4247 7.47314 12.3285 7.56241 12.2138 7.62117Z" fill="black" />
                </svg>
                <p className='v_owner'>Direct Message</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
