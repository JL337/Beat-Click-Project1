$(document).ready(function() {

console.log("Start.js Javascript is READY!")

function clickToPlay(){ //Button to start game, click
    playNow.addEventListener("click", function() {
    window.location.href = 'beat-click.html';
 	});
 }
clickToPlay();
});



