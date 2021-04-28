import React from 'react'
import Buttons from './Buttons'
import Display from './Display'

// TODO: change to class component
function Calculator (props) {
  const { skeleton, isClicked, numbers, evaluate, format } = props
    
  // constructor() {
  //     this.state = {
  //       lastOperand: '',
  //       lastOperator: '',
  //       lastResult: 0
  //     }
  // }

  // TODO: suggestion: you can move state

  // clickButton(info) {
  //   switch (info.type) {
  //     case 'operator':
  //       // TODO:
  //       break;
  //     case 'number':
  //       // TODO:
  //       break;
  //     default:
  //       // TODO:
  //       break;
  //   }
  // }

  return (
    <div className='calculator'>
      <Display numbers={numbers} format={format} evaluate={evaluate}/>
      <Buttons skeleton={skeleton} isClicked={isClicked} />
    </div>
  )
}

export default Calculator
