import React, { useState } from 'react'

export default function Count () {
  const [count, setCount] = useState(0)

  return <>It was clicked {count} times</>
}