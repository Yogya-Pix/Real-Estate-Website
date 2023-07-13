import React, { useState } from 'react'
import Footer from '../footer/footer'
import BottomNav from '../bottom_navbar/bottomNav'
import Slider from '../imageSlider/Slider'
import PropertyBtn from '../propertyTypeButton/PropertyBtn'
import Allfilter from '../filtercontainer/Allfilter'
import './SearchPropertiesPage.css'
import { ReactComponent as Cross } from '../../assets/cross.svg'
import { ReactComponent as Filter } from '../../assets/filter.svg'
import useFetch from '../../hooks/useFetch'
import $ from 'jquery'
import Spinner from '../Spinner'
import HomeSlider from '../HomeSlider'
import FilterBtnRightPopUP from '../FilterBtnRight/FilterBtnRightPopUp'



function SearchPropertiesPage() {

  const [changevalue, setchangevalue] = useState()
  const { data, loading, error } = useFetch("https://real-estate-backend-wihx.onrender.com/api/property")

  $(".showmoreslider").on('click', function () {
    $(".sssparentslider").addClass("showparent");
    $(this).removeClass("showparent");
  });

  $(".showlessslider").on('click', function () {
    $(".sssparentslider").removeClass("showparent");
    $(this).addClass("showparent");
  });

  function hidebtn1() {
    const value1 = document.getElementById("showmorebtn1");
    const value2 = document.getElementById("showlessbtn1");

    value1.classList.add("dontshowmoresliderbtn")
    value1.classList.remove("showmoresliderbtn")
    value2.classList.add("showmoresliderbtn")
    value2.classList.remove("dontshowmoresliderbtn")
  }

  function hidebtn2() {
    const value1 = document.getElementById("showmorebtn1");
    const value2 = document.getElementById("showlessbtn1");

    value1.classList.add("showmoresliderbtn")
    value1.classList.remove("dontshowmoresliderbtn")
    value2.classList.add("dontshowmoresliderbtn")
    value2.classList.remove("showmoresliderbtn")
  }


  const [isVisible, setIsVisible] = useState(false);

  const PopBtnVisibility = () => {
    setIsVisible(true);
  };


  return (
    <>
      <Allfilter />
      {/* {isVisible && <FilterBtnRightPopUP olddata={data}/>} */}
      <div className="search-results-container-main">
        <div className="search-results-filters-shown">
          <h1>Search Results </h1>
          {/* <div className="selected-filters">
            <div className="filter">Residential Property
              <Cross />
            </div>
            <div className="filter">United Kingdom
              <Cross />
            </div>
            <div className="filter">Australia
              <Cross />
            </div>
            <div className="filter">Italy
              <Cross />
            </div>
          </div> */}


        </div>
        {/* <div className="filter-list-btn" onClick={PopBtnVisibility} style={{ cursor: "pointer" }}>
          <Filter />
          Filters
        </div> */}
      </div>


      <div className="super-super-parent-slider">
        <div className='sssparentslider' id='showhiddensliderdiv'>
          <div className="super-parent-slider">
            {loading ? (<Spinner />) : (
              <>
                {data.map((item) => (
                  <Slider key={item._id} item={item} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/* <HomeSlider/> */}
      <div className='slidershowmore'>
        <div className='expandslider'>
          <p className="showmoreslider showmoresliderbtn" onClick={hidebtn1} id='showmorebtn1'>Show More...</p>
          <p className="showlessslider dontshowmoresliderbtn" onClick={hidebtn2} id='showlessbtn1'>Show Less...</p>
        </div>
      </div>
      <PropertyBtn />
      <BottomNav />
      <Footer />
    </>
  )
}

export default SearchPropertiesPage
