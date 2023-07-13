import React, { Component } from 'react'
import loading from '../assets/loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{display:"flex", justifyContent:"center", marginLeft:"720px"}}>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}