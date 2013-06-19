var showCalc;
var hidden;

/*var toggleIconIn = function(evt) {
      var target = $(evt.target);
      $('.widget').animate({"top": "-60px"}, 500);
      var hidden = true;
      console.log(hidden);
}
var toggleIconOut = function(evt){
    target = $(evt.target);
    $('.widget').animate({"top": "0px"}, 500);
    var hidden = false;
    console.log(hidden);
}*/
$(document).ready(function(){
    $('body').on("mousemove", function(event){
        console.log(event.pageY);
        console.log(hidden);
        if(event.pageY < 60  && hidden == true){
            console.log(event.pageY);
            $('.widget').animate({"top": "0px"}, 500);
            hidden = false;
        } else if(event.pageY >= 60 && hidden == false){
            console.log(event.pageY);
            $('.widget').animate({"top": "-60px"}, 500);
            hidden = true;
        }
    })
});

var toggleCalc = function(){
    var calc = $('#totalCalc');
	var widget = $('.widget');
	if (calc.css("opacity") == 0){
		calc.animate({"opacity": "1"}, 500);
		widget.animate({"margin-left": "230px", "width": "60px" ,"height": "60px"}, 500);
        widget.animate({"top": "-60px"}, 500);
        hidden = true;
        var showCalc = false;

	}else if(calc.css("opacity") == 1){
		calc.animate({"opacity": "0"}, 500);
		widget.animate({"margin-left": "-230px","width": "460px" ,"height": "460px"}, 500)
        hidden = undefined;
        var showCalc = true;
	}
    /*if (hidden === true){
        console.log("hidden");
        $('.hidden').on("mouseenter", toggleIconOut);
        var hidden = false;
    }else if(hidden === false){
        console.log("not hidden");
        $('.hidden').on("mouseleave", toggleIconIn);
        var hidden = true;
    }*/
}







/*$('.widget').on("click", console.log("click"));*/




/*------------------graphcalc JavaScript----------------*/




var graphcalc = (function(){
    var exports = {};
    function setupGraph(div){
        var canvas = $("<canvas class = 'jqCanvas' width = '400px' height = '300px'></canvas>");
        /*var domCanvas = canvas[0];
        var ctx = domCanvas.getContext('2d');*/
        var xyVal = $('<div id = "xyText"><input class = "graphInput" id = "xyVal"></input></div>');
        var div1 = $('<div id = "fxDiv"></div>');
        var div2 = $('<div id = "minMaxDiv"></div>');
        var fxInput = $('<input class = "graphInput" id = "fxInput" value="x*x"></input>');
        /*var clearPlot = $('<button class = "text" id = "plotClear">Clear</button>');*/
        var minXInput = $('<input class = "graphInput" id = "minXInput" value="-5"></input>');
        var maxXInput = $('<input class = "graphInput" id = "maxXInput" value="5"></input>');
        var plotButton = $('<button class = "text" id = "plotButton">Plot</button>');
        
        $(div1).append($('<div class = "text" id = "fx">F(x): </div>') , fxInput/*, clearPlot*/);
        $(div2).append($('<div class = "text" id = "minXText">Min X:</div>'), minXInput,$('<div class = "text" id = "maxXText">Max X:</div>'), maxXInput);
        $(div).append(canvas, xyVal, div1, div2, plotButton);
        
        plotButton.bind("click", function(){
            graph(canvas, fxInput.val(), minXInput.val(), maxXInput.val()); 
        });
    }
    exports.setupGraph = setupGraph;
    
    /*canvas: jquery object representing canvas element
      fx: string representing expression to be graphed
      minX: string representing lower bound of graph
      mixX: string representing upper bound of graph*/
      
    function graph(canvas, fx, minXString, maxXString){
        
            var ctx, tree; 
            ctx = canvas[0].getContext('2d');
        
            var fxParse = calculator.parse(fx); //calc is defined; ignore error
            var minX = parseInt(minXString, 10);
            var maxX = parseInt(maxXString, 10);
        /*catch(err){
            ctx.baseLineText = "middle";
            ctx.textAlign = "center";
            ctx.font = "20px Arial";
            ctx.fillStyle = "red";
            ctx.fillText(err, 200, 150);
        }*/
        
        var coordinateList = [];
        var pixelCoordinateList = [];
        
        /*for loop: Loops through the x coordinates, and
        appends to coordinateList a list of coordinates, 
        where coordinates is as long as canvas.width();*/
        
        for (var x = minX; x <= maxX; x+=(-minX+maxX)/canvas.width()){
            var y = calculator.evaluate(fxParse, {x: x, sin: Math.sin, cos: Math.cos, tan: Math.tan});
            var coordinates = [x, y];
            coordinateList.push(coordinates);
        }
        
        console.log("coordinate list created");
        console.log("coordinate list: " + coordinateList);
        
        /*Next obstacle: find a way to get the min element from an array*/
        var minYTerm = coordinateList[0][1];
        var maxYTerm = coordinateList[0][0];
        // for loop: var minYTerm now is the min y value
        for(var ind = 0; ind < coordinateList.length; ind++){
            console.log("min/max Y term loop running...")
            var newTerm = coordinateList[ind][1];
            minYTerm = Math.min(newTerm, minYTerm);
            maxYTerm = Math.max(newTerm, maxYTerm);
        }
        
        //minY and maxY are now defined
        console.log("minY and maxY are now defined | minY: " + minYTerm + " maxY: " + maxYTerm);
        
        /*for loop: maps (x, y) coordinates from coordinateList to pixel coordinates
          then, appends these pixel coordinates to an array pixelCoordinateList*/
        for (var px = 0; px < coordinateList.length; px++){
            
            var c = coordinateList[px];
            var pixX = canvas.width()*((c[0]-minX)/(maxX-minX));
            var pixY = canvas.height()*((maxYTerm - c[1])/(maxYTerm - minYTerm));
            var pixelCoordinates = [pixX, pixY];
            pixelCoordinateList.push(pixelCoordinates);
        }
        
        // Now we draw to the canvas for every value in pixelCoordinateList
        ctx.beginPath();
        for (var i = 0; i < pixelCoordinateList.length-1; i++){
            
            ctx.moveTo(pixelCoordinateList[i][0], pixelCoordinateList[i][1]);
            ctx.lineTo(pixelCoordinateList[i+1][0], pixelCoordinateList[i+1][1]);
            
        }
        ctx.stroke();
        // Below we will define a function that will follow the mouse and evaluate the y value at the mouse's x position
        var jqCanvas = $('.jqCanvas');
        var domCanvas = jqCanvas[0];
        ctx2 = domCanvas.getContext('2d');
        var img = ctx2.getImageData(0,0,jqCanvas.width(),jqCanvas.height());
        
        ctx2.putImageData(img, 0, 0);
        jqCanvas.on("mousemove", function(event){
            var mx = event.pageX;
            //probably will not need my
            var my = event.pageY;
            //now we reset our mx and my values so they are with respect to the canvas, not with respect to the page
            var offset = jqCanvas.offset();
            mx = mx-offset.left;
            my = my-offset.top;
            ctx2.putImageData(img, 0, 0);
            ctx2.beginPath();
            ctx2.moveTo(mx, jqCanvas.width());
            ctx2.lineTo(mx, 0);
            ctx2.strokeStyle = "black";
            ctx2.lineWidth = 1;
            ctx2.stroke();
            //the vertical line has just been drawn
            //now to evaluate the value at the mouse's x value
            var xVal = minX + (mx*(maxX-minX)/jqCanvas.width());
            var yVal = coordinateList[Math.round(mx)][1];
            console.log("("+xVal+","+yVal+")");

            $('#xyVal').val("(X, Y) = " + "(" + xVal.toFixed(4) + ", " + yVal.toFixed(4) + ")");
        })
    }
    return exports;
}());

