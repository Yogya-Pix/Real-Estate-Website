import React from 'react'
import './flexboxSlider.css';
import $ from 'jquery'
function FlexboxSlider() {

  // const cards = document.getElementsByClassName("card");
  // for (let card of cards) {
  //   card.addEventListener("mouseover", () => {
  //     if (!card.classList.contains("active")) {
  //       for (let c of cards) {
  //         c.classList.remove("active");
  //         card.classList.add('active');
  //       }
  //     }
  //   })
  // }

  function handleClick() {
    $(".card").on('click', function () {
      $(".card").removeClass("active");
      $(this).addClass("active");
    });
  }

  return (
    <>
      <div className='flexbox_slider-heading'>
        <h4>Read What Our Customers have to say</h4>
      </div>
      <div className='flexbox_slider'>
        <div className="card active" onClick={handleClick}>
          <div className='flexbox_slider-content'>
            <div className='content'>
              <div className='data'>
                <h4 className='title'>- Lisa R.</h4>
                <div className='detail'>
                  <p>The VR feature on ths website was mind-blowing I felt like I was actually walking through the property. It gave me a realistic sense of space and helped me make an informed decision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card " onClick={handleClick}>
          {/* bg = flexbox_slider-content */}
          <div className='flexbox_slider-content'>
            <div className='content'>
              <div className='data'>
                <h4 className='title'>- Ash R.</h4>
                <div className='detail'>
                  {/* <h4 className='title'>- Ash R.</h4> */}
                  <p>I would definitely recommend this website for experiencing the property. Purchased my first property through Tap to home, and I loved it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card " onClick={handleClick}>
          {/* bg = flexbox_slider-content */}
          <div className='flexbox_slider-content'>
            <div className='content'>
              <div className='data'>
                <h4 className='title jd'>- John Doe.</h4>
                <div className='detail'>
                  <p>I would definitely recommend this websits for experiencing the property. Purchased my first property throug Tap to home, and I loved it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FlexboxSlider
