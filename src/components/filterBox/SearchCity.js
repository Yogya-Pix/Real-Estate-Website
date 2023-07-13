import React, { useRef, useEffect, useState } from 'react'
import './SearchCity.css'
import useFetch from '../../hooks/useFetch'
// import downArrow from '../../assets/downArrow.png'
import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg'
import { Link } from 'react-router-dom'

function SearchCity() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    };
  }, [isMenuOpen])

  const [city, setCity] = useState();


  const { data, loading, error } = useFetch(`https://real-estate-backend-wihx.onrender.com/api/property`)

  const alllocation = [... new Set(data.map((item) => { return item.location }))]

  return (
    <>
      <div className="search-dropdown-main-container">
        <div className="dropdown-container" ref={ref}>
          <button className='dropdown-btn' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="dropdown-btn-div">
              <DownArrow />
              <p>Search City</p>
            </div>

          </button>
          {isMenuOpen &&
            <ul className='dropdown-list'>
              {
                alllocation.map((item, index) => (
                  <Link to={`/searchbar/${item}`} style={{ color: "black" }}>
                    <li className="dropdown-list-items" key={index}>
                      <p>{item}</p>
                    </li>
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

export default SearchCity
