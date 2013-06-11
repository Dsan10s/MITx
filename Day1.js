//we need to get the tokens from the input
//tokens will be of type:
//  numbers
//  operators
//  (, )
function calculate(text){
    var pattern = /\d*\.\d+|\d+|\+|\-|\*|\/|\(|\)/g;
    var tokens = text.match(pattern);
    var tokenArray1 =  JSON.stringify(tokens);
    
    
    /* What I attempted:
        I took the parenthesis check from read_operand and inserted it
        into readTerm, thinking it would be a good idea to make sure that
        parenthesis get precedence over * or /
        
        The * and / work, however parenthesis are now screwed up
    */
    function readTerm(tokenArray){
         for (var x = 0; x < tokens.length-2; x++){
            var num = tokenArray[x]; 
            if (tokenArray[x+1] == '/'){
                var newVal1 = num/tokenArray[x+2];
                tokenArray.splice(x, 3);
                tokenArray.splice(x, 0, newVal1);
            }else if(tokenArray[x+1] == '*'){
                var newVal2 = num*tokenArray[x+2];
                tokenArray.splice(x, 3);
                tokenArray.splice(x, 0, newVal2);
            }    
        }
        return read_operand(tokenArray);
    }
    
    
    // read_operand: looks at array of tokens, and sees if first element is a number
    function read_operand(tokenArray){
        var num = tokenArray[0];
        
        //checks if the current element is a minus sign, and then creates a negative if true
        if (num == "-"){
            var numToNeg = tokenArray[1];
            tokenArray.shift(); tokenArray.shift();
            return -numToNeg;
        }
        
        tokenArray.shift();
        //checks if parenthesis were used, and makes an element out of what lies between the parenthesis if true
        if (num == "("){
            var tempVal = evaluation(tokenArray);
            if(tokenArray[0] == ")"){
                tokenArray.shift();
                console.log(tempVal);
                return tempVal;
            }else{
                throw "Missing parenthesis";
            }
        }
        
        var convertedNum = parseFloat(num, 10);
        if (isNaN(convertedNum) === true){
            throw "number expected";
        }else{
            return convertedNum;
        }
    }
    // evaluation: actually does the math
    function evaluation(tokenArray){
        if (tokenArray.length === 0){
            throw "missing operand";
        }
        /*function readTerm(operator){
            
        }*/
        
        var value = readTerm(tokenArray);
        
        while (tokenArray.length !== 0 && tokenArray[0] !== ")"){
            var operator = tokenArray[0];
            console.log(operator);
            tokenArray.shift();
            if (operator != "+" && operator != "-" && operator!="/" && operator!="*"){
                throw "unrecognized operator";
            }else if(tokenArray.length === 0){
                throw "missing operand";
            }
            var temp = read_operand(tokenArray);
            //readTerm(operator)
            if(operator === "+"){
                value = value + temp;
            }else if(operator === "-"){
                value = value - temp;
            }else if(operator === "/"){
                value = value / temp;
            }else if(operator === "*"){
                value = value * temp;
            }
        }
        return value;
    }  
    try{
        var val = evaluation(tokens);
        if(tokens.length !== 0){
            throw "ill-formed expression";
        }
        return String(val);
    }catch(err){
        return err;
    }    
}

function setup_calc(div){
    var input = $('<input id="input1"></input>', {type: "text", size: 50});
    var output = $('<div id = "output"></div>');
    var button = $('<button id = "button1">Calculate</button>');
    button.bind("click", function(){
       output.text(String(calculate(input.val()))); 
    });
    $("#input1").keyup(function(event){
        if(event.keyCode == 13){
            $("#button1").click();
        }
    });
    
    $(div).append(input, button, output);
}

$(document).ready(function(){
   $('.calculator').each(function(){
       // 'this' refers to the <div> with class calculator
       setup_calc(this);
       
   }); 
});