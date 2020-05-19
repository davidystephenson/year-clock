import React, { useState } from 'react'

export default function Votes () { 
  const [votes, setVotes] = useState(['placeholder'])

  function yes () {
    const newVotes = [...votes, 'Yes']

    setVotes(newVotes)
  }

  function no () {
    const newVotes = [...votes, 'No']

    setVotes(newVotes)
  }


  return <div>
    <h1>Votes</h1>
    {votes}

    <button onClick={yes}>Yes</button>

    <button onClick={no}>No</button>
  </div>
}
