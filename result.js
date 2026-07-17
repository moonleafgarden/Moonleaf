const score = Number(localStorage.getItem("score"));

const scores = JSON.parse(localStorage.getItem("levelScores"));

const levelText = document.getElementById("level");
const scoreText = document.getElementById("score");
const startButton = document.getElementById("start");

scoreText.textContent = `Score: ${score} / 30`;

let level = "A1";
let page = "a1.html";

/* Highest completed level */

if(scores.C2 >= 3){

    level = "⭐ C2";
    page = "c2.html";

}
else if(scores.C1 >= 3){

    level = "🌙 C1";
    page = "c1.html";

}
else if(scores.B2 >= 3){

    level = "🌿 B2";
    page = "b2.html";

}
else if(scores.B1 >= 3){

    level = "📖 B1";
    page = "b1.html";

}
else if(scores.A2 >= 3){

    level = "🍃 A2";
    page = "a2.html";

}
else{

    level = "🌱 A1";
    page = "a1.html";

}

levelText.textContent = level;

startButton.onclick = function(){

    location.href = page;

};
