import React, { useState } from 'react'
import Navbar from '../Navbar';
import BottomNav from '../bottom_navbar/bottomNav';
import Footer from '../footer/footer';
import Map from '../MapIntegration/Map';
import './MapPage.css'
import SearchCity from '../filterBox/SearchCity'
import PropertyFilter from '../filterBox/PropertyFilter'
import FilterType from '../filterBox/FilterType'
// import './AllfilterStyle.css'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Mapicon } from '../../assets/map.svg'
import { ReactComponent as ListIcon } from '../../assets/List.svg'
import { Link } from 'react-router-dom'
// import './AllfilterStyles.css'


function MapPage() {

    const [searchvalue, setSearchvalue] = useState()

    const updatesearchvalue = (event) => {
        setSearchvalue(event.target.value);
    }

    return (
        <>
            <div className='navcontainer'>
                <Navbar mode="black" />
            </div>
            <div className="parent-main-filterbox-container">
                <div className="main-filterbox-container">
                    <div className="filters-container">
                        <div className="filter-types">
                            <SearchCity />
                            <PropertyFilter />
                            <FilterType />
                        </div>
                        <div className="filter-property-search-bar">
                            <input type="text" placeholder='Search for “Residential House in Nantes, France”' value={searchvalue} onChange={updatesearchvalue} />
                        </div>
                    </div>
                    <Link to={`/searchbar/${searchvalue}`} style={{ color: "black" }}>
                        <div className="filter-search-btn-container">
                            <Search />
                            <p>Search</p>
                        </div>
                    </Link>
                </div>
                <div className="show-on-list-btn">
                    <div className='btm__nav'>
                        <Link to='/Property'>
                            <div className='btm__nav-btn'>
                                <ListIcon />
                                Show in List</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="parent-map">
                <div className='map-included'>
                    <Map />
                </div>
            </div>
            <BottomNav />
            <Footer />

        </>
    )
}

export default MapPage
