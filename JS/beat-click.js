//var msPerBeat = (1000*60)/ bpm
//ms_per_beat = 1000 * 60 / bpm

// Filename: bensound-badass.mp3
// Type: audio/mp3
// Size: 1491kb
// BPM: 120
// MS: 500 ms
// var gameLoop = setInterval(gameLoop, 10); // Divide MS/50

// Filename: bensound-dance.mp3
// Type: audio/mp3
// Size: 2424kb
// BPM: 135
// MS: 444.44 ms
// var gameLoop = setInterval(gameLoop, 8.8888); // Divide MS/50

// Filename: bensound-goinghigher.mp3
// Type: audio/mp3
// Size: 3343kb
// BPM: 121
// MS: 495.87 ms
// var gameLoop = setInterval(gameLoop, 9.9174); // Divide MS/50

// Filename: bensound-happyrock.mp3
// Type: audio/mp3
// Size: 1447kb
// BPM: 180
// MS: 333.33 ms
// var gameLoop = setInterval(gameLoop, 6.6666); // Divide MS/50

// Filename: bensound-house.mp3
// Type: audio/mp3
// Size: 3549kb
// BPM: 120
// MS: 500 ms
// var gameLoop = setInterval(gameLoop, 10); // Divide MS/50

// Filename: bensound-moose.mp3
// Type: audio/mp3
// Size: 2198kb
// BPM: 120
// MS: 500 ms
// var gameLoop = setInterval(gameLoop, 10); // Divide MS/50

// Filename: bensound-retrosoul.mp3
// Type: audio/mp3
// Size: 2960kb
// BPM: 107
// MS: 560.74 ms
// var gameLoop = setInterval(gameLoop, 11.2148); // Divide MS/50

// Filename: bensound-rumble.mp3
// Type: audio/mp3
// Size: 2116kb
// BPM: 140
// MS: 428.57 ms
// var gameLoop = setInterval(gameLoop, 8.5714); // Divide MS/50

// Filename: bensound-summer.mp3
// Type: audio/mp3
// Size: 3398kb
// BPM: 106
// MS: 566.04 ms
// var gameLoop = setInterval(gameLoop, 11.3207547169811); // Divide MS/50


//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM
//Calculation for one interval above. ^

