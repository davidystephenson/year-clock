import React, { useState } from 'react'

export default function FeedbackButton (props) {
  return <button
    onClick={() => props.setFeedback(props.type)}
  >
    {props.type}
  </button>
}