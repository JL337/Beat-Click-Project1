$(document).ready(function () {

var currentSize = 450; //Current size of the outer circle
var minSize = 200; //Minimum size of the outer circle
var decreasing = true; // While true the outer circle with decrease in size
var runningScore = 0; //total score so far gained
var miss = 0; // MISSED clicks - Score +10
var ok = 0; // OK clicks - Score +50
var perfect = 0; // PERFECT clicks - Score +100
var clickFired = false; // Used later to check if player is clicking more than once per inner circle.
var randomNumber = Math.floor(Math.random()*3); //Chooses the circle randomly
var randomAudio = Math.floor(Math.random()*9); // Choosen random song from tracks. Tracks index, 0-8
var button = $(".button");// All Inner circles
var circle = $(".circle");// All Outer circles
var interval; //Game loop interval

//Click "Return Home", to return to start page
function clickToHome(){
    home.addEventListener("click", function() 
    {
      location.href = 'index.html';
    });
}
//Ends the game if 10 misses have occured or current audio duration runs down to 00:00
function endTheGame(){
  clearInterval(interval);
  $("#scoreValue").css("color","white");
    audioElement.pause();
    $("#scoreValue").text("Game Over! Final Score is: "+runningScore);
  setTimeout(function(){
    $("#scoreValue").text("Now returning to start screen!");
    setTimeout(function(){
      location.href = 'index.html';
    }, 2500);
  }, 3000);
}  
//Time of 1 beat in ms = 1000 * 60 / BPM = 60000 / BPM
//To do 1 full outer circle contraction, it goes from 450-250 size. Each decreases by 5 at a time.
//To calculate speed, (60,000/BPM)/50 = speed, 1/4 note beats
//Currently usiing (60,000/BPM)/50)*2 = speed << Using this one for easier end user experience,
//1/2 note beats are currently used
var songsList = [{ //ALL speeds below are to a 1/2 note beat!
  file: "bensound-badass.mp3", //0 - BPM 120
  speed: 20,
  },
  {
  file: "bensound-dance.mp3", //1 - BPM 135 
  speed: 17.7778,
  },
  {
  file: "bensound-goinghigher.mp3", //2 - BPM 121
  speed: 19.8347,
  },
  {
  file: "bensound-happyrock.mp3", //3 - BPM 180 
  speed: 13.3333,
  },
  {
  file: "bensound-house.mp3", //4 - BPM 120 
  speed: 20,
  },
  {
  file: "bensound-moose.mp3", //5 - BPM 120
  speed: 20,
  },
  {
  file: "bensound-retrosoul.mp3", //6 - BPM 107
  speed: 22.4299,
  },
  {
  file: "bensound-rumble.mp3", //7 - BPM 140
  speed: 17.1429,
  },
  {
  file: "bensound-summer.mp3", //8 - BPM 106
  speed: 22.6415,
  }
]
// Choose song track data from the array
var song = songsList[randomAudio]; //Choose a random index regarding song data from songList
var audioElement = document.createElement('audio'); //Prep main background audio to be loaded
audioElement.setAttribute('src', 'Audio/'+song.file); //Grab track name from songList
//Controls the timer display on play-screen. Noted as, Time Left: 00:00
function timer(){
  audioElement.play(); //Play the randomly chosen song
  $("#songName").text("Now Playing: "+song.file); //Display currently playing song, Now Playing:
  audioElement.addEventListener("timeupdate", function() {
  var timeleft = document.getElementById('timeRemain');
  var duration = parseInt(audioElement.duration); // Parse in song total duration, seconds
  var currentTime = parseInt(audioElement.currentTime); // Parse in song current position, seconds
  var timeLeft = duration - currentTime; // Time left is always equal to max duration - current
  var s; 
  var m;
  s = timeLeft % 60; // Seconds left, eg. 10 seconds
  m = Math.floor( timeLeft / 60 ) % 60; // Minutes left, eg 2minutes.
  s = s < 10 ? "0"+s : s; // Seconds less than 10, display 0+seconds, else dont add extra zero.Eg.00:05
  m = m < 10 ? "0"+m : m; // Minutes less than 10, display 0+minutes, else dont add extra zero.Eg.01:00
  timeRemain.innerHTML = "Time Left: "+m+":"+s; //append minutes and seconds left to Time Left on scorebox 
  
  if (timeLeft <= 60){
    $("#timeRemain").css("color","orange"); // If 60 seconds or less left change colour of Time Left to orange
  }
  if(timeLeft <= 30){
    $("#timeRemain").css("color","red");// If 30 seconds or less left change colour of Time Left to red
  }
  if (timeLeft === 0){ // If the timer goes to 00:00, end the game!
    endTheGame();
    return;
  }      
  });
}
//Function checkStatus checks the current radius of the outer circle 
// and adds it to score after comparison.
// This executes after a valid mouse click on the correct button circle.
function checkStatus(){  
  if (currentSize <= 450  && currentSize >= 310 ) {
    runningScore = runningScore + 10; 
    $("#scoreValue").text("MISS +10! : "+runningScore);
    miss = miss + 1;
    $("#scoreValue").css("color","red");
    $("#miss").text("MISS CLICKS : "+miss);    
    if (miss === 10){ // If 10 missed clicks occur end the game!
      endTheGame(); // End the game!
      return;
    }
  } 
  else if (currentSize <= 309  && currentSize >= 240) {
    runningScore = runningScore + 50; 
    $("#scoreValue").text("OK +50! : "+runningScore); 
    ok = ok + 1;
    $("#scoreValue").css("color","#C8722E");
    $("#ok").text("OK CLICKS : " +ok);  
  } 
  else if (currentSize <= 239  && currentSize >= 200) {
    runningScore = runningScore + 100; 
    $("#scoreValue").text("PERFECT +100! : "+runningScore);
    $("#scoreValue").css("color","green"); 
    perfect = perfect + 1;
    $("#perfect").text("PERFECT CLICKS : "+perfect);  
  } 
  else{
    alert("ERROR SCORE - NOT DEFINED");
  }
}
//Function clickAll affects the button css as well as on-click sounds and controls
function clickAll(innerCircle){
  $(innerCircle).mouseup(function() {
    $(innerCircle).css("background-color","transparent");//On mouse de-press change button to transparent
  });
  $(innerCircle).mousedown(function() {
    if(!clickFired && $(button).index(innerCircle) == randomNumber) { //Compares valid inner circle and valid outer circle
      clickFired = true; //Checks for only one mouse click, per one full outer circle retraction only
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'Audio/wood.wav');
      audioElement.play(); //Play the inner circle click sound
      $(innerCircle).css("background-color","black"); //Change button to black briefly on click
      checkStatus();     
    }
  });
}
//Function retractCircle controls the visuals and speed of outer circle retraction
function retractCircle(circleNum) {
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
    currentSize = 450;
    console.log("CIRCLE RETRACT: "+circleNum+" DONE");
    decreasing == false;
    clickFired = false;
    randomNumber = Math.floor(Math.random()*3); //Choose next random circle
    return;
  }  
  if (decreasing == true) {
    (currentSize = currentSize - 5);//Decrease the outer circle size
  }
  $(circleNum).css("height", currentSize);
  $(circleNum).css("width", currentSize);    
}
//Function gameLoop controls which circle will randomly be picked next, also controls valid button click
function gameLoop(){
  clickAll(button[randomNumber]);
  retractCircle(circle[randomNumber]);
}

clickToHome();

setTimeout(function(){ 
  interval = setInterval(gameLoop, +song.speed); //Controls how long 1 full outer circle retract lasts for
  timer();
}, 2200);

});
