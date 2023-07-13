import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Link, useLocation } from 'react-router-dom';
import Slider from '../imageSlider/Slider';
import Footer from '../footer/footer';
import Navbar from '../Navbar';
import './SearchbarStyle.css'
import { ReactComponent as Mapicon } from '../../assets/map.svg'
import SearchCity from '../filterBox/SearchCity'
import FilterType from '../filterBox/FilterType'
import PropertyFilter from '../filterBox/PropertyFilter'
import Allfilter from '../filtercontainer/Allfilter';

export default function FilterSearchPage() {

    const location = useLocation()
    const key = location.pathname.split("/")[2];

    const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property/search/${key}`)

    return (
        <div>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <Allfilter />
            <div className='search_result_container'>
                <p className='search_result_name'>Search Result</p>
                <div className="search_result_items">
                    <div className='sssparentslider' id='showhiddensliderdiv'>
                        <div className="super-parent-slider">
                            <>
                                {data.map((item) => (
                                    <Slider key={item._id} item={item} />
                                ))}
                            </>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
