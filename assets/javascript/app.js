

//Timer for the game, works and displays

//Starting variables for the timer
var time = 60;
var running = true; 
var intervalID;

//Currently on page load begins the one minute timer
window.onload = function(){
    intervalID = setInterval(countdown, 1000);
    if (running === "true"){
        countdown()
        }
        
        //Displays the countdown
        function countdown (){
            time--;
            $("#timeLeft").text(time);
        
            if (time <= 0){
                running = false;
                alert("Time's Up!")
            }
        }
}

