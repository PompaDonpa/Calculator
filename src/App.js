import 'css-doodle'
import './App.css'
import React from 'react'
import Navigation from './components/Navigation'
import Calculator from './components/Calculator'
import formatter from './helpers/formatter'

import data from './helpers/data'
import { create, all } from 'mathjs'

const config = { }
const math = create(all, config)

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: [],
      evaluate: [],
      numbers:[],
      result: 0
    }

    this.isClicked = this.isClicked.bind(this)
  }
  
  isClicked(value,className,number) {
    if (isNaN(number)) {
      const isClass = className.split(' ')
      //console.log(isClass)
      switch(isClass[1]){
                                      //    27 n
        case 'result': {              // 9 * 3 = 27
                        const doMath = math.evaluate(this.state.evaluate.join('').trim());
                        const numArray = String(doMath).split('').map((doMath)=>{return Number(doMath)});
                        this.setState({
                            numbers:[formatter(numArray)],
                            result: doMath,
                            evaluate:[...this.state.evaluate,' = ',this.state.result],
                            });
                        break;
                        }
        case 'ac' : {
                        this.setState({
                            display: [],
                            evaluate: [],
                            numbers:[],
                            result: 0 
                        });
                        break;
                    }
        case 'neg' : {

                        const doMath = math.evaluate(this.state.evaluate.join('').trim().concat("*(-1)"));
                        console.log('negative')
                        console.log(doMath)
                        //const numArray = String(doMath).split('').map((doMath)=>{return Number(doMath)});
                        this.setState({
                        numbers:[doMath],
                        evaluate:[doMath],
                        result: doMath
                        });break;
                  }  

          case 'sq' : {

                    const doMath = math.evaluate(this.state.evaluate.join('').trim().concat("^2"));
                    console.log('square')
                    console.log(doMath)
                    //const numArray = String(doMath).split('').map((doMath)=>{return Number(doMath)});
                    this.setState({
                    numbers:[doMath],
                    evaluate:[doMath],
                    result: doMath
                    });break;
              } 
          case 'sqrt' : {

                const doMath = math.sqrt(this.state.result);
                console.log('squarerRoot')
                console.log(doMath)
                //const numArray = String(doMath).split('').map((doMath)=>{return Number(doMath)});
                this.setState({
                numbers:[doMath],
                evaluate:[doMath],
                result: doMath
                });break;
          }   
          case 'percentage' : {

            const doMath = math.multiply(this.state.result,0.1);
            console.log('Percentage')
            console.log(doMath)
            //const numArray = String(doMath).split('').map((doMath)=>{return Number(doMath)});
            this.setState({
            numbers:[doMath],
            evaluate:[doMath],
            result: doMath
            });break;
      } 
      case 'pi' : {

        this.setState({
        numbers:[math.pi],
        evaluate:[math.pi],
        result: math.pi
        });break;
  } 
  case 'pow' : {

    this.setState({
      numbers:[],
      evaluate:[...this.state.evaluate,' ',value,' ']
      });
      break;
} 

        default :   {
                        this.setState({
                        numbers:[],
                        evaluate:[...this.state.evaluate,' ',value,' ']
                        });
                        break;
                    }       
    }



    }else{
      this.setState({
        numbers:[...this.state.numbers,number],
        evaluate:[...this.state.evaluate,number],
        result: number
      })
    }
  }

  render() {
    const skeleton = data
    const numbers = this.state.numbers
    const evaluate  = this.state.evaluate
    const format = formatter
    return (
      <>
      <Navigation />
      <Calculator skeleton={skeleton} isClicked={this.isClicked} numbers={numbers} evaluate={evaluate} format={format}/>
    </>
    )
  }
}

export default App

