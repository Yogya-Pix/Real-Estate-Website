import React, { useState } from 'react'
import './FilterBtnRightPopUp.css'
import useFetch from '../../hooks/useFetch'
import { ReactComponent as Cross } from '../../assets/cross.svg'
// import useFetch from '../../hooks/useFetch'

function FilterBtnRightPopUp() {

    const [FilterValue, setFilterValue] = useState([]);
    const [FeatureFilterValue, setFeatureFilterValue] = useState([]);
    const [CountryFilterValue, setCountryFilterValue] = useState([]);
    const [PropertyTypeFilterValue, setPropertyTypeFilterValue] = useState([]);
    const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property`)


    return (
        <>
            <div className=".filter-popup-container-main-parent">
                <div className="filter-popup-container-main">

                    <div className="filter-popup-container-left">
                        <div className="filter-section">
                            <h4>Property Features</h4>
                            <ul className="filter-categories">
                                {
                                    data.map((item) => (
                                        <li key={item._id}>
                                            <input type="button"
                                                value={item.feature}
                                                onClick={e => {
                                                    console.log([item.feature])
                                                    setFeatureFilterValue([item.feature])
                                                    // console.log(FilterValue)
                                                }}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>

                        </div>
                        <div className="filter-section">
                            <h4>Nearby Cities</h4>
                            <ul className="filter-categories">
                                {
                                    data.map((item) => (
                                        <li key={item._id}>
                                            <input type="button"
                                                value={item.country}
                                                onClick={e => {
                                                    console.log([item.country])
                                                    setCountryFilterValue([item.country])
                                                }}
                                            />
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                        <div className="filter-section">
                            <h4>Type of Property</h4>
                            <ul className="filter-categories">
                                {
                                    data.map((item) => (
                                        <li key={item._id}>
                                            <input type="button"
                                                value={item.propertytype}
                                                onClick={e => {
                                                    console.log([item.propertytype])
                                                    setPropertyTypeFilterValue([item.propertytype])
                                                }}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="filter-section">
                            <h4>Price Range</h4>
                            <ul className="filter-categories">
                                {
                                    data.map((item) => (
                                        <li key={item._id}>
                                            <input type="button"
                                                value={item.feature}
                                                onClick={e => {
                                                    console.log([item.feature])
                                                    setFilterValue([item.feature])
                                                }}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='filter-popup-container-right'>
                        <Cross />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterBtnRightPopUp
