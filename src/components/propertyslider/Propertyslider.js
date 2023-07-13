import React from 'react'
import Slider from '../imageSlider/Slider'
import useFetch from '../../hooks/useFetch'
import '../propertyslider/PropertysliderStyle.css'
import Spinner from '../Spinner'

export default function Propertyslider() {
  const { data, loading, error } = useFetch('https://real-estate-backend-wihx.onrender.com/api/property')
  return (
    <div>
      <div className='nearby_property_container'>
        <div className='nearby_property_div'>
          <p className='neabyname'>Nearby Properties</p>
          <div className='nearby_property_items'>
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
