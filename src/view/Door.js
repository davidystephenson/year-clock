import React, { useState } from 'react'

export default function Door () {
  const [door, setDoor] = useState({
    color: 'brown',
    height: 2,
    isOpen: true
  })

  function toggle () {
    // const opposite = !open
    // open === true -> opposite === false
    // open === false -> opposite === true

    console.log('oldDoor test:', door)

    const newDoor = {
      ...door,
      isOpen: !door.isOpen
    }

    console.log('newDoor test:', newDoor)

    setDoor(newDoor)
  }

  const status = door.isOpen ? 'The door is open' : 'The door is closed'

  return <>
    <h1>Door</h1>

    <p>
      Status: {status}
    </p>

    <button onClick={toggle}>Toggle</button>
  </>
}
