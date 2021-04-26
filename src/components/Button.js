import React from 'react'

function Button (props) {
  const { value, className, int, isClicked } = props

  const handleClick = () => {
    let number = int()
    isClicked(value, className,number)
  }
  return (
    <button value={value} className={className} onClick={handleClick}>
      {value}
    </button>
  )
}

export default Button
