$(document).ready(function () {
console.log( "Javascript Ready To Go!" ); 
console.log( "START" );

var currentSize = 450; // Current size of the outer circle
var minSize = 200; // The minimum size of the outer circle
var decreasing = true; // While true the outer circle with decrease in size
var runningScore = 0; //total score so far gained
var MISS = 0; // MISSED clicks - Score 10
var OK = 0; // OK clicks - Score 59
var PERFECT = 0; // PERFECT clicks - Score 100
var clickFired = false; // Checks if click has been pressed already

//Click "Return Home", to return to start page
function clickToHome(){
    home.addEventListener("click", function() 
    {
      location.href = 'start.html';
    });
}
clickToHome();
//Ends the game if 5 misses have occured or current audio duration runs down to 00:00

function endTheGame(){ 
  //alert("Game Over! Your Final Score is: "+runningScore);
  alert("Game Over! Final Score is: "+runningScore);
  location.href = 'start.html';
  return;
}    

setTimeout(function(){ 
// function homePage(){
//   location.href = 'start.html'; 
// }
// DELAY all below by 1800 miliseconds, see BOTTOM most code for delay length.
//setTimeout(function () { 
//randomAudio = Math.floor(Math.random()*9); // Choosen random song from tracks.
//randomAudio = 9; // TEST - CLICKS ONLY SLOW
//randomAudio = 8; // SUMMER 
randomAudio = 6; // RETROSOUL
//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM
//Calculation for one interval above. ^
var songsList = [{
  file: "bensound-badass.mp3", //0
  speed: 10, //interval speed of retractcircles
  },
  {
  file: "bensound-dance.mp3", //1
  speed: 8.8888,
  },
  {
  file: "bensound-goinghigher.mp3", //2
  speed: 9.9174,
  },
  {
  file: "bensound-happyrock.mp3", //3
  speed: 10,
  },
  {
  file: "bensound-house.mp3", //4
  speed: 10,
  },
  {
  file: "bensound-moose.mp3", //5
  speed: 10,
  },
  {
  file: "bensound-retrosoul.mp3", //6
  speed: 11.2148,
  },
  {
  file: "bensound-rumble.mp3", //7
  speed: 8.5714,
  },
  {
  file: "bensound-summer.mp3", //8
  speed: 11.3208,
  },
  {
  file: "bensound-happyrock.mp3", //9 - TEST ONLY
  speed: 40,
  },
]
// Choose data from the array
var song = songsList[randomAudio]; 
$("#songName").text("Now Playing: "+song.file);
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'Audio/'+song.file);
setInterval(gameLoop, +song.speed); // This controls how fast each outer circle retracts


//Controls the timer display on play-screen.
function timer(){
  audioElement.play();
  audioElement.addEventListener("timeupdate", function() {
    var timeleft = document.getElementById('timeRemain'), //assign new variable time left
        duration = parseInt( audioElement.duration ), // parse in song total duration
        currentTime = parseInt( audioElement.currentTime ), // parse in song current position
        timeLeft = duration - currentTime, // Time left is always equal to max duration - current
        s, m;
        s = timeLeft % 60; 
        m = Math.floor( timeLeft / 60 ) % 60;  
        s = s < 10 ? "0"+s : s; // seconds
        m = m < 10 ? "0"+m : m;  // minutes
        timeRemain.innerHTML = "Time Left: "+m+":"+s; //append minutes and seconds left to targeted html id        
        if (timeLeft === 0){
          endTheGame();
          return;
        }
  });
}
timer();

//Checks the current radius of the outer circle and adds it to score, VS mouse click.
  function checkStatus(){  
    if (currentSize <= 450  && currentSize >= 310 ) {
      runningScore = runningScore + 10; 
      $("#scoreValue").text("MISS CLICK : "+runningScore);
      MISS = MISS + 1;
      $("#MISS").text("MISS CLICK : "+MISS);    
      if (MISS === 10){ // if 10 misses occur end the game!
        endTheGame();
        return;
      }
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      runningScore = runningScore + 50; 
      $("#scoreValue").text("OK CLICK : "+runningScore); 
      OK = OK + 1;
      $("#OK").text("OK CLICK : " +OK);  
    } 
    else if (currentSize <= 239  && currentSize >= 200) {
      runningScore = runningScore + 100; 
      $("#scoreValue").text("PERFECT CLICK : "+runningScore); 
      PERFECT = PERFECT + 1;
      $("#PERFECT").text("PERFECT CLICK : "+PERFECT);  
    } 
    else{
      alert("ERROR SCORE");
    }
  }

var button = [".button1", ".button2", ".button3"];
clickAll(button[0], button[1], button[2]);

function clickAll(but1, but2, but3){
  $(but1, but2, but3).mouseup(function() {
    $(but1, but2, but3).css("background-color","transparent");
  });
  $(but1, but2, but3).mousedown(function(event) {
    if(!clickFired) {
      clickFired = true;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play();
      $(but1, but2, but3).css("background-color","black");
      console.log(event);
      checkStatus();     
    }
  });
}
clickAll();

var circle = [".circle1", ".circle2", ".circle 3"];
//retractCircle(circle[0], circle[1], circle[2]);

  function retractCircle(circleNum) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //checkRetract = 1;
    //clickAll(button[0], button[1], button[2]);
    //CHECK what state the outer circle is at, for ACCURACY and SCORING
    if (currentSize <= 450  && currentSize >= 310 ) {
      $(circleNum).css("background-color","red");
      //$(".circle1").css("background-color","#393037");
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      $(circleNum).css("background-color","yellow");
      //$(".circle1").css("background-color","#665763");
    } 
    else if (currentSize <= 239  && currentSize >= 201) {
      $(circleNum).css("background-color","green");
      //$(".circle1").css("background-color","#B697B0");
    } 
    else{
      $(circleNum).css("background-color","transparent");
    }
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      console.log("CIRCLE 1 DONE");
      decreasing == false;
      clickFired = false;
      randomNumber = Math.floor(Math.random()*3);
      return;
    }  
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(circleNum).css("height", currentSize);
    $(circleNum).css("width", currentSize);    
  }


var randomNumber = Math.floor(Math.random()*3);
function gameLoop(){
  switch(randomNumber) {
      case 0:        
          retractCircle(circle[1]);
          break;
      case 1:
          retractCircle(circle[2]);
          break;
      case 2:
          retractCircle(circle[3]);
          break;          
      default:
          endTheGame();
          break;
      }
}
gameLoop();
 }, 1800);
});

