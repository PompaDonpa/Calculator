import React from 'react'

function Display (props) {
  const { numbers, evaluate, format } = props

  const show = evaluate.join('')
 console.log(format(show.split('')))

  return (
    <div className='display glass'>
      {format(numbers) || '0'}
      <div className='preview'>{show || '0'}</div>
    </div>
  )
}

export default Display
