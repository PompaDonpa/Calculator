import React from 'react'

function Display (props) {
  const { numbers, display, number } = props

  const formatted = (isNaN(parseFloat(number))) ? 0 : parseFloat(number).toLocaleString()
  const evaluate = (display != number) ? display : formatted
  return (
    <div className='display glass'>
      {formatted || '0'}
      <div className='preview'>{evaluate.toLocaleString() || '0'}</div>
    </div>
  )
}

export default Display
