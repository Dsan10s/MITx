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
		var model = Model();
		var controller = Controller(model);
		var view1 = View(div, model, controller); // These two views will respectively reperesent
		var view2 = View(div, model, controller); // the items in the house and the knapsack

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
					target.animate({"opacity": 0, "height": ($(this).height()*0.80), "width": ($(this).width()*0.80)}, 250);
					target.animate({"height": ($(this).height()), "width": ($(this).width())}, 1);
					var otherItem = $("#knapsack" + " " + "#" + clickedID);
					otherItem.animate({"opacity": 1, "height": ($(this).height()*1.1), "width": ($(this).width()*1.1)}, 250);
					otherItem.animate({"height": ($(this).height()), "width": ($(this).width())}, 250);
					
					weight = parseInt($(".weight").html());
					value = parseInt($(".value").html());

					weight += parseInt(target.attr("data-weight"));
					value += parseInt(target.attr("data-value"));
					$(".weight").html(weight);
					$(".value").html(value);
				}
			}else if(target.hasClass("knapsack")){
				if(target.css("opacity") == 1){
					console.log("Moving to house");
					target.animate({"opacity": 0, "height": ($(this).height()*0.80), "width": ($(this).width()*0.80)}, 250);
					target.animate({"height": ($(this).height()), "width": ($(this).width())}, 1);
					var otherItem = $("#items" + " " + "#" + clickedID);
					otherItem.animate({"opacity": 1, "height": ($(this).height()*1.1), "width": ($(this).width()*1.1)}, 250);
					otherItem.animate({"height": ($(this).height()), "width": ($(this).width())}, 250);

					weight = parseInt($(".weight").html());
					value = parseInt($(".value").html());

					weight -= parseInt(target.attr("data-weight"));
					value -= parseInt(target.attr("data-value"));
					$(".weight").html(weight);
					$(".value").html(value);

				}	
			}
		});
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