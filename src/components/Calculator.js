import React from 'react'
import Buttons from './Buttons'
import Display from './Display'


function Calculator ({ userInput, display, evaluate, number , result, deleted } ) {

  return (
    <div className='calculator'>
      <Display 
        display={display}
        evaluate={evaluate}
        number={number}
        result={result}
        deleted ={deleted}
      />
      <Buttons 
        userInput={userInput} />
    </div>
  )
}

export default Calculator
