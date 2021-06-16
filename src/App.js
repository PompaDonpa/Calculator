// Components
import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Calculator from './components/Calculator'

// UX / UI
import { ToastContainer,toast } from "react-toastify";
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { create, all } from 'mathjs'
import './App.css'
import 'css-doodle'


// I'm simulating a backend API response from helpers, 
// because I depend on the helper functions. And I don't
// understand what is a public field
const operation = require('./helpers/operation')
// Configuration for MathJS
const config = { }
const math = create(all, config)


// Main Function
const App = () => {

  // Set Hooks
  const [ hasError, sethasError ] = useState([0])
  const [ evaluate, setEvaluate ] = useState("")
  const  [ deleted, setDeleted ]  = useState(false)
  const  [ prevNum, setPrevNum ]  = useState("")
  const  [ prevEva, setPrevEva ]  = useState("")
  const  [ prevRes, setPrevRes ]  = useState("")
  const  [ display, setDisplay ]  = useState("")
  const   [ result, setResult ]   = useState("")
  const   [ number, setNumber ]   = useState("")

  // Function reset AC
  const reset = () => {
    setEvaluate("")
    setDeleted("")
    setPrevNum("")
    setPrevEva("")
    setPrevRes("")
    setDisplay("")
    setResult("")
    setNumber("")
  }

  // Calculator Click Event Manager
  const userInput =(input, category)=>{

    if(category === "number"){
      if(deleted){
        setNumber(number+input)
        setDisplay(number+input)
        setEvaluate(`${prevEva} ${input}`)
        setPrevEva(`${evaluate} ${input}`)
        setDeleted(false)
      }else{

        setNumber(number+input)
        setDisplay(number+input)
        setEvaluate(prevEva+input)
        setPrevEva(evaluate+input)
      }

    }else{
      
      const tempEvaluate = (`${prevEva} ${input} `)
      const tempNumber   = number || prevRes
      const tempPrevEva  = prevEva
      const tempPrevRes  = prevRes
      const tempPrevNum  = prevNum
      

      let expression = operation(input,category,tempNumber,tempPrevEva,tempPrevRes,tempPrevNum)

      if(expression[3]){
        reset()
        }else if(!expression[1] && !expression[2]){
          setDisplay(`${display} ${input}`)
          setPrevNum(number)
          setPrevEva(tempEvaluate)
          setEvaluate(tempEvaluate)
          setNumber("")
        }else if(expression[2]){
           setDisplay(tempPrevRes)
           setPrevNum(number)
           setEvaluate(expression[0])
           setPrevEva(expression[0])
           setNumber("")
           setPrevRes(prevRes)
           setResult("")
           setDeleted(true)
        }else{
           
        try{
          let tempResult = math.evaluate(expression[0])
          setDisplay(tempResult.toString())
          setPrevNum(number)
          setPrevEva(expression[0])
          setEvaluate(expression[0])
          setNumber("")
          setPrevRes(tempResult.toString())
          setResult(tempResult.toString())
        }catch(e){ sethasError([1]) }         
      }     
    }   
  }
  
  useEffect(()=>{ 
    
    return () =>{ 
      toast.error("Typo Error!", {
        position: toast.POSITION.BOTTOM_LEFT,className: 'boldMessage'
    });
      toast.warning(`Please Consider to Clear All`, {
        position: toast.POSITION.UPPER_RIGTH, className: 'boldMessage'
    });
  }},[hasError])


  return ( 
  <>
      <Navigation />
      <Calculator 
        number = {number}
        userInput={userInput} 
        display={display}
        evaluate={evaluate}
        prevEva={prevEva}
        prevNum={prevNum}
        prevRes={prevRes}
        result={result}
        deleted={deleted}/>

      <ToastContainer transition={Zoom} autoClose={2000}/>
  </>
  )

}

export default App



