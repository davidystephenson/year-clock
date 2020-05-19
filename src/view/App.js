import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Count from './Count'
import Dog from './Dog'
import Door from './Door'
import Feedback from './Feedback'
import Future from './Future'
import Header from './Header'

function App () {
  return <>
    <Header />

    <Feedback />

    <Door />

    <Dog />

    <Count />

    <Future distance={5} />

    <Future distance={10} />
  </>
}

export default App