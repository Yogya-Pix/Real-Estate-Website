import React from 'react'
import commercial from '../../assets/commercial.png'
import residential from '../../assets/residential.png'
import plot from '../../assets/plots.png'
import industrial from '../../assets/industrial.png'
import './PropertyBtn.css'

function PropertyBtn() {
  return (
    <>
      <div className="parent-property-btn">
        <h4>What Type of Property are you looking for ?</h4>
        <div className="parent-property-btn-main">
        <div className="property-btn-main">
            <div className="property-btn-div">
                <img src={commercial} alt="" />
                <div className="property-btn">Commercial Property</div>
                <p>Buildings that house businesses</p>
            </div>
            <div className="property-btn-div">
                <img src={residential} alt="" />
                <div className="property-btn">Residential Property</div>
                <p>Homes or apartments</p>
            </div>
            <div className="property-btn-div">
                <img src={industrial} alt="" />
                <div className="property-btn">Industrial Property</div>
                <p>Subset of intellectual property</p>
            </div>
            <div className="property-btn-div">
                <img src={plot} alt="" />
                <div className="property-btn">Lands/Plots</div>
                <p>A parcel of land</p>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default PropertyBtn
