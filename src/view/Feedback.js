import React, { useState } from 'react'

import FeedbackButton from './FeedbackButton'

export default function Feedback () {
  const [feedback, setFeedback] = useState('Select how you are feeling')

  return <>
    <h1>Feedback</h1>

    <p>{feedback}</p>

    <FeedbackButton type='Very bad' setFeedback={setFeedback} />
    <FeedbackButton type='Bad' setFeedback={setFeedback} />
    <FeedbackButton type='Good' setFeedback={setFeedback} />
    <FeedbackButton type='Very good' setFeedback={setFeedback} />
  </>
}
