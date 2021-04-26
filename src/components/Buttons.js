import React from 'react'
import Button from './Button'

function Buttons (props) {
  const { skeleton, isClicked } = props

  class Boton {
    constructor (value, className) {
      this.value = value
      this.className = className
      this.int = this.int.bind(this)
    }
    int () {return parseInt(this.value)}
  }

  const buttons = skeleton.map(item => {
    const { value, className } = item
    const button = new Boton(value, className)

    return (
      <Button
        key={button.value}
        value={button.value}
        className={button.className}
        isClicked={isClicked}
        int={button.int}
      />
    )
  })

  return <>{buttons}</>
}

export default Buttons
