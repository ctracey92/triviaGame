//Starting variables for the timer
var time = 60;
var running = true; 
var intervalID;
var submitted = false;
var userAnswers = [];
var answers = ["1","1","1","1","1"]

//Game running varaible
var gameRunning;

//Currently on page load begins the timer
window.onload = timer();
function timer(){
    if (time >= 0){
        intervalID = setInterval(countdown, 1000);
    }
    //Displays the countdown and clears the interval when time reaches 0
    function countdown (){
        time--;
        $("#timeLeft").text("Time left: " + time);
        if (time <= 0){
            console.log("times up")
            clearInterval(intervalID);
        }
    }
}

//Variables for correct and incorrect answers
var correct = 0;
var incorrect = 0;

//Display them to the page
$("#correctAnswers").text("Correct: " + correct);
$("#incorrectAnswers").text("Incorrect: " + incorrect);

//Game Running Conditions
if (time > 0){
    gameRunning = true;
}

else if (time <= 0){
    gameRunning = false;
}

//When Submitted pushes answers into an array and runs endGame function
$("#submitButton").on("click", function answers(){
    var answer1 = $( "input[type=radio][name=question1]:checked" ).val()
    var answer2 = $( "input[type=radio][name=question2]:checked" ).val()
    var answer3 = $( "input[type=radio][name=question3]:checked" ).val()
    var answer4 = $( "input[type=radio][name=question4]:checked" ).val()
    var answer5 = $( "input[type=radio][name=question5]:checked" ).val()
userAnswers.push(answer1, answer2, answer3, answer4, answer5);
console.log(userAnswers);
submitted = true;
if (submitted === true){
    endGame();
    alert("Game Over");
}
})


//Checks to see which answers were right and which were wrong
function endGame(){
    for (i = 0; i < answers.length; i++)
        if (userAnswers[i] === answers[i]){
            correct++
        }
        else {
            incorrect++
        }
    $("#correctAnswers").text("Correct: " + correct);
    $("#incorrectAnswers").text("Incorrect: " + incorrect);
}




   


//Pseudo code
// while the game is running run the following functions
// check to see if all questions have been answered & time > 0, if yes stop game and score
//otherwise if all questions havent been answered & time > 0, keep going
//if time == 0 stop game and score

//scoring- if true answer was selected correct+  if incorrect answer was selected incorrect