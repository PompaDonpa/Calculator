import React from 'react'
import Buttons from './Buttons'
import Display from './Display'


function Calculator (props) {
  const { buttons, numbers, input, operation, display, number } = props
    

  return (
    <div className='calculator'>
      <Display 
        numbers={numbers} 
        display={display}
        number={number}
      />
      <Buttons 
        buttons={buttons} 
        input={input} 
        operation={operation}/>
    </div>
  )
}

export default Calculator
