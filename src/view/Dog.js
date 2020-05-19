import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dog () {
  const [dog, setDog] = useState({ message: 'placeholder' })
  const [fetching, setFetching] = useState(false)

  async function getDog () {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random'
      const response = await axios.get(url)
      console.log('response.data test:', response.data)
      // {
        // "message": "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_1590.jpg",
        // "status": "success"
      // }
      console.log('typeof data test:', typeof response.data)

      setDog(response.data)
      // setFetching(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(
    () => {
      getDog()
    }, // callback - what should happen
    [fetching] // [] - only run once at the beginning
    // If any element of the array changes, run again
  )

  function fetch () {
    // count = count + 1
    setFetching(true)
  }


  return <>
    <h1>Dog</h1>

    <div>
      <img src={dog.message} />
    </div>

    <button onClick={fetch}>New dog</button>
  </>
}
