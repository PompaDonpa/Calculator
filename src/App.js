import 'css-doodle'
import './App.css'
import React from 'react'
import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
import {Decimal} from 'decimal.js'
// import formatter from './helpers/formatter'

import data from './helpers/data'
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: "",
      number:"",
      evaluate: "",
      numbers:[],
      result: 0,
      prevNum: "",
      prevEva: [],
      prevRes: 0
    }

  }
  
  input =(e)=>{
    const [input,type] = e.target.value.split(',')
    if(type === "number"){
        this.setState({
          //numbers : this.state.numbers.concat(input),
          number: this.state.number.concat(input),
          display: this.state.number.concat(input)
        })

    }else{
      const evaluate = this.state.evaluate + this.state.display.concat(` ${input} `)
      this.setState({
        display: this.state.display.concat(` ${input} `),
        numbers: this.state.numbers.concat(parseFloat(this.state.number)),
        prevNum: this.state.number,
        prevEva: [this.state.display,input],
        evaluate: evaluate,
        number: ""
      })
    }   
  }

  operation=(type)=>{
    console.log(type)
  }
  

  render() {
    const buttons = data
    const numbers = this.state.numbers
    return (
      <>
      <Navigation />
      <Calculator 
        buttons={buttons} 
        numbers={numbers} 
        input={this.input} 
        operation={this.operation} 
        display={this.state.display} 
        number={this.state.number}
        />
    </>
    )
  }
}

export default App

