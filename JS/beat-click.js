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

// var interval = setInterval(oneBeat, 11.32);
// 566miliseconds for one beat.
//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM

$(document).ready(function () {


console.log( "Javascript Ready To Go!" ); 
console.log( "START" );

var currentSize = 450;
var minSize = 200;
var decreasing = true;
var button1 = $(".button1");
var button2 = $(".button2");
var button3 = $(".button3");
var circle1 = $(".circle1");
var circle2 = $(".circle2");
var circle3 = $(".circle3");
var click1Valid = false;
var click2Valid = false;
var click3Valid = false;
var runningScore = 0;
var MISS = 0;
var OK = 0;
var PERFECT = 0;

//Click to return to Home page
function clickToHome(){
    home.addEventListener("click", function() {
    window.location.href = 'start.html';
  });
 }
clickToHome();

// function clickToScores(){
//     finalScorePage.addEventListener("click", function() {
//     window.location.href = 'scores.html';
//   });
//  }
// clickToScores();


setTimeout(function () {

var audioElement = document.createElement('audio');
//Play Main Song AND check duration with clock.

//randomAudio = Math.floor(Math.random()*8); // PURE RANDOM OUT OF 9 SONGS
//randomAudio = 8; //SUMMER TRACK
randomAudio = 6; //RETRO-SOUL TRACK -- GOOD TIMING!

//randomAudio = 6; // PUT EXACT CASE NUMBER FOR EXACT SONG!
//randomAudio = 9; // TEST CLICKS ONLY

switch(randomAudio) {
    case 0:        
        audioElement.setAttribute('src', 'Audio/bensound-badass.mp3');
        var gameLoop = setInterval(gameLoop, 10); // Divide MS/50
        break;
    case 1:
        audioElement.setAttribute('src', 'Audio/bensound-dance.mp3');
        var gameLoop = setInterval(gameLoop, 8.8888); // Divide MS/50
        break;
    case 2:
        audioElement.setAttribute('src', 'Audio/bensound-goinghigher.mp3');
        var gameLoop = setInterval(gameLoop, 9.9174); // Divide MS/50
        break; 
    case 3:
        audioElement.setAttribute('src', 'Audio/bensound-happyrock.mp3');
        var gameLoop = setInterval(gameLoop, 6.6666); // Divide MS/50
        break;  
    case 4:
        audioElement.setAttribute('src', 'Audio/bensound-house.mp3');
        var gameLoop = setInterval(gameLoop, 10); // Divide MS/50
        break;  
    case 5:
        audioElement.setAttribute('src', 'Audio/bensound-moose.mp3');
        var gameLoop = setInterval(gameLoop, 10); // Divide MS/50
        break; 
    case 6:
        audioElement.setAttribute('src', 'Audio/bensound-retrosoul.mp3');
        var gameLoop = setInterval(gameLoop, 11.2148); // Divide MS/50
        break;  
     case 7:
        audioElement.setAttribute('src', 'Audio/bensound-rumble.mp3');
        var gameLoop = setInterval(gameLoop, 8.5714); // Divide MS/50
        break;  
    case 8:
        audioElement.setAttribute('src', 'Audio/bensound-summer.mp3');
        var gameLoop = setInterval(gameLoop, 11.3208); // Divide MS/50 
        break;                   
    default:
        alert("ALERT: TEST SLOW CIRCLE SPEED (INTERVAL)");
        var gameLoop = setInterval(gameLoop, 90); // TEST INTERVAL
        break;
    }
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
        timeRemain.innerHTML = m+":"+s; //append minutes and seconds left to targeted html id
});


function clickOne(){
  $(".button1")
    .mouseup(function() {
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    audioElement.play();
    $(this).css("background-color","white");
    console.log("clickOne");
    checkStatus();
  });
}
clickOne();

function clickTwo(){
  $(".button2")
    .mouseup(function() {
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/wood.wav');
    audioElement.play();
    $(this).css("background-color","white");
    console.log("clickTwo");
    checkStatus();
  });
}
clickTwo();

function clickThree(){
  $(".button3")
    .mouseup(function() {
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/drum.wav');
    audioElement.play();
    $(this).css("background-color","white");
    console.log("clickThree");
    checkStatus();
  });
}
clickThree();

  function checkStatus(){  // SEMI WORKING
    if (currentSize <= 450  && currentSize >= 370 ) {
      runningScore = runningScore + 10; 
      $("#scoreValue").text("MISS CLICK : "+runningScore);
      MISS = MISS + 1;
      $("#MISS").text("MISS CLICK : "+MISS);    
    } 
    else if (currentSize <= 369  && currentSize >= 300) {
      runningScore = runningScore + 50; 
      $("#scoreValue").text("OK CLICK : "+runningScore); 
      OK = OK + 1;
      $("#OK").text("OK CLICK : " +OK);  
    } 
    else if (currentSize <= 299  && currentSize >= 200) {
      runningScore = runningScore + 100; 
      $("#scoreValue").text("PERFECT CLICK : "+runningScore); 
      PERFECT = PERFECT + 1;
      $("#PERFECT").text("PERFECT CLICK : "+PERFECT);  
    } 
    else{
      alert("ERROR SCORE");
    }
  }

//var randomNumber = Math.floor(Math.random()*3);
//// TESTING PURPOSES
var randomNumber = 1; // Start on middle circle!
//var gameLoop = setInterval(gameLoop, 11.3207547169811); // NORMAL SPEED - 106 BPM
//var gameLoop = setInterval(gameLoop, 100); // TEST SPEED OF SCORING - SLOW

function gameLoop(){
  switch(randomNumber) {
      // DO NOT!!!!!! clickOne, clickTwo or ClickThree here or you WILL GET DEAFENED - RIP :L
      case 0:        
          click1Valid = true; 
          retractCircle1();
          break;
      case 1:
          click2Valid = true;
          retractCircle2();
          break;
      case 2:
          click3Valid = true;
          retractCircle3();
          break;          
      default:
          alert("Math Random Returned Invalid Circle Choice!");
          break;
      }
}

// // THIS FUNCTION DOESNT WORK YET ??? < CHECK THIS FUNCTION 
// function checkClickValid(){
//   if (click1Valid == true){
//     click2Valid = false;
//     click3Valid = false;
//     console.log("CLICK ONE IS READY")
//     clickOne();
//   }
//   else if (click2Valid == true){
//     click1Valid = false;
//     click3Valid = false;
//     console.log("CLICK ONE IS READY")
//     clickTwo();
//   }
//   else if (click3Valid == true){
//     click1Valid = false;
//     click2Valid = false;
//     console.log("CLICK ONE IS READY")
//     clickThree();
//   }
// }
// checkClickValid();

  function retractCircle1() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //CHECK what state the outer circle is at, for ACCURACY and SCORING
    // if (currentSize <= 450  && currentSize >= 370 ) {
    //   $(".circle1").css("background-color","red");
    // } 
    // else if (currentSize <= 369  && currentSize >= 300) {
    //   $(".circle1").css("background-color","yellow");
    // } 
    // else if (currentSize <= 299  && currentSize >= 200) {
    //   $(".circle1").css("background-color","green");
    // } 
    // else{
    //   $(".button1").css("background-color","blue");
    // }
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      console.log("CIRCLE 1 CLAP");
      decreasing == false;
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
    if (currentSize <= 450  && currentSize >= 370 ) {
      $(".circle2").css("background-color","red");
    } 
    else if (currentSize <= 369  && currentSize >= 300) {
      $(".circle2").css("background-color","yellow");
    } 
    else if (currentSize <= 299  && currentSize >= 200) {
      $(".circle2").css("background-color","green");
    } 
    else{
      $(".circle2").css("background-color","blue");
    }
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      console.log("CIRCLE 2 WHISTLE");
      decreasing == false;
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
    // if (currentSize <= 450  && currentSize >= 370 ) {
    //   $(".circle3").css("background-color","red");
    // } 
    // else if (currentSize <= 369  && currentSize >= 300) {
    //   $(".circle3").css("background-color","yellow");
    // } 
    // else if (currentSize <= 299  && currentSize >= 200) {
    //   $(".circle3").css("background-color","green");
    // } 
    // else{
    //   $(".circle3").css("background-color","blue");
    // }
   if (currentSize === minSize) {
    audioElement.play();
    currentSize = 450;
    console.log("CIRCLE 3 DRUM");
    decreasing == false;
    randomNumber = Math.floor(Math.random()*3);
    return;
   }
  if (decreasing == true) {
    (currentSize = currentSize - 5);
  }
  $(".circle3").css("height", currentSize);
  $(".circle3").css("width", currentSize);    
  }

}, 1600); //DELAY ALL WHEN LOAD PLAY-PAGE, DELAY 1.5 seconds.

});
