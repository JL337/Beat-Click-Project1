$(document).ready(function() {

console.log("READY!")

function clickToPlayAgain(){
    playAgain.addEventListener("click", function() {
    window.location.href = 'start.html';
 	});
 }
clickToPlayAgain();
});
