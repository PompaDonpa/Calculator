import { isInaccessible } from "@testing-library/dom";

const resolver =(className) =>{
    const isClass = className.split(' ')
    //console.log(isClass)
    switch(isClass[1]){

      case 'result': {
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


export default resolver


// =====================================


if(className.includes('result')){
    const doMath = math.evaluate(this.state.evaluate.join('').trim())
    const numArray = String(doMath).split('').map((doMath)=>{
      return Number(doMath)
    })

    this.setState({
      numbers:[formatter(numArray)],
      evaluate:[...this.state.evaluate,' = ',doMath]
    })
  }else{
  // console.log(this.state.numbers)
  // const nums = parseInt(this.state.numbers.join(''))
  // console.log(nums)
  this.setState({
    numbers:[],
    evaluate:[...this.state.evaluate,' ',value,' ']
  })
}