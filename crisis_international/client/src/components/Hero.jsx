import React from 'react'

export default function Hero(props) {


  return (
    <div className="hero">
      <h1>{props.title}</h1>
      <h3>{props.tagline}</h3>
      <p>{props.description}</p>
      <p><em>{props.helper}</em></p>
    </div>
  )
}
