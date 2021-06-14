import React from 'react'

function Button ({ category, evaluate, symbol, className, userInput } ) {

  return (
    <button
      category={category}
      className={className}            
      onClick={()=>userInput(evaluate,category)}
    >
      {symbol}
    </button>
  )
}

export default Button
