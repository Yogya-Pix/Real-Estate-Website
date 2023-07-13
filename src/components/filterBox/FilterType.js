import React, { useRef, useEffect, useState } from 'react'
import './FilterType.css'
import useFetch from '../../hooks/useFetch'
import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg'
import { Link } from 'react-router-dom'

function FilterType() {


    const [isFilterMenuOpen, setisFilterMenuOpen] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutsideFilterBox = (e) => {
            if (isFilterMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setisFilterMenuOpen(false);
            }
        };
        document.addEventListener("click", checkIfClickedOutsideFilterBox)
        return () => {
            document.removeEventListener("click", checkIfClickedOutsideFilterBox)
        };
    }, [isFilterMenuOpen])

    const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property`)

    const allfeatues = [... new Set(data.map((item) => { return item.feature }))]

    return (
        <>
            <div className="filter-dropdown-main-container">
                <div className="filter-dropdown-container">
                    <button className='filter-dropdpwn-btn' onClick={() => setisFilterMenuOpen(!isFilterMenuOpen)}>
                        <div className="filter-dropdown-btn-div">
                            <DownArrow />
                            <p>Filter</p>
                        </div>
                    </button>
                    {isFilterMenuOpen &&
                        <ul className='filter-dropdown-list'>
                            {
                                allfeatues.map((item, index) => (
                                    <Link to={`/searchbar/${item}`} style={{ color: "black" }}>
                                        <li className="filter-dropdown-list-items" key={index}>
                                            <p>{item}</p></li>
                                    </Link>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default FilterType
