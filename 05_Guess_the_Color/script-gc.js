var colors = ["Purple", "Red", "Brown", "Orange"];
function startGame(){
    setInterval(timer, 1000);
    reset();
};

var checkmark = document.getElementById("checkmark");
var wrong = document.getElementById("wrong");
var correct = document.getElementById("correct");
var correctInt = 0

function checkColor(color, correctAnswer) {
    if(color===correctAnswer) {
        correctInt++;
        checkmark.classList.add("fadeAway");
    } else {
        wrong.classList.add("fadeAway");
    }
    setTimeout(function() {
        checkmark.classList.remove("fadeAway");
        wrong.classList.remove("fadeAway");
    },500);
    reset();
    correct.innerHTML = correctInt;
};

function reset() {

    var color1 = document.getElementById("color1");

    document.getElementById("start").style.display = "none";
    var random = Math.floor(Math.random() * 4);
    var random2 = Math.floor(Math.random() * 4);
    var correctAnswer = colors[random];
    var distraction = colors[random2];
    color1.innerHTML = distraction;
    color1.style.color = correctAnswer;
    color1.style.display = "block";
    addClick("Purple", correctAnswer);
    addClick("Red", correctAnswer);
    addClick("Brown", correctAnswer);
    addClick("Orange", correctAnswer);
}
function addClick(color, correctAnswer){
    var colorSpan = document.getElementById(color);
    let onclick = "checkColor('".concat(color,"','",correctAnswer,"')");
    colorSpan.setAttribute("onclick", onclick);
}

var countdown = 30;
function timer() {
    document.getElementById("time").innerHTML = countdown;
    if(countdown==0) {
        clearInterval(timer);
        alert("Game Over. Score: " + correctInt);
        location.reload();
    };
    countdown--;
};
