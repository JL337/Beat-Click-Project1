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

console.log( "Javascript Ready To Go!" ); 
console.log( "START" );

// function clickToHome(){
//     home.addEventListener("click", function() {
//     window.location.href = 'start.html';
//   });
//  }
// clickToHome();

setTimeout(function () {

  // Play Main Song
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Audio/bensound-summer.mp3');
  audioElement.play();

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
  // var secs = 1000;

// Timing function needs fixing
//   var id = setInterval(function(){ 
//   for ( i = 1000 ; i > 0;i --){
//     secs--; 
//     console.log(secs);
//     if(secs = 0){
//     clearInterval(id);
//     alert('Game Over!');
//    }
//   }
// }, 1200);

function clickOne(){
  $(".button1")
    .mouseup(function() {
    $(this).css("background-color","transparent");
  })
    .mousedown(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    audioElement.play();
    $(this).css("background-color","black");
    //CHECK HERE FOR COMPARISON SCORE
    console.log("clickOne");
  });
}
clickOne();

// function clickTwo(){
//   $(".button2")
//     .mouseup(function() {
//     $(this).css("background-color","transparent");
//   })
//     .mousedown(function() {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'Audio/whistle.wav');
//     audioElement.play();
//     $(this).css("background-color","yellow");
//     //CHECK HERE FOR COMPARISON SCORE
//     console.log("clickTwo");
//   });
// }
// clickTwo();

// function clickThree(){
//   $(".button3")
//     .mouseup(function() {
//     $(this).css("background-color","transparent");
//   })
//     .mousedown(function() {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'Audio/normal.wav');
//     audioElement.play();
//     $(this).css("background-color","red");
//     //CHECK HERE FOR COMPARISON SCORE
//     console.log("clickThree");
//   });
// }
// clickThree();

function oneBeat(){
    var randomChoice = Math.floor((Math.random() * 1)+1);   
    console.log("RANDOM CHOICE: CIRCLE "+randomChoice)
    // THIS IS BUGGED: Change inner number next to the *, to 1,2 or 3, to use multile circles.
    // CHANGE OUTER NUMBER ONLY: To ISOLATE single circles, use 1,2,3 respectively.
    if (randomChoice === 1){
      //var interval1 = setInterval(retractCircle1, 11.32);
      var interval1 = setInterval(function(){ retractCircle1() }, 11.32);
      console.log("CHOICE === 1");
      // retractCircle1();
    }
    else if (randomChoice === 2){
      var interval2 = setInterval(function(){ retractCircle2() }, 11.32);
      //var interval = setInterval(retractCircle2, 11.32);
      console.log("CHOICE === 2");
      // retractCircle2();
    }
    else {
      var interval3 = setInterval(function(){ retractCircle3() }, 11.32);
      //var interval = setInterval(retractCircle3, 11.32);
      console.log("CHOICE === 3");
      // retractCircle3();
    }
}
oneBeat();

// clearInterval(interval1);

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
    //put automatic audio on here, comment two lines back in
    // var audioElement = document.createElement('audio');
    // audioElement.setAttribute('src', 'Audio/clap.wav');

    //CHECK what state the outer circle is at
    if (currentSize <= 450  && currentSize >= 370 ) {
      $(".circle1").css("background-color","red");
    } 
    else if (currentSize <= 369  && currentSize >= 300) {
      $(".circle1").css("background-color","yellow");
    } 
    else if (currentSize <= 299  && currentSize >= 200) {
      $(".circle1").css("background-color","green");
    } 
    else{
      $(".circle1").css("background-color","black");
    }

    if ((currentSize === minSize) ) {
      currentSize = 450;
      decreasing = true;
      audioElement.play();
      console.log("CIRCLE 1 CLAP");
      return;
      // console.log("currentSize is: "+currentSize);
      // return currentSize;
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }

    $(".circle1").css("height", currentSize);
    $(".circle1").css("width", currentSize);
  }

  function retractCircle2() {

    // //CHECK what state the outer circle is at
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
    //   $(".circle1").css("background-color","black");
    // }

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/whistle.wav');
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      decreasing = true;
      console.log("CIRCLE 2 CLAP");
      return;
    }
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(".circle2").css("height", currentSize);
    $(".circle2").css("width", currentSize);  
  }

  function retractCircle3() {

    // //CHECK what state the outer circle is at
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
    //   $(".circle1").css("background-color","black");
    // }

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/normal.wav');
    if (currentSize === minSize) {
      currentSize = 450;
      decreasing = true;
      audioElement.play();
      console.log("CIRCLE 3 DRUM");
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
