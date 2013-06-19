var data = [4, 8, 8, 15, 16, 23, 42];

var outerWidth = 300;
var outerHeight = 300;

var margin = {top: 20, right: 20, bottom: 20, left: 20};

var chartWidth = outerWidth - margin.left - margin.right;
var chartHeight = outerHeight - margin.top - margin.bottom;

var xScale = d3.scale.ordinal().domain(d3.keys(data)).rangeBands([0, chartWidth]);
var yScale = d3.scale.linear().domain([0, d3.max(data)]).range([chartHeight, 0]);



var chart = d3
.select(".chart-container") // equivalent to jQuery $("") selector
.append("svg") // Here we are appending divs to what we selected
.attr("class", "chart").attr("height", outerHeight).attr("width",outerWidth)
.append("g") // group element
.attr("transform", "translate(" + margin.left + "," + margin.top +")"); // Same as jQuery

chart.selectAll("line").data(yScale.ticks(10)).enter().append("line")
.attr("x1", 0).attr("x2", chartWidth).attr("y1", yScale).attr("y2", yScale)

chart.selectAll("text").data(yScale.ticks(10)).enter().append("text")
.attr("class", "yScaleLabel")
.attr("x", 0)
.attr("y", yScale)
.attr("dx", -margin.left/8)
.attr("dy", "0.3em")
.attr("text-anchor", "end")
.text(String)

chart
.selectAll("rect") //We are selected all the divs in chart (THEY DON'T EXIST YET BUT THAT'S OK)
.data(data) //takes all the data from our var data
.enter() //enter = nodes that aren't there yet
.append("rect")
.attr("x", function(d, i){return xScale(i);})
.attr("y", yScale)
.attr("width", xScale.rangeBand())
.attr("height", function(d){return chartHeight - yScale(d);});

chart.selectAll(".barLabel").data(data).enter().append("text")
.attr("class", "barLabel")
.attr("y", function(d){return yScale(d) + margin.top/4;})
.attr("x", function(d, i){ return xScale(i) + xScale.rangeBand()/2;})
.attr("dy", "0.7em").attr("text-anchor", "middle")
.text(function(d){ return d;});

