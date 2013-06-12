var graphcalc = (function(){
    var exports = {};
    function setupGraph(div){
        var canvas = $("<canvas width = '400px' height = '300px'></canvas>");
        /*var domCanvas = canvas[0];
        var ctx = domCanvas.getContext('2d');*/

        var div1 = $('<div id = "fxDiv"></div>');
        var div2 = $('<div id = "minMaxDiv"></div>');
        var fxInput = $('<input id = "fxInput"></input>');
        var minXInput = $('<input id = "minXInput"></input>');
        var maxXInput = $('<input id = "maxXInput"></input>');
        var plotButton = $('<button id = "plotButton">Plot</button>');
        
        $(div1).append("f(x): ", fxInput);
        $(div2).append("min X: ", minXInput,"max X: ", maxXInput);
        $(div).append(canvas, div1, div2, plotButton);
        
        plotButton.bind("click", function(){
            graph(canvas, fxInput.val(), minXInput.val(), maxXInput.val()); 
        });
    }
    exports.setupGraph = setupGraph;
    function graph(canvas, fx, minX, maxX){
            var ctx, tree; 
            ctx = canvas[0].getContext('2d');
        try{
            tree = calculator.parse(fx); //calc is defined; ignore error
        }catch(err){
            ctx.baseLineText = "middle";
            ctx.textAlign = "center";
            ctx.font = "25px Arial";
            ctx.fillStyle = "red";
            ctx.fillText(err, 200, 150);
        }
        
        
    }
    return exports;
}());

$(document).ready(function(){
    $('.graphcalc').each(function(){
        graphcalc.setupGraph(this);
    });
});