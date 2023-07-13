'use strict'
import React, { useState } from 'react'
import '../styles/MidnavStyle.css'
import useFetch from "../hooks/useFetch"
import Slider from './imageSlider/Slider'
import Spinner from './Spinner'

export default function Midnav() {

    const [value, setvalue] = useState("London");

    const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property?location=${value}`)

    return (
        <div>
            <div className='midcontainer'>
                <div className='midnav_container'>
                    <p onClick={() => setvalue("Manchaster")}>Manchaster</p>
                    <p onClick={() => setvalue("Bristol")}>Bristol</p>
                    <p onClick={() => setvalue("Nottingham")}>Nottingham</p>
                    <p onClick={() => setvalue("Birmingham")}>Birmingham</p>
                    <p onClick={() => setvalue("Brisbane")}>Brisbane</p>
                    <p onClick={() => setvalue("Cairns")}>Cairns</p>
                    <p onClick={() => setvalue("Darwin")}>Darwin</p>
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
