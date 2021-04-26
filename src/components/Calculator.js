import React from 'react'
import Buttons from './Buttons'
import Display from './Display'

function Calculator (props) {
  const { skeleton, isClicked, numbers, format } = props

  return (
    <div className='calculator'>
      <Display numbers={numbers} format={format} />
      <Buttons skeleton={skeleton} isClicked={isClicked} />
    </div>
  )
}

export default Calculator
