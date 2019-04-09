

const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const username1 = localStorage.getItem("username");
const MAX_QUESTIONS = 10;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
var difficulty = localStorage.getItem("difficulty");
finalScore.innerText = mostRecentScore+'/100';
username2.innerText = username1;

function checkBeforeLoad(){
  if (mostRecentScore>=80){
    document.getElementById("userWonText").innerText='Congratulations! \n'+username1+'\n Now you can play with higher difficulty!';
    document.getElementById("restartButton").style.visibility='visible';
  //  document.getElementById("restartButton").value='Play Again with Higher Difficulty!';
    if (difficulty==='easy'){
      difficulty='medium';
    }
    else
      if (difficulty==='medium'){
        difficulty='hard';
      }
      else {
        difficulty='hard';
      }

    localStorage.setItem("difficulty",difficulty);
      localStorage.setItem("boolean","true");

  } else {
    //document.getElementById("restartButton").value='Play Again with same difficulty.'
    document.getElementById("userWonText").innerText='Bravo! \n'+username1+'\n Try again to play with same difficulty!';

  }

}

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  //window.location.assign("/");
  window.alert("Saved!");
  document.getElementById("username").value='';
};

  function bye(){

  let msg = "Are you sure you don't want to play?";
  if ( window.confirm(msg)){
  window.location.assign("index.html")
  }
}





