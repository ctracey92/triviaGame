//Starting variables for the timer
var time = 60;
var running = true; 
var intervalID;
var submitted = false;

//Variables for user answers/answer key
var userAnswers = [];
var answersKey = ["1" , "1" , "1" , "1" , ]

//Game running varaible
var gameRunning;

//Variables for correct and incorrect answers
var correct = 0;
var incorrect = 0;

//Game Running Conditions
if (time > 0){
    gameRunning = true;
}

else if (time <= 0){
    gameRunning = false;
}

//On page load begins the timer
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

//Checks to see which answers were right and which were wrong
function endGame(){
    for (i = 0; i < answersKey.length; i++)
        if (userAnswers[i] === answersKey[i]){
            correct++
        }
        else {
            incorrect++
        }
    $("#correctAnswers").text("Correct: " + correct);
    $("#incorrectAnswers").text("Incorrect: " + incorrect);
}
//Shows End Game box
function showScore() {
    $("#gameOver").css("display", "block")
}

//Hides the questions/timer/done button
function hideAll(){
    $("#questions").css("display", "none");
    $("#timeLeft").css("display", "none");
}

//Pushes user input into array and checks against to see if the submit button was pressed, runs end game function
function answers(){
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
        showScore();
        hideAll();
        alert("Game Over");
        clearInterval(intervalID);
    }
}

//When submit button is pressed runs answers function
$("#submitButton").on("click", function doneWithGame(){
answers()
})










   


//Pseudo code
// while the game is running run the following functions
// check to see if all questions have been answered & time > 0, if yes stop game and score
//otherwise if all questions havent been answered & time > 0, keep going
//if time == 0 stop game and score

//scoring- if true answer was selected correct+  if incorrect answer was selected incorrect