import React from 'react'

function Display (props) {
  const { display, evaluate, number, result, deleted } = props
  let formatted = ""
  let infix = (deleted) ? display : evaluate;

    if(result !="" && display===result){
      formatted = parseFloat(result).toLocaleString()
      console.log(`FORMATTED : ${formatted}`)

    }else{

      formatted = (isNaN(parseFloat(number))) ? 0 : parseFloat(number).toLocaleString()
      
    }
 
  return (
    <div className='display glass'>
      {formatted || '0'}
      <div className='preview'>{infix.trim().toLocaleString() || '0'}</div>
    </div>
  )
}

export default Display
