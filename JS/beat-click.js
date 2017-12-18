//var msPerBeat = (1000*60)/ bpm
//ms_per_beat = 1000 * 60 / bpm
// Filename: bensound-summer.mp3
// Type: audio/mp3
// Size: 3398kb
// BPM: 106
// var interval = setInterval(oneBeat, 11.32);
// 566miliseconds for one beat.
//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM

// var randomChoice = Math.floor(Math.random()*3); 
// console.log("RANDOM CHOICE IS: "+randomChoice);

$(document).ready(function () {


console.log( "Javascript Ready To Go!" ); 
console.log( "START" );


var currentSize = 450;
var minSize = 200;
var decreasing = true;
var checkStatus = 0;
var button1 = $(".button1");
var button2 = $(".button2");
var button3 = $(".button3");
var circle1 = $(".circle1");
var circle2 = $(".circle2");
var circle3 = $(".circle3");
// var randomChoice;
// var randomNumber = Math.floor(Math.random()*3);
// var gameLoop = setInterval(gameLoop, 11.3207547169811);


//Clcik to return to Home page
function clickToHome(){
    home.addEventListener("click", function() {
    window.location.href = 'start.html';
  });
 }
clickToHome();

function clickToScores(){
    finalScorePage.addEventListener("click", function() {
    window.location.href = 'scores.html';
  });
 }
clickToScores();

setTimeout(function () {
//Play Main Song AND check duration with clock.
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'Audio/bensound-summer.mp3');
audioElement.play();
audioElement.addEventListener("timeupdate", function() {
    var timeleft = document.getElementById('timeRemain'), //assign new variable time left
        duration = parseInt( audioElement.duration ), // parse in song total duration
        currentTime = parseInt( audioElement.currentTime ), // parse in song current position
        timeLeft = duration - currentTime, // Time left is always equal to max duration - current
        s, m;
        s = timeLeft % 60; //seconds
        m = Math.floor( timeLeft / 60 ) % 60; //minutes  
        s = s < 10 ? "0"+s : s;
        m = m < 10 ? "0"+m : m;  // returns 
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
    $(this).css("background-color","green");
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
    audioElement.setAttribute('src', 'Audio/whistle.wav');
    audioElement.play();
    $(this).css("background-color","yellow");
    console.log("clickTwo");
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
    audioElement.setAttribute('src', 'Audio/normal.wav');
    audioElement.play();
    $(this).css("background-color","red");
    console.log("clickThree");
  });
}
clickThree();

//var superInterval = setInterval(oneBeat,11.3207547169811);
//var randomChoice = 0;//Math.floor(Math.random()*3);

  function checkStatus(){  // SEMI WORKING
    if (currentSize <= 450  && currentSize >= 370 ) {
      $("#scoreValue").text(+25);  
    } 
    else if (currentSize <= 369  && currentSize >= 300) {
      $("#scoreValue").text(+50);
    } 
    else if (currentSize <= 299  && currentSize >= 200) {
      $(".#scoreValue").text(+100);
    } 
    else{
      $("#scoreValue").text(+0);
    }
  }

var randomNumber = Math.floor(Math.random()*3);
var gameLoop = setInterval(gameLoop, 11.3207547169811);

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
          alert("Math Random Returned Invalid!");
          break;
      }
}

  function retractCircle1() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    ////CHECK what state the outer circle is at, for ACCURACY and SCORING
    // if (currentSize <= 450  && currentSize >= 370 ) {
    //   $(".button1").css("background-color","red");
    // } 
    // else if (currentSize <= 369  && currentSize >= 300) {
    //   $(".button1").css("background-color","yellow");
    // } 
    // else if (currentSize <= 299  && currentSize >= 200) {
    //   $(".button1").css("background-color","green");
    // } 
    // else{
    //   $(".button1").css("background-color","black");
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
    audioElement.setAttribute('src', 'Audio/whistle.wav');
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
    audioElement.setAttribute('src', 'Audio/normal.wav');
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
