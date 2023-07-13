import React, { useState } from 'react'
import SearchCity from '../filterBox/SearchCity'
import PropertyFilter from '../filterBox/PropertyFilter'
import FilterType from '../filterBox/FilterType'
import './AllfilterStyle.css'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Mapicon } from '../../assets/map.svg'
import { Link } from 'react-router-dom'

export default function Allfilter() {

    const [searchvalue, setSearchvalue] = useState()

    const updatesearchvalue = (event) => {
        setSearchvalue(event.target.value);
    }

    return (
        <div>
            <div className="parent-main-filterbox-container">
                <div className="main-filterbox-container">
                    <div className="filters-container">
                        <div className="filter-types">
                            <SearchCity />
                            <PropertyFilter />
                            <FilterType />
                        </div>
                        <div className="filter-property-search-bar">
                            <input type="text" placeholder='Search for “Residential House in Dubai, UAE”' value={searchvalue} onChange={updatesearchvalue} />
                        </div>
                    </div>
                    <Link to={`/searchbar/${searchvalue}`} style={{ color: "black" }}>
                        <div className="filter-search-btn-container">
                            <Search />
                            <p>Search</p>
                        </div>
                    </Link>
                </div>
                <div className="show-on-map-btn">
                    <div className='btm__nav'>
                        <Link to='/MapPage'>
                            <div className='btm__nav-btn'>
                                <Mapicon />
                                Show on Map</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
