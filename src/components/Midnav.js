'use strict'
import React, { useState } from 'react'
import '../styles/MidnavStyle.css'
import useFetch from "../hooks/useFetch"
import Slider from './imageSlider/Slider'
import Spinner from './Spinner'

export default function Midnav() {

    const [value, setvalue] = useState("Noida");

    const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property?location=${value}`)

    return (
        <div>
            <div className='midcontainer'>
                <div className='midnav_container'>
                    <p onClick={() => setvalue("Noida")} >Noida</p>
                    <p onClick={() => setvalue("Delhi")}>Delhi</p>
                    <p onClick={() => setvalue("Jaipur")}>Jaipur</p>
                    <p onClick={() => setvalue("Dehradun")}>Dehradun</p>
                    <p onClick={() => setvalue("Pune")}>Pune</p>
                    <p onClick={() => setvalue("Dubai")}>Dubai</p>
                    <p onClick={() => setvalue("Paris")}>Paris</p>
                    <p onClick={() => setvalue("London")}>London</p>
                </div>
            </div>
            <div className="search_result_items">
                <div className='midnavslider' id='showhiddensliderdiv'>
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
        </div>
    )
}
