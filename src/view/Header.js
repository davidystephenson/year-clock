import React, { useState } from 'react'

export default function Header (props) {
  const [numbers, setNumbers] = useState([
    { value: 1, word: 'One' },
    { value: 2, word: 'Two' }, 
    { value: 3, word: 'Three' }
  ])

  function onClick (value) {
    const newNumbers = numbers.filter(number => {
      const match = number.value === value

      return !match
    })

    setNumbers(newNumbers)
  }

  const buttons = numbers.map(number => {
    return <button
      onClick={() => onClick(number.value)}
    >
      Remove {number.word}
    </button>
  })

  return <>
    {buttons}
  </>
}