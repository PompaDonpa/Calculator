import React, { Component } from 'react'
import CalculatorCSS from './CalculatorCSS.css'

export default class Calculator extends Component {
  render () {
    return (
      <div className='calculator'>
        <div className='display glass'>
          123,456,789e12<div className='preview'>preview</div>
        </div>

        <button className='button scientific'>sin</button>
        <button className='button scientific'>cos</button>
        <button className='button scientific'>tan</button>
        <button className='button scientific'>
          a<sup>2</sup>
        </button>
        <button className='button scientific'>
          a<sup>b</sup>
        </button>
        <button className='button scientific'>√</button>
        <button className='button scientific'>π</button>
        <button className='button scientific'>(</button>
        <button className='button scientific'>)</button>
        <button className='button scientific'>!</button>
        <button className='button scientific'>%</button>
        <button className='button scientific ac'>AC</button>
        <button className='button scientific'>±</button>
        <button className='button scientific'>→</button>
        <button className='button number'>7</button>
        <button className='button number'>8</button>
        <button className='button number'>9</button>
        <button className='button control'>÷</button>
        <button className='button number'>4</button>
        <button className='button number'>5</button>
        <button className='button number'>6</button>
        <button className='button control'>x</button>
        <button className='button number'>1</button>
        <button className='button number'>2</button>
        <button className='button number'>3</button>
        <button className='button control'>-</button>
        <button className='button control result'>=</button>
        <button className='button number zero'>0</button>
        <button className='button number'>.</button>
        <button className='button control'>+</button>
      </div>
    )
  }
}
