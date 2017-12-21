$(document).ready(function () {
console.log( "Javascript Ready To Go!" ); 
console.log( "START" );

var currentSize = 450; // Current size of the outer circle
var minSize = 200; // The minimum size of the outer circle
var decreasing = true; // While true the outer circle with decrease in size
var runningScore = 0; //total score so far gained
var miss = 0; // MISSED clicks - Score 10
var ok = 0; // OK clicks - Score 59
var perfect = 0; // PERFECT clicks - Score 100
var clickFired = false; // Checks if click has been pressed already
var keyFired = false;
var checkRetract = 0;
var miss = 0;
var randomNumber = Math.floor(Math.random()*3); //Chooses the circle randomly
var button = [".button1", ".button2", ".button3"];
var circle = [".circle1", ".circle2", ".circle3"];
//var checkRetract = [1,2,3];
// clickAll((button[0], button[1], button[2]),(checkRetract[0], checkRetract[1], checkRetract[2]));
// clickAll(button[0], button[1], button[2]);


//Click "Return Home", to return to start page
function clickToHome(){
    home.addEventListener("click", function() 
    {
      location.href = 'start.html';
    });
}
//Ends the game if 10 misses have occured or current audio duration runs down to 00:00
function endTheGame(){
    alert("Game Over! Your Final Score is: "+runningScore);
    location.href = 'start.html';
  }   
//randomAudio = Math.floor(Math.random()*9); // Choosen random song from tracks.
//randomAudio = 9; // TEST - CLICKS ONLY SLOW
randomAudio = 8; // SUMMER 
//randomAudio = 6; // RETROSOUL
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
  }
]
// Choose data from the array
var song = songsList[randomAudio]; 
$("#songName").text("Now Playing: "+song.file);
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'Audio/'+song.file);

//Controls the timer display on play-screen.
function timer(){
  audioElement.play();
  audioElement.addEventListener("timeupdate", function() {
  var timeleft = document.getElementById('timeRemain'), //assign new variable time left
      duration = parseInt(audioElement.duration), // parse in song total duration
      currentTime = parseInt(audioElement.currentTime), // parse in song current position
      timeLeft = duration - currentTime, // Time left is always equal to max duration - current
      s, m;
      s = timeLeft % 60; 
      m = Math.floor( timeLeft / 60 ) % 60;  
      s = s < 10 ? "0"+s : s; // seconds
      m = m < 10 ? "0"+m : m; // minutes
      timeRemain.innerHTML = "Time Left: "+m+":"+s; //append minutes and seconds left to targeted html id 
  if (timeLeft === 0){
    endTheGame();
    return;
  }      
  });
}
//Checks the current radius of the outer circle and adds it to score, VS mouse click.
  function checkStatus(){  
    if (currentSize <= 450  && currentSize >= 310 ) {
      runningScore = runningScore + 10; 
      $("#scoreValue").text("MISS CLICK : "+runningScore);
      miss = miss + 1;
      $("#MISS").text("MISS CLICK : "+miss);    
      if (miss === 10){ // if 10 misses occur end the game!
        endTheGame(); // end the game
        return;
      }
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      runningScore = runningScore + 50; 
      $("#scoreValue").text("OK CLICK : "+runningScore); 
      ok = ok + 1;
      $("#OK").text("OK CLICK : " +ok);  
    } 
    else if (currentSize <= 239  && currentSize >= 200) {
      runningScore = runningScore + 100; 
      $("#scoreValue").text("PERFECT CLICK : "+runningScore); 
      perfect = perfect + 1;
      $("#PERFECT").text("PERFECT CLICK : "+perfect);  
    } 
    else{
      alert("ERROR SCORE");
    }
  }

function clickAll(innerCircle){
  $(innerCircle).mouseup(function() {
    $(innerCircle).css("background-color","transparent");
  });
  $(innerCircle).mousedown(function() {
    if(!clickFired) {
      clickFired = true;
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play();
      $(innerCircle).css("background-color","black");
      console.log("Inner Circle: "+innerCircle+" clicked!");
      checkStatus();     
    }
  });
}

// var keys = [".button1", ".button2", ".button3"];
// var keyNum = [90,88,67]; // Z,X,C keys
// keyPress(keys, keyNum);

// function keyPress(keyUsed, keyValue){  
//   $(keyUsed).keyup(function(){
//     if (event.keyCode === keyValue){
//       $(keyUsed).css("background-color","black");
//     }
//   });
//   $(keyUsed).keydown(function(){
//     if(!keyFired){
//       keyFired = true;
//       if (event.keyCode === keyValue){
//         var audioElement = document.createElement('audio');
//         audioElement.setAttribute('src', 'Audio/clap.wav');
//         audioElement.play();
//         $(keyUsed).css("background-color","black");
//         }
//     }        
//   });
// }


  function retractCircle(circleNum) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Audio/clap.wav');
    if (currentSize <= 450  && currentSize >= 310 ) {
      $(circleNum).css("background-color","#000000");
    } 
    else if (currentSize <= 309  && currentSize >= 240) {
      $(circleNum).css("background-color","#C8722E");
    } 
    else if (currentSize <= 239  && currentSize >= 201) {
      $(circleNum).css("background-color","#4F084E");
    } 
    else{
      $(circleNum).css("background-color","transparent");
    }
    if (currentSize === minSize) {
      audioElement.play();
      currentSize = 450;
      console.log("CIRCLE RETRACT: "+circleNum+" DONE");
      decreasing == false;
      clickFired = false;
      keyFired = false;
      randomNumber = Math.floor(Math.random()*3);
      return;
    }  
    if (decreasing == true) {
      (currentSize = currentSize - 5);
    }
    $(circleNum).css("height", currentSize);
    $(circleNum).css("width", currentSize);    
  }

function gameLoop(){
  switch(randomNumber) {
      case 0:        
          clickAll(button[0]);
          retractCircle(circle[0]);
          break;
      case 1:
          clickAll(button[1]);
          retractCircle(circle[1]);
          break;
      case 2:
          clickAll(button[2]);
          retractCircle(circle[2]);
          break;          
      default:
          endTheGame();
          break;
      }
}

setTimeout(function(){ 
  clickToHome();
  setInterval(gameLoop, +song.speed); // This controls how fast each outer circle retracts
  timer();
  clickAll(button[0],button[1],button[2]);
  retractCircle(circle[0],circle[1],circle[2]);
  gameLoop();
}, 2000);

});

