import React from 'react'
import Button from './Button'

function Buttons (props) {
  const { skeleton, isClicked } = props

  class Boton {
    constructor (value, symbol, className) {
      this.value = value
      this.symbol = symbol
      this.className = className
      this.int = this.int.bind(this)
      this.neg = this.neg.bind(this)
    }
    int () {return parseInt(this.value)}
    neg () {return parseInt(this.value)*(-1)}
  }

  const buttons = skeleton.map(item => {
    const { value, symbol, className } = item
    const button = new Boton(value, symbol, className)

    return (
      <Button
        key={button.symbol}
        value={button.value}
        symbol={button.symbol}
        className={button.className}
        isClicked={isClicked}
        int={button.int}
        neg={button.neg}
      />
    )
  })

  return <>{buttons}</>
}

export default Buttons
