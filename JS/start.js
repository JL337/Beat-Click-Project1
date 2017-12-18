$(document).ready(function() {

console.log("READY!")

function clickToPlay(){
    playNow.addEventListener("click", function() {
    window.location.href = 'beat-click.html';
 	});
 }
clickToPlay();
});