$(document).ready(function(){
    $('.graphcalc').each(function(){
        graphcalc.setupGraph(this);
    });
});




/*---------------------appleCalc JavaScript-----------------------------*/




$(document).ready(function(){
    var input = $("#calcDisplay");
    $(".charbutton").bind("click", function(){
        /*this is what we want to append$(this).text();*/
        var currentInput = input.val();
        var newInput = currentInput + $(this).data("char");
        input.val(newInput);
    });
    $(".equals").bind("click", function(){
        var output = calculate(input.val());
        input.val(output);
    })
    $('.clearbutton').bind("click", function(){
        input.val("");
    });
    input.keyup(function(event){
        if (event.keyCode == 13){
            $(".equals").click();
        }
    });

});





/*---------------------Day 1 JavaScript-----------------------*/





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
        console.log('readterm', tokenArray);
        while(tokenArray.length > 2) {
            var num = tokenArray[0]; 
            if (tokenArray[1] == '/'){
                var newVal1 = num/tokenArray[2];
                tokenArray.splice(0, 3);
                tokenArray.splice(0, 0, newVal1);
            }else if(tokenArray[1] == '*'){
                var newVal2 = num*tokenArray[2];
                tokenArray.splice(0, 3);
                tokenArray.splice(0, 0, newVal2);
            }else {
                break;
            }
        }
        return read_operand(tokenArray);
    }
    
    
    // read_operand: looks at array of tokens, and sees if first element is a number
    function read_operand(tokenArray){
        var num = tokenArray[0];

        console.log('read_operand', tokenArray);
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
            console.log('read_operand tempVal', tempVal);
            console.log('read_operand tokenArray', tokenArray);
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
        console.log('first evaluation', tokenArray);
        if (tokenArray.length === 0){
            throw "missing operand";
        }
        /*function readTerm(operator){
            
        }*/
        
        var value = readTerm(tokenArray);
        
        while (tokenArray.length !== 0 && tokenArray[0] !== ")"){
            var operator = tokenArray[0];
            console.log('evaluation tokenArray', tokenArray);
            console.log(operator);
            tokenArray.shift();
            if (operator != "+" && operator != "-" && operator!="/" && operator!="*"){
                throw "unrecognized operator";
            }else if(tokenArray.length === 0){
                throw "missing operand";
            }
            var temp = readTerm(tokenArray);
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
   
   var thisDebug = new debug('Malcom');
   thisDebug('test: ', {test: 'hi'});
});

function debug(name) {
    var self = this;
    this.name = name;
    return function() {
        var first = arguments[0];
        if (typeof arguments[0] === 'string') {
            arguments[0] = self.name + ': ' + first;
        }
        else {
            arguments.splice(0,0,self.name + ': ');
        }
        console.log.apply(console, arguments);
    }
}