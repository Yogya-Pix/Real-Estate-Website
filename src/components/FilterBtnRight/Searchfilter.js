import React from 'react'

export default function Searchfilter(props) {
  return (
    <div>
      {props.data.map((item) => (
        <p>{item.location}</p>
      ))}
    </div>
  )
}
