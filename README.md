# Simon Game
Built by **_Nicolas Truel_**

---
> Inspired by the __Simon game__, an electronic game of memory skill, invented by _Ralph H. Baer_ and _Howard J. Morrison_ in 1978. The device creates a series of tones and lights and requires a user to repeat the sequence. If the user succeeds, the series becomes progressively longer and more complex. Once the user fails, the game is over.

> Links to a [video](https://www.youtube.com/watch?v=1Yqj76Q4jJ4) and the [wikipedia page](https://en.wikipedia.org/wiki/Simon_(game)) of the original game here.

>[Simon Game](https://nicktruel.github.io/simon-game/) (Play it here)

#### Table of content
1. [UX](#UX)
2. [Features](#Features)
3. [Technologies](#Technologies)
4. [Testing](#Testing)
    1. [Android](#Android)
    2. [IOS](#IOS)
    3. [Browsers](#Browsers)
    4. [Jasmine](#Jasmine)
    5. [Bugs](#Bugs)
5. [Deployment](#Deployment)
6. [Credits](#Credits)
    1. [Content](#Content)
    2. [Media](#Media)
    3. [Acknowledgements](#Acknowledgements)

## UX <a name="UX"></a>
> The goal of this project is to produce a functional game with _Javascript_, as well as utilising the ealier skills learned such as _HTML_ and _CSS_.

> The user should be able to enjoy the game on any device. The contrast between the colors of the pad should be clear and the sounds associated to each color will help the user remember the series proposed by the computer.



> View of the game on an iphone6:

![screen shot mobile size](/assets/images/screen_shot1.png)

> View of the game on an ipad:

![screen shot tablet size](/assets/images/screen_shot2.png)

> View of the game on large screen:

![screen shot large screen](/assets/images/screen_shot3.png)


> First drawing of the project:  [wireframe](/assets/images/simon-wireframe.png)

## Features <a name="Features"></a>

* The page has a "Rules" button explaining to the user how to play the game.
* A "Press to start" button acts as an on switch, and start the first serie.
* The "Game Pad" is composed of 4 different colored buttons with a different sound each.
* Each button has three different shades of colors. The dim one is set when the game is off (before the user clicks on the start button). The brighter one is set when the game is on-going. And the brightest one is activated when the button is pressed (either by the computer or the user).
* The first serie generates one color with its sound.
* The user is asked to copy the computer output by pressing the same button.
* If the user input is correct, the same sequence is regenerated by the computer, and another step of "color and sound" is added.
* If the user input is wrong, a sound is generated annoucing to the user the game is over.(The choice of re-starting a game is proposed)
* The game is won when the user completes 10 rounds without mistake.
* Below the Game Pad, the number of rounds played is displayed as well as a "Try Again" message if the user inputs the wrong color, and a winning message when the user finishes the game.
* During play, the "Press to start" button displays "Playing".

___
A strict version of the game will be added shortly, enabling the user to re-start at the previous round when inputing a wrong answer (As opposed to restarting from round 1 at the moment).

## Technologies <a name="Technologies"></a>

The technologies used to create this game are:
<dl>
  <dt>HTML5 (the layout of the page)</dt>
  <dt>CSS3 (illustrations, colors, images...)</dt>
  <dt>JAVASCRIPT (the fonctionalities of the game)</dt>
  <dt>JQuery (manipulating the DOM)</dt>
  
  [https://jquery.com/](https://jquery.com/)
  <dt>BOOTSTRAP 3.3 (buttons and modals)</dt>
  
  [https://getbootstrap.com/docs/3.3/](https://getbootstrap.com/docs/3.3/)
  <dt>Google Fonts (for the retro computer game fonts)</dt>
  
  [https://fonts.google.com/](https://fonts.google.com/)
  <dt>cssmatic (box shadows)</dt>
  
  [https://www.cssmatic.com/](https://www.cssmatic.com/)
  <dt>Hover.css (hovering effects)</dt>
  
  [http://ianlunn.github.io/Hover/](http://ianlunn.github.io/Hover/)
  <dt>Pencil wireframe (designing the layout at an early stage)</dt>
  
  [https://pencil.evolus.vn/](https://pencil.evolus.vn/)
</dl>
    
> function for green color button activated:

    function activateGreen() {
        greenSound.play();
        $('.green').addClass('pressGreen'),
        setTimeout(function eraseClass() { $('.green').removeClass('pressGreen') }, 150);
    };
    
> Function for when green game pad button is pressed:

    $(function() {
        $('.offGreen').mousedown(function() {
            activateGreen();
            userAnswer.push(1);
            compareAnswer();
        });
    });
   
> function that compares output from computer with input from user:

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
        };
    };

> function that creates random suite:

    function playGame() {
         userAnswer = [];
         suite.push(Math.floor(Math.random() * 4) + 1);
         round += 1;
         document.getElementById('count').innerHTML = round;
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
     
> function that starts the game:

    $('#start').click(function turnOn() {
        $('.offGreen').removeClass('offGreen').addClass('green');
        $('.offRed').removeClass('offRed').addClass('red');
        $('.offYellow').removeClass('offYellow').addClass('yellow');
        $('.offBlue').removeClass('offBlue').addClass('blue');
        suite = [];
        round = 0;
        playGame();
        $(this).text('playing');
        $('#message').text('');
    });

> function when game is lost:

     function looseGame(){
        suite = [];
        gameOver.play();
        greenSound.pause(), redSound.pause(), yellowSound.pause(), blueSound.pause();
        $('#message').append('<h2>try again!!!</h2>');
        $('#start').text('press to start');
     };
 
> function when game is won:
 
     function winGame(){
         setTimeout(function(){
            window.location.replace("gameWin.html");
         }, 500);
     };

## Testing <a name="Testing"></a>

Tools used to verify codes:
* W3C CSS Validation Service (https://jigsaw.w3.org/css-validator/)
* W3C Markup Validation Service (https://validator.w3.org/)
* Chrome DevTools (F12)

The game was tested on different platforms:
<dl>
 <dt>Android <a name="Android"></a></dt>
 <dl>Samsung Galaxy A3
 <dl>Samsung Galaxy J5
 <dl>Samsung Galaxy TAB A
 <dl>Huawei P20 Lite
 <dt>IOS <a name="IOS"></a></dt>
 <dl>Iphone 5s
 <dl>Iphone 6
 <dl>Macbook
 <dt>Browsers <a name="Browsers"></a></dt>
 <dl>Google Chrome (Version 69.0.3497.100)
 <dl>Firefox (62.0.3)
 <dl>Explorer (42.17134.1.0)
 <dt>Jasmine <a name="Jasmine"></a></dt>
 <dl>Some of the functionalities were tested using Jasmine tool
 <dl>Here is Jasmine boilerplate:
 <dt>
 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.js"></script>
    <script type="text/javascript" src="assets/lib/jasmine-jquery.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.css" />
    
    <!-- Load scripts -->
    <script type="text/javascript" src="assets/script/test.js"></script>
    
    <!-- Load Tests -->
    <script type="text/javascript" src="assets/spec/testSpec.js"></script>
</dl>

 <dt>Bugs <a name="Bugs"></a></dt>
 
 <u>_fixed_</u>:    
 Couldn't get the playGame loop to stop when the game was won.After reaching the 10th round, a funtion was activating the youwin.mp3 but another suite was generated at the same time.
 My fix (with tutor's help) was to redirect the game to a different html page (gameWin.html) before a new suite was created (hence the 500ms delay compared to 1000ms to activate a new color) with:
 
    function winGame(){
     setTimeout(function(){
        window.location.replace("gameWin.html");
     }, 500);
        
    }
 
 
 
 <u>_Unfixed_</u>:  
 If a color is pressed before the start button is activated the game will go into gameOver mode and the game over sound and display will be heard and shown (to be fixed shortly).

## Deployment <a name="Deployment"></a>

The code, (built in [Cloud9](https://ide.c9.io/nicktruel/simon_game)) is pushed to a remote repository on GitHub and the site is published on GitHub pages (https://nicktruel.github.io/simon-game/).

GitHub Pages site is built from the master branch.

All tests were re-performed on the final deployed version.

## Credits <a name="Credits"></a>

#### Content <a name="Content"></a>
This game is inspired by the _Simon Game_ from 1978. The design of the pad, the colors of the buttons, the sounds of the buttons on the pad when pressed and the logic of the game are all been inspired by the original version of the game:

![original simon game](/assets/images/simon-original.jpg)

#### Media <a name="Media"></a>
* The "You win!" and "Game over!" sounds were downloaded from [zapsplat.com](https://www.zapsplat.com/).
* The rules are a copy of the original ones taken from [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)).

#### Acknowledgements <a name="Acknowledgements"></a>
This game was of course intended to resemble the original Simon Game.
A lot of researches were made on the web and websites such as w3Schools.com, github.com, Codepen.io, stackoverflow.com, youtube.com and of course the slack chatroom were great help to achieve the final result.
