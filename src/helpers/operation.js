// I need to go throu all these steps in order to return an array that contains

// Array[0] : what expression is going to be evaluated type string
// Array[1] : if true, evaluates inmediately. i.e. once pi button is clicked or result button is clicked
// Array[2] : true if the button clicked was Delete, that helps to set values again in App state using prevValues.
// Array[3] : if true, resets everything. Set to true when AC is clicked, or '=' was clicked with out any value to calculate.

// I can't really break it down in small pieces this code is synchronous. Otherwise it breaks.

const operation = ( input, category, tempNumber, tempPrevEva, tempPrevRes, tempPrevNum )=>{
    
    let casePrevRes   = (tempPrevRes ==="" && tempNumber ==="") ? "0" : tempPrevRes
    let    casePi     = (tempPrevRes ==="") ? tempNumber : tempPrevRes
    let lastOperation = []
    let  negative2nd  = 0
    let   doubleNeg   = ""
    let   negative    = 0
    let   positive    = 0
    let    toEval     = []
    let     num2      = []
    let     len       = 0

// This section checks if Enter was clicked. If it was, then reset the state
    if(tempNumber === "" && tempPrevNum === "" && tempPrevRes === "" && category === "result"){
        toEval = ["",false,false,true]
        return toEval
    }


// This section checks if we have exponential in prevNumber either positive or negative, if true then manage it accordingly.
    if(tempPrevRes !== "" || category === "delete" || category === "result"){
        lastOperation = tempPrevEva.split('').filter(ele => ele !== " ")
        let count = 0
        lastOperation.forEach((ele,i)=>{
            if(!parseInt(ele) && count === 0){
                if((ele !== "0" ) && (ele !== "." ) && (ele !== "e" )){
                    if((lastOperation.includes("e") && ele === "+")||(lastOperation.includes("e") && ele === "-")){
                        positive = 1
                        negative = 1
                    }
                    if((positive === 1)||(negative === 1)){
                        positive = 0
                        negative = 0
                    }else{
                        count = 1
                        num2 = []
                        num2.push(ele)
                    }

                }
            }else{
                num2.push(ele)
            }    

        })

// This section checks if the expression to be evaluated is recurring substractions, and modify how it should be evaluated
        negative2nd = 0
        num2.forEach(n=>{
            
            if(n === "-"){
                negative2nd += 1    
            }
            if(negative2nd === 2){
                num2=[]
                num2.push(n)
                negative2nd +=1
            }else if(negative2nd === 3){
                num2.push(n)
            }
        })
    }
    let deleted = lastOperation.splice(0,lastOperation.length-1).join("")
 
    if(num2[0]==="-"){
        doubleNeg = num2.splice(1,num2.length).join("")
    }else if(negative2nd !== 0){
        doubleNeg = num2.splice(5,num2.length).join("")
        num2[0]=""
    }else{
        doubleNeg = (negative2nd === 0 ) ? 0 : num2.splice(1,num2.length).join("")
    }

// This section prevents the app to crash if the user to clicks 'result' '=' multiple times
    if(tempNumber !== "" && tempPrevNum === "" && casePrevRes === "" && category ==="result"){
        toEval = [`${tempNumber}*1`,false,false,true]
        return toEval
    }

//  len is calculated here after all the filters were applied to lastOperation, for further logic down the line.
    len = num2.length


// This section compares what category was clicked and returns an array to be evaluated on App.   
    if(category === "geo"){
        switch(input){
            case "sin" : toEval[0] = (tempNumber === "") ? `sin(0 deg)` :`sin(${tempNumber} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "cos" : toEval[0] = (tempNumber === "") ? `cos(0 deg)`: `cos(${tempNumber} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            case "tan" : toEval[0] = (tempNumber === "") ? `tan(0 deg)` : `tan(${tempNumber} deg)`;
                         toEval[1] = true ;
                         toEval[2] = false ;
                         toEval[3] = false;
                         break;
            default: break;
        }
    }else if(category === "operator"){

        switch(input){
            case "/" :  toEval[0] = `${tempNumber} /`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "*" :  toEval[0] = `${tempNumber} *`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "-" :  toEval[0] = `${tempNumber} -`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            case "+" :  toEval[0] = `${tempNumber} +`;
                        toEval[1] = false ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;
            default: break;
        }

    }


    switch (category){

        case "square": toEval[0] = (tempNumber === "") ? `${casePrevRes}^2`: `${tempNumber}^2`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pow":    toEval[0] = (tempNumber === "") ? `${casePrevRes}` : `${tempNumber}^`;   
                       toEval[1] = false ;   
                       toEval[2] = false ;   
                       toEval[3] = false;   
                       break;


        case "sqrt":   toEval[0] = (tempNumber === "") ? `${casePrevRes}^(1/2)` : `${tempNumber}^(1/2)`; 
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "pi":     toEval[0] = (tempNumber === "") ? `pi`: `${casePi}*pi`;
                       toEval[1] = true ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "exp":    toEval[0] = `${tempNumber}*(`;
                       toEval[1] = false ;
                       toEval[2] = false ;
                       toEval[3] = false;
                       break;

        case "factorial": toEval[0] = (tempNumber === "") ? `${casePrevRes}!` :  `${tempNumber}!`;
                          toEval[1] = true ;
                          toEval[2] = false ;
                          toEval[3] = false;
                          break;

        case "percent": toEval[0] = (tempNumber === "") ? `${casePrevRes}*(1/100)` :  `${tempNumber}*(1/100)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "allClear": toEval[0] = "";
                         toEval[1] = false ;
                         toEval[2] = false ;
                         toEval[3] = true;
                         break;

        case "neg":     toEval[0] = (tempNumber === "") ? `${casePrevRes}*(-1)` :  `${tempNumber}*(-1)`;
                        toEval[1] = true ;
                        toEval[2] = false ;
                        toEval[3] = false;
                        break;

        case "delete":  toEval[0] = `${deleted}`
                        toEval[1] = false ;
                        toEval[2] = true ;
                        toEval[3] = false;
                        break;

        case "result": 
                        if(tempPrevRes !== '' && num2[0] !== '-'){ 
                            toEval[0] = `${tempPrevRes} ${num2[len-2]} ${num2[len-1]}` 
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                         }else if(tempPrevRes !== ""){
                            toEval[0] = (len === 2) ? `${lastOperation[len-2]} ${lastOperation[len-1]}` 
                                                    : `${tempPrevRes} ${num2[0]} ${doubleNeg}`
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }else{
                            toEval[0] = `${tempPrevEva}`;
                            toEval[1] = true ;
                            toEval[2] = false ;
                            toEval[3] = false;
                            break;
                        }
                      
        default: break;     

    }
return toEval
}

module.exports =  operation