import React from 'react'
import Navbar from '../../components/Navbar'
import '../property/PropertyStyle.css'
import Brief from '../../components/DetailPage/brief/Brief'
import Vr_display from '../../components/DetailPage/vr_display/Vr_display'
import Amenities from '../../components/DetailPage/amenities/Amenities'
import Summary from '../../components/DetailPage/summary/Summary'
import Footer from '../../components/footer/footer'
import BottomNav from '../../components/bottom_navbar/bottomNav'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Propertyslider from '../../components/propertyslider/Propertyslider'

export default function Property() {
    const location = useLocation()
    const id = location.pathname.split("/")[2];

    const { data, laoding, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property/${id}`)

    return (
        <div>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <Brief data={data} />
            <Vr_display data={data}/>
            <Amenities />
            <Summary data={data} />
            <Propertyslider/>
            <BottomNav />
            <Footer />
        </div>
    )
}
