var counter = (function(){
	// on(eventString, callback) -- register handler for an event
	// trigger(eventString, data) -- call all callbacks for eventString
	function EventHandler(){
		// map eventString to a list of callbacks
		// {'update': [ ...View.update... ] }
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
				for (var i = 0; i < cblist.length; i+=1){
					cblist[i](data);
				}
			}
		}
		return {on: on, trigger: trigger}
	}

	// addOneToCounter() -- increment counter
	// reset() -- set count to 0
	// getValue() -- return current counter value
	// on(eventString, callback) -- "update", the data will new value of counter
	function Model(){
		var eventHandler = EventHandler();
		var count = 0
		function addOneToCounter(){
			count++;
			eventHandler.trigger('update', count);
		}

		function reset(){
			count = 0;
		}

		function getValue(){
			return count;
		}
		return {addOneToCounter: addOneToCounter, reset: reset, getValue: getValue, on: eventHandler.on};
	}

	// increment() -- cause the value of the counter to increment
	function Controller(model){
		function increment(){
			model.addOneToCounter();
		}

		return {increment: increment}
	}

	function View(div, model, controller){
		var display = $('<div class = "view">The current value of the counter is <span>0</span></div>');
		var counterValue = display.find('span');
		div.append(display);

		function update(cval){
			counterValue.text(cval);
		}
		model.on('update', update);

		return {}
	}

	function setup(div){
		var model = Model();
		var controller = Controller(model);
		var view = View(div, model, controller);
		var view2 = View(div, model, controller);

		var incrementButton = $("<button class = 'btn btn-primary'>Increment</button>");
		incrementButton.on("click", controller.increment);
		var clearButton = $("<button class = 'btn btn-success'>Clear</button>");
		clearButton.on("click", model.reset);

		div.append(incrementButton, clearButton);
		// we use .increment to refer to the dict we created in Controller
	}

	// items accessible to outsiders
	return {setup: setup};

}());

$(document).ready(function(){
	$('.counter').each(function(){
		counter.setup($(this));
	});
});