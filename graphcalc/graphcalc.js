var graphcalc = (function(){
    var exports = {};
    function setupGraph(div){
        var canvas = $("<canvas class = 'jqCanvas' width = '400px' height = '300px'></canvas>");
        /*var domCanvas = canvas[0];
        var ctx = domCanvas.getContext('2d');*/

        var div1 = $('<div id = "fxDiv"></div>');
        var div2 = $('<div id = "minMaxDiv"></div>');
        var fxInput = $('<input id = "fxInput" value="x*x"></input>');
        var minXInput = $('<input id = "minXInput" value="-5"></input>');
        var maxXInput = $('<input id = "maxXInput" value="5"></input>');
        var plotButton = $('<button id = "plotButton">Plot</button>');
        
        $(div1).append("f(x): ", fxInput);
        $(div2).append("Min X: ", minXInput,"Max X: ", maxXInput);
        $(div).append(canvas, div1, div2, plotButton);
        
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
            var y = calculator.evaluate(fxParse, {x: x});
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
        var ctx2 = domCanvas.getContext('2d');
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
            ctx2.lineWdith = 1;
            ctx2.stroke();
            //the vertical line has just been drawn
            //now to evaluate the value at the mouse's x value
            var xVal = minX + (mx*(maxX-minX)/jqCanvas.width());
            var yVal = coordinateList[mx][1];
            console.log("("+xVal+","+yVal+")");

            $('.x').html("X: " + xVal);
            $('.y').html("Y: " + yVal);
        })
    }
    return exports;
}());

$(document).ready(function(){
    $('.graphcalc').each(function(){
        graphcalc.setupGraph(this);
    });
});