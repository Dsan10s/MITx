$(document.ready(function(){
	var enlarge = function(event){
		var target = event.target;
		$(target).css("height": "120%");
		$(target).css("width": "120%");
	}
	$('a.btn').on("hover", enlarge);
}))