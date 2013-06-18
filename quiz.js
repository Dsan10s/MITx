Parse.initialize("reiJtDfh2jLjgv9MH3ahxYkdWtz1LTDKfigscuLk", "XIoHOCTyBM7Ubzwg4TVIc5GXCVQe6RB7z86kkPJD");
var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});


// FIGURE OUT HOW .FIND WORKS IN THE PARSE DOCUMENTATION

var quiz = (function(){
    var exports = {};

	var questions = [{"questionText": "Sam thinks y = 2x will ___ as x goes from 1 to 10.", 

		"options": ["increases", "decreases", "goes up then down", "goes down then up"]/*, 
		"solutionIndex": 0*/ },

		{"questionText": "Jill thinks y = 2x-5 is going to ___ as x goes from 1 to 10." ,
		"options": ["increase", "decrease", "increase then decrease", "decrease then increase"]/*,
	//	"solutionIndex": 0*/}]; // questions
	// structure with questionText, solutions, options
	// [ ["text of question", solution, options] ],

	var useParse = false;

	var wrong = false; 
//	var solutions = ["increases", "increase"]; // correct answers to the questions
	var answers = []; // answers from the student

	var ScoreAndIndex = Parse.Object.extend("ScoreAndIndex");
	var scoreAndIndex = new ScoreAndIndex();

	scoreAndIndex.set("score", 0);
	scoreAndIndex.set("currentQuestionIndex", 0);

	var score = scoreAndIndex.get("score");
	var currentQuestionIndex = scoreAndIndex.get("currentQuestionIndex");

	scoreAndIndex.save(null, {
	  success: function(scoreAndIndex) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + score.id);
	  },
	  error: function(scoreAndIndex, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and description.
	    alert('Failed to create new object, with error code: ' + error.description);
	  }
	});


	/*var score = 0; // score of the student
	score = parseInt(localStorage.score);
	var currentQuestionIndex = 0; // index of the current question we are on 
	currentQuestionIndex = parseInt(localStorage.currentQuestionIndex);
	var questionObject = questions[currentQuestionIndex];*/

	// input: takes in a question index and a student's answers
	// output: true if answer is correct

/*	function checkAnswer(ans){
		

		var question = questions[currentQuestionIndex];
		var solutionIndex = question["solutionIndex"];
		return questions[currentQuestionIndex].options[solutionIndex] == ans;
	}*/

	function getCurrentQuestion(){
		return questions[currentQuestionIndex];
	}
	function removeQuestion(){
		$('.quiz').empty('*');
	}
	function hideFeedback(){
		console.log("hideFeedback called");
		$('.feedback').html("");
	}

	function getAnswers(){
		//currentQuestionIndex
		var answer = $('input[name="choice' + currentQuestionIndex + '"]:checked').val();
		var feedBackDiv = $('<div class = "feedback"></div>');
		var nextQuestion = $('<button class = "next">Next Question</button>');
		$.ajax({async: false, url: "http://localhost:8080/", data: {currentQuestionIndex: currentQuestionIndex, answer: answer}}).done(function(msg){
			console.log(msg);
			var correct = msg === "true";

		// We need checkAnswer to change the value of a var to a boolean, then below we will check the value of that var

			if(correct){
				console.log("correct");
				//answer is correct
				$('.feedback').show();
				feedBackDiv = $('<div class = "feedback">Correct!</div>');
				//$('.submit').text("Next Question");
				$('.submit').hide();
				$('.quiz').append(nextQuestion, feedBackDiv);
				if (wrong === false){
					if (useParse){
						scoreAndIndex.increment("score");
						scoreAndIndex.save();
					}else{	
						score++;
						localStorage["score"] = score;
					}	
				}
				if (useParse){
					scoreAndIndex.increment("currentQuestionIndex");
					scoreAndIndex.save();
				}else{
					currentQuestionIndex++;
					localStorage["currentQuestionIndex"] = currentQuestionIndex;
				}
				
				console.log("score: " + score + "question num: ", + (currentQuestionIndex + 1));
				
				//$('.submit').on("click", removeQuestion);
				$('.next').on("click", removeQuestion).on("click", displayQuestion);
				wrong = false;
			}else{
				console.log("incorrect");
				// answer is incorrect
				var feedBackDiv = $("<div class = 'feedback'>NO YOU'RE WRONG</div>");
				$('.quiz').append(feedBackDiv);
				wrong = true;
			}
		});
	}

	// displays the current quiz question to the student



	function displayQuestion(){
		var scoreMessage = $("<div class = 'scoreMessage'>Your final score is: </div>");
		var scoreDiv = $("<div></div>");
		var finalScore = $("<div></div>");
		finalScore.append(scoreMessage, scoreDiv);
		console.log("displayQuestion called");
		if (currentQuestionIndex == questions.length){
			$('.quiz').empty();
			scoreDiv.text(score + "/" + questions.length);
			$('.quiz').append(finalScore);
		}
		var questionDiv = $('<div></div>').append(String(currentQuestionIndex + 1), ". ", questions[currentQuestionIndex]["questionText"]);
		var ansDiv = $('<div></div>');
		var ansLength = questions[currentQuestionIndex]["options"].length;
		var options = $("<div></div>", {class: 'options'});
		for (var i = 0; i < ansLength; i++){
			var option = $("<div></div>", {class: "option"});
			var radio = $('<input>', {class: "selected", type: "radio", name: "choice" + currentQuestionIndex, value: questions[currentQuestionIndex]["options"][i]});
			option.append(radio, " ", questions[currentQuestionIndex]["options"][i]);
			options.append(option);
		}
		var answersDiv = $('<div></div>');
		var submitButton = $('<button class = "submit">Submit</button>');
		
		
		$('.quiz').append(questionDiv, options, submitButton);

		console.log("Question is now displayed");

		$('.submit').on("click", hideFeedback).on("click", getAnswers);
	}

	

	// Called when a student gets a question right
	function incrementScore(){
		score++;
	}

	function setup(){
		
		if (localStorage.length == 0){
			score = 0;
			currentQuestionIndex = 0;
			localStorage["score"] = score;
			localStorage["currentQuestionIndex"] = currentQuestionIndex;
		}
		displayQuestion();
	}

	exports.setup = setup;
	return exports
})();

$(document).ready(function(){
	quiz.setup();

	$.ajax({url: "http://localhost:8080", data: {id: 10}}).done(function(msg){
		console.log(msg);
	});

	
	console.log("what");
});