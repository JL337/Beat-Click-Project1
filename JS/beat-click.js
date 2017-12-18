//var msPerBeat = (1000*60)/ bpm
//ms_per_beat = 1000 * 60 / bpm
// Filename: bensound-summer.mp3
// Type: audio/mp3
// Size: 3398kb
// BPM: 106
// var interval = setInterval(oneBeat, 11.32);
// 566miliseconds for one beat.
//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM

$(document).ready(function () {

// var randomChoice = Math.floor((Math.random() * 3)+1); 
// console.log("RANDOM CHOICE IS: "+randomChoice);
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
var randomChoice = 0;

function clickToHome(){
    home.addEventListener("click", function() {
    window.location.href = 'start.html';
  });
 }
clickToHome();

setTimeout(function () {

  //Play Main Song
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

        // if ( m === 0 || s === 0){
        // window.location.href = 'form2.html';
        // }   
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
    //CHECK HERE FOR COMPARISON SCORE
    console.log("clickOne");
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
    //CHECK HERE FOR COMPARISON SCORE
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

function oneBeat(){
    var randomChoice = Math.floor((Math.random() * 1)+1);   
    console.log("RANDOM CHOICE: CIRCLE "+randomChoice);
    // Change INNER number next to the *, to 1,2 or 3, to use multile circles.
    // CHANGE OUTER NUMBER ONLY: To ISOLATE single circles, use 1,2,3 respectively.
    if (randomChoice === 1){
      var interval1 = setInterval(function(){ retractCircle1() }, 11.3207547169811);
      console.log("CHOICE === 1");
    }
    else if (randomChoice === 2){
      var interval2 = setInterval(function(){ retractCircle2() }, 11.3207547169811);
      console.log("CHOICE === 2");
    }
    else {
      var interval3 = setInterval(function(){ retractCircle3() }, 11.3207547169811);
      console.log("CHOICE === 3");
    }
}
oneBeat();

  // function checkStatus(){
  //   if (currentSize <= 450  && currentSize >= 370 ) {
  //     checkStatus = 10; // BAD - 10 points
  //     console.log("checkStatus points are: "+checkStatus);
  //     return checkStatus; 
  //   } 
  //   else if (currentSize <= 369  && currentSize >= 300) {
  //     checkStatus = 25; // OK - 25 points
  //     console.log("checkStatus points are: "+checkStatus);
  //     return checkStatus;
  //   } 
  //   else if (currentSize <= 299  && currentSize >= 200) {
  //     checkStatus = 50; // GREAT - 50 points
  //     console.log("checkStatus points are: "+checkStatus);
  //     return checkStatus;
  //   } 
  //   else{
  //     checkStatus = 0;
  //     console.log("checkStatus points are: "+checkStatus);
  //     return checkStatus;
  //   }
  // }

  function retractCircle1() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    //CHECK what state the outer circle is at
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
      decreasing = true;
      console.log("CIRCLE 2 CLAP");
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(".circle1").css("height", currentSize);
    $(".circle1").css("width", currentSize);  
    return;
  }

  function retractCircle2() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/whistle.wav');
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      decreasing = true;
      console.log("CIRCLE 2 CLAP");
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(".circle2").css("height", currentSize);
    $(".circle2").css("width", currentSize);  
    return;
  }


  function retractCircle3() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/normal.wav');
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      decreasing = true;
      console.log("CIRCLE 2 CLAP");
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(".circle3").css("height", currentSize);
    $(".circle3").css("width", currentSize);  
    return;
  }

}, 1600); //DELAY ALL WHEN LOAD PLAY-PAGE, DELAY 1.5 seconds.

});
