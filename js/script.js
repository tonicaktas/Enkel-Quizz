function submitAnswers(){
	var total = 5;
	var score = 0;

	// Hämta värde som fylls i formulären
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Loopen kollar ifall allt är ifyllt
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('Du har missat en fråga '+ i);
			return false;
		}
	}

	// Sätta rätta svar i en varieabel
	var answers = ["b","a","a","b","c"];

	// Loopen som kollar svar
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	// Visa resultat
	var results = document.getElementById('results');
	results.innerHTML = '<h3>Du har <span>'+score+'</span> rätt av <span>'+total+'</span></h3>';
	alert('Du har '+score+' rätt av ' +total);

	return false;
}
