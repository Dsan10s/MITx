//data = data[3].map(function(d){return d.y;})
var color = d3.scale.ordinal().range(["#000000", "#492d2d", "#7f2424", "#bf0000"]);

var outerWidth = 500;
var outerHeight = 500;

var margin = {top: 20, right: 20, bottom: 20, left: 20};

var chartWidth = outerWidth - margin.left - margin.right;
var chartHeight = outerHeight - margin.top - margin.bottom;

var stack = d3.layout.stack();
//var stack = d3.layout.partition(); //left it as stack for simplicity
var stackedData = stack(data);

var yStackMax = d3.max(stackedData, function(layer){return d3.max(layer, function(d){return d.y + d.y0;});});

var yGroupMax = d3.max(stackedData, function(layer){return d3.max(layer, function(d){return d.y;});});

var xScale = d3.scale.ordinal().domain(d3.range(data[0].length)).rangeBands([0, chartWidth]);
var yScale = d3.scale.linear().domain([0, yStackMax]).range([chartHeight, 0]);


var grouped = false;

var topIndex = 3;


var chart = d3
.select(".chart-container") // equivalent to jQuery $("") selector
.append("svg") // Here we are appending divs to what we selected
.attr("class", "chart").attr("height", outerHeight).attr("width",outerWidth)
.append("g") // group element
.attr("transform", "translate(" + margin.left + "," + margin.top +")")
.on("click", function(){ grouped ? goStacked() : goGrouped();});
//.on("click", function(){ grouped ? shrinkWindow() : expandWindow();});
 // Same as jQuery

chart.selectAll("line").data(yScale.ticks(10)).enter().append("line")
.attr("x1", 0).attr("x2", chartWidth).attr("y1", yScale).attr("y2", yScale);

chart.selectAll("text").data(yScale.ticks(10)).enter().append("text")
.attr("class", "yScaleLabel")
.attr("x", 0)
.attr("y", yScale)
.attr("dx", -margin.left/8)
.attr("dy", "0.3em")
.attr("text-anchor", "end")
.text(String);

var layerGroups = chart.selectAll(".layer").data(stackedData).enter()
.append("g")
.attr("class", "layer");

for (var i; i<=3; i++){
	chart.selectAll(".layer").attr("class", "layer" + i);
}

var rects = layerGroups.selectAll("rect").data(function(d){ return d;}).enter().append("rect")
.attr("x", function(d, i) {return xScale(i);})
.attr("y", function(d) {return yScale(d.y0+d.y);})
.attr("width", xScale.rangeBand)
.attr("height", function(d){return yScale(d.y0) - yScale(d.y0 + d.y);})
.attr("class", "rect")
.style("fill", function(d, i, j){return color(j);})
//.attr("fill", function (d, i, j) { return "rgb(" + Math.round(colorScale(j) / 3 * 2) + "," + Math.round(colorScale(j) / 3) + "," + colorScale(j) + ")"; })
.on("click", topStackLeave());


function goGrouped(){
	yScale.domain([0, yGroupMax]);

	rects.transition()
	.duration(1000)
	.delay(function(d, i){return i * 40})
	.attr("x", function(d, i, j){return xScale(i) + xScale.rangeBand()/stackedData.length*j;})
	.attr("width", xScale.rangeBand()/stackedData.length)

	.transition()
	.attr("y", function(d){ return yScale(d.y); })
	.attr("height", function(d){ return chartHeight - yScale(d.y);});

	grouped = true;
}

function goStacked(){
	yScale.domain([0, yStackMax]);

	rects.transition()
	.duration(1000)
	.delay(function(d, i){return i * 40})
	.attr("y", function(d){ return yScale(d.y0 + d.y); })
	.attr("height", function(d){ return yScale(d.y0) - yScale(d.y0 + d.y);})

	.transition()
	.attr("x", function(d, i){return xScale(i);})
	.attr("width", xScale.rangeBand());
	

	grouped = false;
}

function shrinkWindow(){
	outerWidth = 2000;
	outerHeight = 2000;
	chart.transition()
	.duration(1000)
	.attr("height", 2000)
	.attr("width", 2000);

	console.log("Window shrunk");
}
function expandWindow(){
	outerWidth = 500;
	outerHeight = 500;
	chart.transition()
	.duration(1000)
	.attr("height", 500)
	.attr("width", 500);
	console.log("Window expanded")
}

function fade(){
	if (clicked == false){
		var fadeOut = layerGroups.selectAll("rect").transition().duration(1000).style("opacity", 0);
		clicked = true;
	}else{
		var fadeIn = layerGroups.selectAll("rect").transition().duration(1000).style("opacity", 1);
		clicked = false;
	} 
	
}

function topStackLeave(){
	//d3.select(layerGroups[0][topIndex]).addClass("topRects");

	var topRects = layerGroups.select(".topRects")
	if (grouped){
		yScale.domain([0, yGroupMax])
		topRects.transition().duration(1000)
		.delay(function(d, i){return i * 20})
		.attr("y", function(d){return d.y + chartHeight});
	}else{
		yScale.domain([0, yStackMax])
		topRects.transition().duration(1000)
		.delay(function(d, i){return i * 20})
		.attr("y", function(d){return d.y + chartHeight});
	}

	topIndex--;
}

var newData = [{"y": 0}, {"y": 1}, {"y": 9}, {"y": 3}, {"y": 4}];

var color = d3.scale.ordinal().range(["#000000", "#492d2d", "#7f2424", "#bf0000", "#ff0000", "#0000ff"]);

var width = 940;
var height = 50;

var stack = d3.layout.stack();

var stackedData = stack(newData);

//var yStackMax = d3.max(stackedData, function(layer){ return d3.max(layer, function(d){return d.y + d.y0; })});

var xStackMax = 20;

var xScale = d3.scale.linear().domain([0, xStackMax]).range([0, width]);

var chart = d3.select(".progress-bar")
.append("svg")
.attr("class", "chart")
.attr("height", height)
.attr("width", width)
.append("g");

var layerGroups = chart.selectAll(".layer").data(stackedData).enter()
.append("g")
.attr("class", "layer");

var rects = layerGroups.selectAll("rect").data(function(d){ return d; }).enter().append("rect")
.attr("x", function(d){ return xScale(d.y0 + d.y);})
.attr("y", height)
.attr("class", "rect")
.style("fill", function(d, i, j){return color(j);});

// chart.selectAll("rect") //We are selected all the divs in chart (THEY DON'T EXIST YET BUT THAT'S OK)
// .data(data) //takes all the data from our var data
// .enter() //enter = nodes that aren't there yet
// .append("rect")
// .attr("x", function(d, i){return xScale(i);})
// .attr("y", yScale)
// .attr("width", xScale.rangeBand())
// .attr("height", function(d){return chartHeight - yScale(d);});

/*chart.selectAll(".barLabel").data(data).enter().append("text")
.attr("class", "barLabel")
.attr("y", function(d){return yScale(d) + margin.top/4;})
.attr("x", function(d, i){ return xScale(i) + xScale.rangeBand()/2;})
.attr("dy", "0.7em").attr("text-anchor", "middle")
.text(function(d){ return d;});
*/