$(document).ready(function () {

console.log( "Javascript Ready To Go!" ); 
console.log( "START" );

var currentSize = 450; // current size of the outer circle
var minSize = 200; // the minimum size of the outer circle
var decreasing = true; // while true the outer circle with decrease in size
var button1 = $(".button1");
var button2 = $(".button2");
var button3 = $(".button3");
var circle1 = $(".circle1");
var circle2 = $(".circle2");
var circle3 = $(".circle3");
var runningScore = 0; //total score so far gained
var MISS = 0; // MISSED clicks
var OK = 0; // OK clicks
var PERFECT = 0; // PERFECT clicks
var randomNumber = Math.floor(Math.random()*3); //chooses a random circle next
var clickFired = false; // checks if click has been pressed

//Click to return to start page
function clickToHome(){
    home.addEventListener("click", function() 
    {
      location.href = 'start.html';
    });
 }
clickToHome();

//Ends the game if 5 misses have occured or current audio duration runs down to 0
function endTheGame(){ 
      alert("Game Over! Your Final Score is: "+runningScore);
      location.href = 'start.html';
      return;
    }

// DELAY all below by 1800 miliseconds, see below.
setTimeout(function () { 

//randomAudio = Math.floor(Math.random()*9); // Choosen random song from tracks.
//randomAudio = 9; // TEST - CLICKS ONLY SLOW
randomAudio = 8; // SUMMER 
//randomAudio = 6; // RETROSOUL

var songsList = [{
  file: "bensound-badass.mp3", //0
  speed: 10, //interval speed of retractcircles
  //background: "'34537145_p0.png'",
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
  speed: 50,
  },
]
var song = songsList[randomAudio];
var audioElement = document.createElement('audio');

audioElement.setAttribute('src', 'Audio/'+song.file);
var gameLoop = setInterval(gameLoop, +song.speed);
$("#songName").text("Now Playing: "+song.file);
//$("html").css("background: url(../Images/"+song.background+")"); //change background?

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


function clickOne(){      
  $(".button1").mouseup(function() {
    //clickFired = true;
    $(this).css("background-color","transparent");
  });
  $(".button1").mousedown(function() {
    if(!clickFired) {
      clickFired = true;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play();
      $(this).css("background-color","black");
      console.log("click 1");
      checkStatus();     
    }
  });
}
clickOne();

function clickTwo(){
  $(".button2")
    .mouseup(function() {
    //clickFired = true;
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    if(!clickFired) {
      clickFired = true;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play();
      $(this).css("background-color","black");
      console.log("click 2");
      checkStatus();     
    }
  });
}
clickTwo();

function clickThree(){
  $(".button3")
    .mouseup(function() {
    //clickFired = true;
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    if(!clickFired) {
      clickFired = true;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play();
      $(this).css("background-color","black");
      console.log("click 3");
      checkStatus();     
    }
  });
}
clickThree();

//Checks the current radius of the outer circle and adds it to score
  function checkStatus(){  
    if (currentSize <= 450  && currentSize >= 310 ) {
      runningScore = runningScore + 10; 
      $("#scoreValue").text("MISS CLICK : "+runningScore);
      MISS = MISS + 1;
      $("#MISS").text("MISS CLICK : "+MISS);    
      if (MISS === 5){ // if 5 misses end the game!
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

// loops the retract circles as long as randomNumber is valid, 0,1,2.
function gameLoop(){
  switch(randomNumber) {
      case 0:        
          retractCircle1();
          break;
      case 1:
          retractCircle2();
          break;
      case 2:
          retractCircle3();
          break;          
      default:
          alert("INVALID RETRACT CIRCLE")
          break;
      }
}

  function retractCircle1() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //CHECK what state the outer circle is at, for ACCURACY and SCORING
    if (currentSize <= 450  && currentSize >= 310 ) {
      $(button1).focus();
      $(".circle1").css("background-color","red");
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      $(button1).focus();
      $(".circle1").css("background-color","yellow");
    } 
    else if (currentSize <= 239  && currentSize >= 200) {
      $(button1).focus();
      $(".circle1").css("background-color","green");
    } 
    else{
      $(button1).focus();
      $(".circle1").css("background-color","blue");
    }
    if (currentSize === minSize) {
     // audioElement.play();
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
    $(".circle1").css("height", currentSize);
    $(".circle1").css("width", currentSize);
    
  }

  function retractCircle2() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //CHECK what state the outer circle is at, for ACCURACY and SCORING
    if (currentSize <= 450  && currentSize >= 310 ) {
      $(button2).focus();
      $(".circle2").css("background-color","red");
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      $(button2).focus();
      $(".circle2").css("background-color","yellow");
    } 
    else if (currentSize <= 239  && currentSize >= 200) {
      $(button2).focus();
      $(".circle2").css("background-color","green");
    } 
    else{
      $(button2).focus();
      $(".circle2").css("background-color","blue");
    }
    if (currentSize === minSize) {
      //audioElement.play();
      currentSize = 450;
      console.log("CIRCLE 2 DONE");
      decreasing == false;
      clickFired = false;
      randomNumber = Math.floor(Math.random()*3);
      return;
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(".circle2").css("height", currentSize);
    $(".circle2").css("width", currentSize);  

  }

  function retractCircle3() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //CHECK what state the outer circle is at, for ACCURACY and SCORING
    if (currentSize <= 450  && currentSize >= 310 ) {
      $(button3).focus();
      $(".circle3").css("background-color","red");
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      $(button3).focus();
      $(".circle3").css("background-color","yellow");
    } 
    else if (currentSize <= 239  && currentSize >= 200) {
      $(button3).focus();
      $(".circle3").css("background-color","green");
    } 
    else{
      $(button3).focus();
      $(".circle3").css("background-color","blue");
    }
   if (currentSize === minSize) {
    //audioElement.play();
    currentSize = 450;
    console.log("CIRCLE 3 DONE");
    decreasing == false;
    clickFired = false;
    randomNumber = Math.floor(Math.random()*3);
    return;
   }
  if (decreasing == true) {
    (currentSize = currentSize - 5);
  }
  $(".circle3").css("height", currentSize);
  $(".circle3").css("width", currentSize);    
  }
}, 1800); //DELAY ALL WHEN LOAD PLAY-PAGE, DELAY 1.5 seconds.

});
