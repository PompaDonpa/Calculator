const operation=(input,type,number,prevEva, prevRes, prevNum)=>{
    
    let casePi = (prevRes ==="") ? number : prevRes
    // let casePi = (prevNum ==="") ? number : prevNum

    let lastOperation = []
    let toEval = []
    let len = 0
    const whichType = type
    

    console.log(`This is operation prevRes: ${prevRes}`)

    if(prevRes != "" || type === "delete"){
        lastOperation = prevEva.split(' ')
        len = lastOperation.length
        console.log(`LAST OPERATION: ${lastOperation}`)
    }

    if(number === "" && prevNum === "" && prevRes === ""){
        toEval = [input,false,false,false]
        return toEval
    }

    if(type === "geo"){
        switch(input){
            case "sin" : toEval[0] = `sin(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "cos" : toEval[0] = `cos(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "tan" : toEval[0] = `tan(${number} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            default: break;
        }
    }else if(type === "operator"){

        switch(input){
            case "/" :  toEval[0] = `${number} /`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "*" :  toEval[0] = `${number} *`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "-" :  toEval[0] = `${number} -`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "+" :  toEval[0] = `${number} +`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            default: break;
        }

    }


    switch (whichType){

        case "square": toEval[0] = (number === "") ? `${prevRes}^2` : `${number}^2`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pow":    toEval[0] = `${number}^`;
                       toEval[1] = false ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "sqrt":   toEval[0] = (number === "") ? `${prevRes}^(1/2)` : `${number}^(1/2)`; 
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pi":     toEval[0] = (number === "") ? `pi`: `${casePi}*pi`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "exp":    toEval[0] = `${number}*(`;
                       toEval[1] = false ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "factorial": toEval[0] = (number === "") ? `${prevRes}!` :  `${number}!`;
                          toEval[1] = true ;
                          toEval[2] = false ;
                          toEval[3] = false;
                          break;

        case "percent": toEval[0] = (number === "") ? `${prevRes}*(1/100)` :  `${number}*(1/100)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "allClear": toEval[0] = "";
                         toEval[1] = false ;
                         toEval[2] = false ;
                         toEval[3] = true;
                         break;

        case "neg":     toEval[0] = (number === "") ? `${prevRes}*(-1)` :  `${number}*(-1)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "delete":  toEval[0] = `${lastOperation.splice(0,len-1).join(" ")}`
                        toEval[1] = false ;
                        toEval[2] = true ;
                        toEval[3] = false;
                        break;

        case "result": 
                        if(prevRes != ""){
                            toEval[0] = `${prevRes} ${lastOperation[len-2]} ${lastOperation[len-1]}`
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }else{
                            toEval[0] = `${prevEva}`;
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }
                      
        default: break;     

    }
console.log(`toEval : ${toEval}`)
return toEval

}

export default operation