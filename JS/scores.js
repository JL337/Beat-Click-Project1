$(document).ready(function () {
console.log("scores.js Javascript is READY!")

function clickToReturn(){ //Button to start game, click
    returnNow.addEventListener("click", function() {
    window.location.href = 'beat-click.html';
 	});
 }
clickToPlay();
});