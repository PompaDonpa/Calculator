import React from 'react'

function Display (props) {
  const { numbers, format } = props

  return (
    <div className='display glass'>
      {format(numbers)}
      <div className='preview'>{format(numbers)}</div>
    </div>
  )
}

export default Display
