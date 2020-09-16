var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
var highScorePrint = document.querySelector(".scoresHTML");

window.addEventListener("load", function(){printHighScore()});

function printHighScore() {
    highscores = scoresSorted(highscores, 'score');

    for (var i = 0; i < highscores.length; i++) {
      console.log(highscores[i].secondsLeft);
      var home = document.createElement("li"); 
      var words = document.createTextNode(highscores[i].name + ": " + highscores[i].secondsLeft)  ; 
      home.appendChild(words);
      highScorePrint.appendChild(home);
    }
}

function scoresSorted(array, key) {
  return array.sort(function(a,b) {
    if (a.secondsLeft < b.secondsLeft) {
      return 1;
    }
    return -1;
  });
}

