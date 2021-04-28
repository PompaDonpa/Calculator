import React from 'react'

function Button (props) {
  const { value, symbol, className, int, neg, isClicked } = props

  const handleClick = () => {
    let number = int()
    isClicked(value, className,number)
  }
  return (
    <button value={value} className={className} onClick={handleClick}>
      {symbol}
    </button>
  )
}

export default Button
