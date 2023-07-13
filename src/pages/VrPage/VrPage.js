import React from 'react'
import Navbar from '../../components/Navbar'
import './VrPageStyle.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function VrPage() {
  const location = useLocation()
  const preid = location.pathname.split("/")[2];

  return (
    <div>
      <div className='navcontainer'>
        <Navbar mode="black" />
      </div>
      <div className='vrbox'>
        <div class="explorevrcontainer">
          <div className='vr1_title1'>
            <div className='vr1left1'>
              <svg width="54" height="44" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.96195C2 9.1173 2.33764 8.30723 2.93863 7.70997C3.53963 7.11271 4.35475 6.77717 5.20469 6.77717H30.8422C31.6921 6.77717 32.5072 7.11271 33.1082 7.70997C33.7092 8.30723 34.0469 9.1173 34.0469 9.96195V21.1087C34.0469 21.9533 33.7092 22.7634 33.1082 23.3607C32.5072 23.9579 31.6921 24.2935 30.8422 24.2935H24.6443C24.0909 24.2935 23.5469 24.1511 23.0654 23.8801C22.5838 23.6091 22.181 23.2188 21.8963 22.7473L19.3966 18.607C19.2542 18.3716 19.0529 18.1768 18.8122 18.0416C18.5716 17.9063 18.2999 17.8352 18.0234 17.8352C17.747 17.8352 17.4752 17.9063 17.2346 18.0416C16.994 18.1768 16.7927 18.3716 16.6502 18.607L14.1506 22.7473C13.8658 23.2188 13.4631 23.6091 12.9815 23.8801C12.4999 24.1511 11.956 24.2935 11.4025 24.2935H5.20469C4.35475 24.2935 3.53963 23.9579 2.93863 23.3607C2.33764 22.7634 2 21.9533 2 21.1087V9.96195ZM4.90505 4.83605C5.4902 3.96388 6.28291 3.24872 7.21286 2.75399C8.1428 2.25927 9.18123 2.00028 10.236 2H25.8076C26.8627 2.00002 27.9014 2.25888 28.8317 2.75362C29.7619 3.24835 30.5549 3.96366 31.1402 4.83605L32.4445 6.77717H3.60234L4.90505 4.83605Z" stroke="white" stroke-width="2.78668" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p style={{ fontSize: "24px" }}>Connect your Head Mounted Display</p>
            </div>
            <div className='vr1left1' style={{ right: "70px" }}>
              <button className='btn-vrfullscreen1'>
                <Link to={`/property/${preid}`} style={{ textDecoration: "none" }}>
                  <p style={{ fontSize: "22px" }}>Exit Full Screen</p>
                </Link>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 24V15.4286H3.42857V20.5714H8.57143V24H0ZM0 8.57143V0H8.57143V3.42857H3.42857V8.57143H0ZM15.4286 24V20.5714H20.5714V15.4286H24V24H15.4286ZM20.5714 8.57143V3.42857H15.4286V0H24V8.57143H20.5714Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
          <div className='clicktodrag1' style={{ marginTop: "0px", height: "380px", alignItems: "center" }}>
            <div className='dragimage1'>
              <svg width="101" height="110" viewBox="0 0 101 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.186 57.2959V10.2944C32.186 8.09457 33.0599 5.98487 34.6154 4.42937C36.1709 2.87387 38.2806 2 40.4804 2C42.6802 2 44.7899 2.87387 46.3454 4.42937C47.9009 5.98487 48.7748 8.09457 48.7748 10.2944V51.7663M48.7748 49.0015V37.9423C48.7748 35.7425 49.6487 33.6328 51.2042 32.0773C52.7597 30.5218 54.8694 29.6479 57.0692 29.6479C59.269 29.6479 61.3787 30.5218 62.9342 32.0773C64.4897 33.6328 65.3635 35.7425 65.3635 37.9423V51.7663M65.3635 43.4719C65.3635 41.2721 66.2374 39.1624 67.7929 37.6069C69.3484 36.0514 71.4581 35.1775 73.6579 35.1775C75.8577 35.1775 77.9674 36.0514 79.5229 37.6069C81.0784 39.1624 81.9523 41.2721 81.9523 43.4719V51.7663" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M81.9523 49.0016C81.9523 46.8018 82.8261 44.6921 84.3816 43.1366C85.9371 41.5811 88.0468 40.7073 90.2467 40.7073C92.4465 40.7073 94.5562 41.5811 96.1117 43.1366C97.6672 44.6921 98.541 46.8018 98.541 49.0016V73.8848C98.541 82.684 95.0456 91.1228 88.8236 97.3448C82.6016 103.567 74.1627 107.062 65.3635 107.062H54.3043H55.4545C49.96 107.063 44.5512 105.7 39.7139 103.094C34.8766 100.488 30.7622 96.7213 27.7402 92.1324L26.6564 90.4735C24.9312 87.8249 18.8763 77.2689 8.4862 58.8001C7.42701 56.9174 7.14408 54.6958 7.69759 52.6078C8.25109 50.5197 9.59736 48.73 11.4501 47.6192C13.4234 46.4352 15.7359 45.9444 18.0201 46.2249C20.3043 46.5055 22.4293 47.5411 24.0575 49.1675L32.186 57.296M2 16.3439C6.2435 13.2416 10.8031 10.5967 15.6028 8.45319M65.3635 4.53271C72.5644 6.46503 79.4334 9.4699 85.74 13.4464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p style={{ fontSize: "26px" }}>Click and Drag to look around</p>
            </div>
          </div>
          <div className='vr1_navbar1' style={{ left: "40%" }}>
            <div className='navbar-btn1'>
              <button className='btnvr1' style={{ padding: "6px 20px", fontSize: "22px", marginRight: "12px" }}>VR</button>
              <button className='btnar1' style={{ padding: "6px 20px", fontSize: "22px", marginRight: "12px" }}>AR</button>
              <button className='btnport1' style={{ padding: "6px 20px", fontSize: "22px" }}>MatterPort</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
