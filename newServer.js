var sys = require("sys"),  
my_http = require("http");

var questions = [{"questionText": "Sam thinks y = 2x will ___ as x goes from 1 to 10.", 

		"options": ["increases", "decreases", "goes up then down", "goes down then up"], 
		"solutionIndex": 0 },

		{"questionText": "Jill thinks y = 2x-5 is going to ___ as x goes from 1 to 10." ,
		"options": ["increase", "decrease", "increase then decrease", "decrease then increase"],
		"solutionIndex": 0}];

/*var solutions = ["increases", "increase"];*/



function checkAnswer(currentQuestionIndex, ans){
		/*if ($(".selected").val() == solutions[currentQuestionIndex]){
			$('.quiz').append($("<p>Correct!</p>"));
		}else{
			$('.quiz').append($("<p>NO YOU'RE WRONG</p>"));
		}
		console.log("checkAnswer called");*/

		var question = questions[currentQuestionIndex];
		var solutionIndex = question["solutionIndex"];
		if(questions[currentQuestionIndex].options[solutionIndex] == ans){
			return "true";
		}else{
			return "false";
		}
	}

my_http.createServer(function(request,response){ 

	//Read node.js documentation
	var info = require('url').parse(request.url, true, false);
	var currentQuestionIndex = info.query.currentQuestionIndex;
	var answer = info.query.answer;


    sys.puts("I got kicked");  
    response.writeHeader(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": "*"});  
    response.write(checkAnswer(currentQuestionIndex, answer));  
    response.end();  
}).listen(8080);  
sys.puts("Server Running on 8080");