$(document).ready(function() {

// Sound and other variables

    var greenSound = document.createElement("audio");
    greenSound.src = "assets/sounds/simonSound1.mp3";

    var redSound = document.createElement("audio");
    redSound.src = "assets/sounds/simonSound2.mp3";

    var yellowSound = document.createElement("audio");
    yellowSound.src = "assets/sounds/simonSound3.mp3";

    var blueSound = document.createElement("audio");
    blueSound.src = "assets/sounds/simonSound4.mp3";

    var gameOver = document.createElement("audio");
    gameOver.src = "assets/sounds/gameover.mp3";
    
    var winSound = document.createElement("audio");
    winSound.src = "assets/sounds/youwin.mp3";
   
    var suite = [];
    var userAnswer = [];
    var round = 0;

// function when start button is pressed (buttons activate and game start)

 $("#start").click(function turnOn() {
       $(".offGreen").removeClass("offGreen").addClass("green");
       $(".offRed").removeClass("offRed").addClass("red");
       $(".offYellow").removeClass("offYellow").addClass("yellow");
       $(".offBlue").removeClass("offBlue").addClass("blue");
       suite = [];
       round = 0;
       playGame();
       $(this).text("playing");
       $("#message").text("");
 });
 
// PlayGame function, random loop generated, buttons flashing with loop
 
 function playGame() {
     userAnswer = [];
     suite.push(Math.floor(Math.random() * 4) + 1);
     round += 1;
     document.getElementById("count").innerHTML = round;
     for (var i = 0; i < 2; i++) {
        var buttonOn = suite[i];
            if(buttonOn == 1) {
                setTimeout(function (){activateGreen()}, 1000 * (i + 1));
            }
            if(buttonOn == 2) {
                setTimeout(function (){activateRed()}, 1000 * (i + 1));
            }
            if(buttonOn == 3) {
                setTimeout(function (){activateYellow()}, 1000 * (i + 1));
            }
            if(buttonOn == 4) {
                setTimeout(function (){activateBlue()}, 1000 * (i + 1));
            }
     }
 }
 
/* Function to compare user answer with random loop
   3 choices, win game, game over or loop carries on*/
 
 function compareAnswer() {
     var currentAnswerIndex = userAnswer.length - 1;
     var currentAnswer = userAnswer[currentAnswerIndex];
     
     if (currentAnswer != suite[currentAnswerIndex]) {
         looseGame();
     }
     if (currentAnswerIndex == suite.length - 1) {
         playGame();
     }
     if (suite.length == 3) {
         winGame();
     }
 }
 
// Game over function, play sound, reset counter and changes messages

 function looseGame(){
     suite = [];
     gameOver.play();
     greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
     $("#message").append("<h2>try again!!!</h2>");
     $("#start").text("press to start");
 }
 
// Win game function, redirects to gameWin page with slight delay
 
 function winGame(){
     setTimeout(function(){
        window.location.replace("/gameWin.html");
     }, 500);
     /*
     winSound.play();
     activateGreen(), activateRed(), activateYellow(), activateBlue();
     greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
     $("#message").append("<h2>you win!!!</h2>");
     $("#start").text("play again");
     */
 }

// functions for 4 color buttons activated 

    function activateGreen() {
        greenSound.play();
        $(".green").addClass("pressGreen"),
        setTimeout(function eraseClass() { $(".green").removeClass("pressGreen") }, 150);
    }

    function activateRed() {
        redSound.play();
        $(".red").addClass("pressRed"), 
        setTimeout(function eraseClass() { $(".red").removeClass("pressRed") }, 150);
    }

    function activateYellow() {
        yellowSound.play();
        $(".yellow").addClass("pressYellow"),
        setTimeout(function eraseClass() { $(".yellow").removeClass("pressYellow") }, 150);
    }

    function activateBlue() {
        blueSound.play();
        $(".blue").addClass("pressBlue"),
        setTimeout(function eraseClass() { $(".blue").removeClass("pressBlue") }, 150);
    }

// Function for when color buttons are pressed

    $(function() {
        $(".offGreen").mousedown(function() {
            activateGreen();
            userAnswer.push(1);
            compareAnswer();
        });
    });

    $(function() {
        $(".offRed").mousedown(function() {
            activateRed();
            userAnswer.push(2);
            compareAnswer();
        });
    });

    $(function() {
        $(".offYellow").mousedown(function() {
            activateYellow();
            userAnswer.push(3);
            compareAnswer();
        });
    });

    $(function() {
        $(".offBlue").mousedown(function() {
            activateBlue();
            userAnswer.push(4);
            compareAnswer();
        });
    });



});