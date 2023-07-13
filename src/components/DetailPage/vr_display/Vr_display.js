import React from 'react'
import './Vr_displayStyle.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import poster1 from '../../../assets/alphathum_poster.jpg'
import poster2 from '../../../assets/Alphathum_NEW AND FINAL.jpg'
import alpha2 from '../../../assets/alpha2.mp4'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import ReactPlayer from 'react-player';

export default function Vr_display(props) {

  function handleClick() {
    $(".card1").on('click', function () {
      $(".card1").removeClass("active1");
      $(this).addClass("active1");
    });
  }

  // function btnchangebtn(){
  //   $(".btnchange").on('click', function (){
  //     $(".btnchange").removeClass("activevr");
  //     $(this).add("activevr")
  //   });
  // }

  return (
    <div>
      <section class="card_section1">
        <div class="cards1" onClick={handleClick}>
          <div class="card1 dontshow1 videocontainer1 " id="video1">
            <div class="shadow1 video1">
              <svg width="34" height="26" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H40C40.5304 2 41.0391 2.21071 41.4142 2.58579C41.7893 2.96086 42 3.46957 42 4V32C42 32.5304 41.7893 33.0391 41.4142 33.4142C41.0391 33.7893 40.5304 34 40 34H4C3.46957 34 2.96086 33.7893 2.58579 33.4142C2.21071 33.0391 2 32.5304 2 32V4Z" stroke="#828282" stroke-width="3" stroke-linejoin="round" />
                <path d="M34 2V34M10 2V34M34 12H42M34 24H42M2 12H10M2 10V14M7 2H13M7 34H13M31 2H37M31 34H37M2 24H10M2 22V26M42 22V26M42 10V14" stroke="#828282" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 13L27 18L19 23V13Z" stroke="#828282" stroke-width="3" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="label1">


              <Video
                style={{ width: "100%", height: "100%" }}
                // autoplay={model}
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'FullScreen']}
                poster={poster1}

              >
                <source src={alpha2} type='video/webm' />
              </Video>

            </div>
          </div>
          <div class="card1 active1 vrcontainer1" id="vr1">
            <div class="shadow1 vr1">
              <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.04102 9.64359C2.04102 8.79894 2.37865 7.98887 2.97965 7.39161C3.58064 6.79435 4.39577 6.45881 5.2457 6.45881H30.8832C31.7331 6.45881 32.5482 6.79435 33.1492 7.39161C33.7502 7.98887 34.0879 8.79894 34.0879 9.64359V20.7903C34.0879 21.635 33.7502 22.445 33.1492 23.0423C32.5482 23.6396 31.7331 23.9751 30.8832 23.9751H24.6853C24.1319 23.9751 23.5879 23.8327 23.1064 23.5617C22.6248 23.2908 22.222 22.9005 21.9373 22.4289L19.4377 18.2887C19.2952 18.0532 19.0939 17.8584 18.8532 17.7232C18.6126 17.5879 18.3409 17.5169 18.0644 17.5169C17.788 17.5169 17.5163 17.5879 17.2756 17.7232C17.035 17.8584 16.8337 18.0532 16.6912 18.2887L14.1916 22.4289C13.9069 22.9005 13.5041 23.2908 13.0225 23.5617C12.5409 23.8327 11.997 23.9751 11.4436 23.9751H5.2457C4.39577 23.9751 3.58064 23.6396 2.97965 23.0423C2.37865 22.445 2.04102 21.635 2.04102 20.7903V9.64359ZM4.94606 4.51769C5.53122 3.64552 6.32393 2.93036 7.25387 2.43563C8.18382 1.94091 9.22225 1.68192 10.2771 1.68164H25.8486C26.9037 1.68166 27.9425 1.94052 28.8727 2.43526C29.803 2.92999 30.5959 3.6453 31.1812 4.51769L32.4855 6.45881H3.64336L4.94606 4.51769Z" stroke="#828282" stroke-width="2.78668" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="label1">
              <div className='vr1_title1'>
                <div className='vr1left1'>
                  <svg width="34" height="24" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9.96195C2 9.1173 2.33764 8.30723 2.93863 7.70997C3.53963 7.11271 4.35475 6.77717 5.20469 6.77717H30.8422C31.6921 6.77717 32.5072 7.11271 33.1082 7.70997C33.7092 8.30723 34.0469 9.1173 34.0469 9.96195V21.1087C34.0469 21.9533 33.7092 22.7634 33.1082 23.3607C32.5072 23.9579 31.6921 24.2935 30.8422 24.2935H24.6443C24.0909 24.2935 23.5469 24.1511 23.0654 23.8801C22.5838 23.6091 22.181 23.2188 21.8963 22.7473L19.3966 18.607C19.2542 18.3716 19.0529 18.1768 18.8122 18.0416C18.5716 17.9063 18.2999 17.8352 18.0234 17.8352C17.747 17.8352 17.4752 17.9063 17.2346 18.0416C16.994 18.1768 16.7927 18.3716 16.6502 18.607L14.1506 22.7473C13.8658 23.2188 13.4631 23.6091 12.9815 23.8801C12.4999 24.1511 11.956 24.2935 11.4025 24.2935H5.20469C4.35475 24.2935 3.53963 23.9579 2.93863 23.3607C2.33764 22.7634 2 21.9533 2 21.1087V9.96195ZM4.90505 4.83605C5.4902 3.96388 6.28291 3.24872 7.21286 2.75399C8.1428 2.25927 9.18123 2.00028 10.236 2H25.8076C26.8627 2.00002 27.9014 2.25888 28.8317 2.75362C29.7619 3.24835 30.5549 3.96366 31.1402 4.83605L32.4445 6.77717H3.60234L4.90505 4.83605Z" stroke="white" stroke-width="2.78668" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p>Connect your Head Mounted Display</p>
                </div>
                <div className='vr1right1'>
                  <button className='btn-vrfullscreen1'>
                    <Link to={`/explorevr/${props.data._id}`} className='fullmodelinkstyle1'>
                      <p>Full Screen Mode</p>
                    </Link>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 24V15.4286H3.42857V20.5714H8.57143V24H0ZM0 8.57143V0H8.57143V3.42857H3.42857V8.57143H0ZM15.4286 24V20.5714H20.5714V15.4286H24V24H15.4286ZM20.5714 8.57143V3.42857H15.4286V0H24V8.57143H20.5714Z" fill="black" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='clicktodrag1'>
                <div className='dragimage1'>
                  <svg width="71" height="80" viewBox="0 0 101 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.186 57.2959V10.2944C32.186 8.09457 33.0599 5.98487 34.6154 4.42937C36.1709 2.87387 38.2806 2 40.4804 2C42.6802 2 44.7899 2.87387 46.3454 4.42937C47.9009 5.98487 48.7748 8.09457 48.7748 10.2944V51.7663M48.7748 49.0015V37.9423C48.7748 35.7425 49.6487 33.6328 51.2042 32.0773C52.7597 30.5218 54.8694 29.6479 57.0692 29.6479C59.269 29.6479 61.3787 30.5218 62.9342 32.0773C64.4897 33.6328 65.3635 35.7425 65.3635 37.9423V51.7663M65.3635 43.4719C65.3635 41.2721 66.2374 39.1624 67.7929 37.6069C69.3484 36.0514 71.4581 35.1775 73.6579 35.1775C75.8577 35.1775 77.9674 36.0514 79.5229 37.6069C81.0784 39.1624 81.9523 41.2721 81.9523 43.4719V51.7663" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M81.9523 49.0016C81.9523 46.8018 82.8261 44.6921 84.3816 43.1366C85.9371 41.5811 88.0468 40.7073 90.2467 40.7073C92.4465 40.7073 94.5562 41.5811 96.1117 43.1366C97.6672 44.6921 98.541 46.8018 98.541 49.0016V73.8848C98.541 82.684 95.0456 91.1228 88.8236 97.3448C82.6016 103.567 74.1627 107.062 65.3635 107.062H54.3043H55.4545C49.96 107.063 44.5512 105.7 39.7139 103.094C34.8766 100.488 30.7622 96.7213 27.7402 92.1324L26.6564 90.4735C24.9312 87.8249 18.8763 77.2689 8.4862 58.8001C7.42701 56.9174 7.14408 54.6958 7.69759 52.6078C8.25109 50.5197 9.59736 48.73 11.4501 47.6192C13.4234 46.4352 15.7359 45.9444 18.0201 46.2249C20.3043 46.5055 22.4293 47.5411 24.0575 49.1675L32.186 57.296M2 16.3439C6.2435 13.2416 10.8031 10.5967 15.6028 8.45319M65.3635 4.53271C72.5644 6.46503 79.4334 9.4699 85.74 13.4464" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p>Click and Drag to look around</p>
                </div>
              </div>
              <div className='vr1_navbar1'>
                <div className='navbar-btn1'>
                  <button className='btnchange btnvr1 activevr'>VR</button>
                  <button className='btnchange btnar1'>AR</button>
                  <button className='btnchange btnport1'>MatterPort</button>
                </div>
              </div>
            </div>
          </div>
          <div class="card1 dontshow1 imagecontainer1 " id="image1">
            <div class="shadow1 image1">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.46154 34L31.5385 34C32.8979 34 34 32.8979 34 31.5385L34 4.46154C34 3.10207 32.8979 2 31.5385 2L4.46154 2C3.10207 2 2 3.10207 2 4.46154L2 31.5385C2 32.8979 3.10207 34 4.46154 34Z" stroke="#828282" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 27.8467H34M10.2215 27.8467L23.0462 15.8344C23.2673 15.6502 23.546 15.5493 23.8338 15.5493C24.1217 15.5493 24.4004 15.6502 24.6215 15.8344L34 22.5544" stroke="#828282" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.8461 15.5384C13.8853 15.5384 15.5384 13.8853 15.5384 11.8461C15.5384 9.80691 13.8853 8.15381 11.8461 8.15381C9.80691 8.15381 8.15381 9.80691 8.15381 11.8461C8.15381 13.8853 9.80691 15.5384 11.8461 15.5384Z" stroke="#828282" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="label1">
              <img src={poster2} alt="image" style={{ height: "500px", width: "910px" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
