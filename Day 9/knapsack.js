var totalKnapsack = (function(){
	/*var allItems = [
		// matrix 1
		[{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/clock.png"}, 
		{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/painting.png"}, 
		{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/radio.png"}, 
		{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/vase.png"}, 
		{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/book.png"}, 
		{url: "http://web.mit.edu/6.mitx/www/demo/knapsack/computer.png"}
		], 
		[
		]
	]*/
	function EventHandler(){
		var handlers = {};
		function on(eventString, callback){
			var cblist = handlers[eventString];

			if(cblist === undefined){
				cblist = [];
				handlers[eventString] = cblist;
			}
			handlers[eventString].push(callback);
		}
		function trigger(eventString, data){
			var cblist = handlers[eventString];

			if (cblist !== undefined){
				for (var i = 0; i < cblist.length; i++){
					cblist[i](data);
				}
			}
		}
		return {on: on, trigger: trigger}
	}
	function Model(){
		function moveItem(){
			console.log("moveitem called")
			if($(this, '#items').length == 1){
				$(this).remove();
				$(".knapsack").append($(this));
			}else if($(this, ".knapsack").length == 1){
				$(this).remove();
				$(".items").append($(this));
			}
		}
		return {moveItem: moveItem}
	}
	function Controller(model){
		function toggleItem(){
			model.moveItem();
			console.log("Item has been clicked");
		}
		return {toggleItem: toggleItem}
	}
	function View(div, model, controller){

	}

	// We will use model view controller setup
	function setup(div){
		var exports = {};
		var model = Model();
		var controller = Controller(model);
		var view1 = View(div, model, controller); // These two views will respectively reperesent
		var view2 = View(div, model, controller); // the items in the house and the knapsack



		//var color = d3.scale.category20();

		function fillArray(){
			return {
				port: "port", 
			}
		}
		var data = [];
		$('.item').on("hover", function(){
				target = $(this);
				target.tooltip("show");
			});
		$('.item').on("click", function(){
			/*target = $(this);
			if($(this, '#items').length == 1){
				console.log("item removed from house");
				console.log(target);
				$(target).remove();
				$("#knapsack").append($(this));
			}else{
				console.log("item removed from knapsack");
				$(target).remove();
				$("#items").append($(this));
			}
		});*/
			//function(){
			target = $(this);
			var clickedID = target.attr("id");
			
			
			

			/*if (target.css("opacity") == 0){
				console.log(target);
				target.animate({"opacity": 1, "height": ($(this).height()*1.1), "width": ($(this).width()*1.1)}, 250);
				target.animate({"height": ($(this).height()), "width": ($(this).width())}, 250);

			}else */

			if(target.hasClass("house")){
				if(target.css("opacity") == 1){
					console.log("Moving to knapsack");

					weight = parseInt($(".weight").html());
					remainingWeight = parseInt($(".remaining").html());
					value = parseInt($(".value").html());

					if(weight + parseInt(target.attr("data-weight")) > 20){
						$("#warning").animate({"top": "50%"}, 1);
						$('#warning').animate({"opacity": 1}, 500);
						$('#warning').animate({"opacity": 1}, 2000);
						$('#warning').animate({"opacity": 0}, 500);
						$("#warning").animate({"top": 0}, 1);

					}else{
						target.animate({"opacity": 0, "height": ($(this).height()*0.80), "width": ($(this).width()*0.80)}, 250);
						target.animate({"height": ($(this).height()), "width": ($(this).width())}, 1);
						var otherItem = $("#knapsack" + " " + "#" + clickedID);
						otherItem.animate({"opacity": 1, "height": ($(this).height()*1.1), "width": ($(this).width()*1.1)}, 250);
						otherItem.animate({"height": ($(this).height()), "width": ($(this).width())}, 250);
						otherItem.animate({"margin-top": "200px"}, 300);

						weight += parseInt(target.attr("data-weight"));
						value += parseInt(target.attr("data-value"));

						var newData = {}
						newData[target.attr("data-name")] = parseInt(target.attr("data-weight"));
						data.push(newData);
						console.log(data.length);
						console.log(data);

						remainingWeight -= parseInt(target.attr("data-weight"));

						$(".weight").html(weight);
						$(".value").html(value);
						$(".remaining").html(remainingWeight);
					}
				}
			}else if(target.hasClass("knapsack")){
				console.log(target.css("opacity"));
				if(target.css("opacity") == 1){
					console.log("Moving to house");

					weight = parseInt($(".weight").html());
					remainingWeight = parseInt($(".remaining").html());
					value = parseInt($(".value").html());

					var newData = {}
					for (var i = 0; i < data.length; i++){
						var key = Object.keys(data[i])[0];
						if (key == target.attr("data-name")){
							console.log(key);
							data.splice(i, 1);
							break;
						}

					}
					console.log(data);

					if(weight - parseInt(target.attr("data-weight")) < 0 || value - parseInt(target.attr("value")) < 0){
						alert("YOU BROKE PHYSICS");
					}else{
						target.animate({"margin-top": "10px", "margin-left": "160px"}, 300);
						target.animate({"opacity": 0, "height": ($(this).height()*0.80), "width": ($(this).width()*0.80)}, 250);
						target.animate({"height": ($(this).height()), "width": ($(this).width())}, 1);
						//target.animate({"margin-left": "160px"}, 1);
						var otherItem = $("#items" + " " + "#" + clickedID);
						otherItem.animate({"opacity": 0}, 551)
						otherItem.animate({"opacity": 1, "height": ($(this).height()*1.1), "width": ($(this).width()*1.1)}, 250);
						otherItem.animate({"height": ($(this).height()), "width": ($(this).width())}, 250);


						weight -= parseInt(target.attr("data-weight"));
						value -= parseInt(target.attr("data-value"));
						remainingWeight += parseInt(target.attr("data-weight"));

						$(".weight").html(weight);
						$(".value").html(value);
						$(".remaining").html(remainingWeight);
					}
				}	
			}
		});
		if (data.length != 1){
			console.log("data length: " + data.length);
			$('#knapsack').on("mouseenter", function(){
				if($("#knapsack #clock").css("margin-top") != "10px"){
					$('#knapsack #clock').animate({"margin-left": "30px", "margin-top": "5px"}, 300);
				}
				if($("#knapsack #radio").css("margin-top") != "10px"){
					$('#knapsack #radio').animate({"margin-left": "320px", "margin-top": "5px"}, 300);
				}
				if($("#knapsack #book").css("margin-top") != "10px"){
					$('#knapsack #book').animate({"margin-left": "30px", "margin-top": "150px"}, 300);
				}
				if($("#knapsack #painting").css("margin-top") != "10px"){
					$('#knapsack #painting').animate({"margin-left": "320px", "margin-top": "150px"}, 300);
				}
				if($("#knapsack #vase").css("margin-top") != "10px"){
					$('#knapsack #vase').animate({"margin-left": "30px", "margin-top": "280px"}, 300);
				}
				if($("#knapsack #computer").css("margin-top") != "10px"){
					$('#knapsack #computer').animate({"margin-left": "320px", "margin-top": "280px"}, 300);
				}

			});
			$('#knapsack').on("mouseleave", function(){
				if($("#knapsack #clock").css("margin-left") != "160px"){
					$('#knapsack #clock').animate({"margin-left": "170px", "margin-top": "160px"}, 300);
				}
				if($("#knapsack #radio").css("margin-left") != "160px"){
					$('#knapsack #radio').animate({"margin-left": "155px", "margin-top": "160px"}, 300);
				}
				if($("#knapsack #book").css("margin-left") != "160px"){	
					$('#knapsack #book').animate({"margin-left": "185px", "margin-top": "160px"}, 300);
				}
				if($("#knapsack #painting").css("margin-left") != "160px"){	
					$('#knapsack #painting').animate({"margin-left": "160px", "margin-top": "160px"}, 300);
				}	
				if($("#knapsack #vase").css("margin-left") != "160px"){
					$('#knapsack #vase').animate({"margin-left": "175px", "margin-top": "160px"}, 300);
				}	
				if($("#knapsack #computer").css("margin-left") != "160px"){	
					$('#knapsack #computer').animate({"margin-left": "135px", "margin-top": "160px"}, 300);
				}	
			});
		
		}
		var data = [];
		

		var pieWidth = 500, pieHeight = 500, radius = Math.min(pieWidth, pieHeight) / 2;

		var pie = d3.layout.pie();
		var pieData = pie(data);

		var color = d3.scale.ordinal()
		.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		var arc = d3.svg.arc()
		.outerRadius(radius - 10)
		.innerRadius(0);

		var chart = d3.select(".pie-container").append("svg")
		.attr("class", "chart")
		.attr("height", pieHeight)
		.attr("width", pieWidth);


		//});
		return {data: data};
	}

	return {setup: setup};

}());

$(document).ready(function(){
	$('#totalKnapsack').each(function(){
		totalKnapsack.setup($(this));
	});

});

/* Game plan:
Have all the items be absolutely positioned so you can add some cool shuffling animation when one dissapears
Initially have all the items exits in both the house and the knapsack
However, initially, only the house items are visible
When you click on a VISIBLE ELEMENT, that element's opacity should go to 0, whereas it's associated element's 
opacity should go to one

It goes without saying that if you click on an element in the house, the corresponding 
element in the knapsack will appear
and viseversa */