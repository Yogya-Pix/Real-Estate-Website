import React from 'react'
import './Slider.css'
import ImageSlider from './ImageSlider'
import { ReactComponent as VRimg } from '../../assets/VRimg.svg'
import { ReactComponent as ARimg } from '../../assets/ARimg.svg'
import { ReactComponent as Mimg } from '../../assets/Mimg.svg'
import { ReactComponent as FavIcon } from '../../assets/fav.svg'
import { Link } from 'react-router-dom'
import { CurrencyNet } from 'currencynet'
import axios from 'axios'


function Slider(props) {

  // const hanldelike = async (id) => {
  //   const liked = {
  //     isliked: true,
  //   };

  //   await axios.put(`/property/${id}`, liked)

  // }

  // const hanldeunlike = async (id) => {
  //   const unliked = {
  //     isliked: false,
  //   };

  //   await axios.put(`/property/${id}`, unliked)
  // }

  const top = () => {
    window.scrollTo(0, 0)
  }


  return (
    <>
      {/* <Link to={`/property/${props.item._id}`} style={{ color: "black" }} onClick={top}> */}
      <div className="parent-slider">
        <div className="slider-content">
          <div className="slider-image">
            <Link to={`/property/${props.item._id}`} style={{ color: "black" }} onClick={top}>
              <div className='slider-image-bgimg'>
                <ImageSlider data={props.item.picture} />
              </div>
            </Link>

            <div className='slider-image-vrimages'>
              <Link to={`/property/${props.item._id}`} style={{ color: "black" }} onClick={top}>
                <div className="vrimages">
                  <h4>VR</h4>
                  <VRimg />
                </div>
              </Link>
              <div className="vrimages">
                <h4>AR</h4>
                <ARimg />
              </div>
              <div className="vrimages">
                <h4>360</h4>
                <Mimg />
              </div>
            </div>
          </div>
          <div className="parent-slider-content-information">
            <Link to={`/property/${props.item._id}`} style={{ color: "black" }} onClick={top}>
              <div className="slider-content-information">
                <h4>{props.item.location}, {props.item.country}</h4>
                <p id='owner-para'>{props.item.ownername} . {props.item.ownerprofession}</p>
                <div className="applied-filters">
                  <p>{props.item.bhk} BHK</p>
                  <p id="middle-dot">.</p>
                  <p>{props.item.propertytype}</p>
                  <p id="middle-dot">.</p>
                  <p>{props.item.feature}</p>
                </div>
                <h3><CurrencyNet buildCurrency="INR" value={10} isfloat={false} shortenCurrency={true} /></h3>
              </div>
            </Link>

            <div className='likeicons'>
              <FavIcon className='likebtn showlikebtn' id='likebtnshow' />
              {/* <FavIcon className='uhlikebtn showlikebtn' style={{ color: "red" }} id='unlikebtnshow' onClick={() => hanldeunlike(props.item._id)} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  )
}

export default Slider

