import React from 'react'
import Button from './Button'

function Buttons (props) {
  const { buttons, input } = props

  // This class isn't necessary!
  class Boton {
    constructor (type, value, symbol, className) {
      this.type = type
      this.value = value
      this.symbol = symbol
      this.className = className
    }
  }

  const keys = buttons.map(item => {
    const { info, className } = item
    const button = new Boton(info.type, info.value, info.symbol, className)

    // You can pass info.type, infor.value, etc as props without creating a new object to repackage this data in a new variable.
    return (
      <Button
        key={button.symbol}
        type={button.type}
        value={button.value}
        symbol={button.symbol}
        className={button.className}
        input={input}
      />
    )
  })

  return <>{keys}</>
}

export default Buttons
