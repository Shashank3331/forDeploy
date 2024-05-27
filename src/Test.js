import React from 'react'
import data from './data.js'

function Test() {
  return (
    <div>
       {data.map((val)=>val.name)}
    </div>
  )
}

export default Test
