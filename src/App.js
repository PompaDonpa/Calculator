import 'css-doodle'
import './App.css'
import React from 'react'
import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
import formatter from './helpers/formatter'
import data from './helpers/data'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 0,
      result: 0,
      numbers:[]
    }
    this.isClicked = this.isClicked.bind(this)
  }
  
  isClicked(value,className,number){
    if(isNaN(number)){
      
    }else{
      this.setState({
        numbers:[...this.state.numbers,number]
      })
    }
  }

  render() {
    const skeleton = data
    const numbers = this.state.numbers
    const format = formatter
    return (
      <>
      <Navigation />
      <Calculator skeleton={skeleton} isClicked={this.isClicked} numbers={numbers} format={format}/>
    </>
    )
  }
}

export default App

