import React from 'react'
import SearchPropertiesPage from '../../components/SearchPropertiesPage/SearchPropertiesPage'
import Navbar from '../../components/Navbar'

function List() {
  return (
    <div>
      <div className='navcontainer'>
        <Navbar mode="black" />
      </div>
      <SearchPropertiesPage />
    </div>
  )
}

export default List
