import React from 'react'

export default function Future (props) {
  const year = new Date().getFullYear()

  const events = [
    {
      name: 'Declaration of Independence',
      year: 1776
    },
    {
      name: 'Moon landing',
      year: 1969
    }
  ]

  const years = events.map(event => <li>{event.year}</li>)

  const ironCurtain = {
    name: 'Downfall of USSR',
    year: 1993
  }

  const numbers = [1, 2, 3]

  const message = `The current year is ${year}`

  return <p>
    <ul>
      {years}
    </ul>
    <p>{ironCurtain.name} {ironCurtain.year}</p>
    <div>{message}</div>
    Distance: {props.distance}
    <h3>{year + props.distance}</h3>
  </p>
}