function openRule() {
    document.querySelector("#game-rule").style.display = "block"
}

function closeRule() {
    document.querySelector("#game-rule").style.display = "none";
}
function nextButton() {
    window.location.href = "./celebration.html";
}


//local storage
let yourScore = localStorage.getItem("yourScoreSaved") || 0;
document.querySelector(".your-score").innerText = yourScore;
let computerScore = localStorage.getItem("computerScoreSaved") || 0;
document.querySelector(".computer-score").innerText = computerScore;

// storing the input in an array by user and computer
let input = [];
function inputTool(score) {
    if (score === 5) {
        input.push("rock");
    }
    else if (score === 10) {
        input.push("paper");
    }
    else {
        input.push("scissor");
    }
}



//genrating random computer score
let compScore = [5, 10, 15];
function random() { return Math.floor(Math.random() * 3); }

//user input and storing in local storage and switching to winning desgin template
function rockScore() {
    let yourscore = document.querySelector(".your-score").innerText = 5;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();
}
function scissorScore() {
    let yourscore = document.querySelector(".your-score").innerText = 15;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();

}
function paperScore() {
    let yourscore = document.querySelector(".your-score").innerText = 10;
    let computerscore = document.querySelector(".computer-score").innerText = compScore[random()];
    inputTool(yourscore);
    inputTool(computerscore);
    localStorage.setItem("yourScoreSaved", yourscore);
    localStorage.setItem("computerScoreSaved", computerscore);
    winningDesgin();
}

//wining design template
function winningDesgin() {
    let windesign = document.querySelector(".winning-template");
    windesign.style.width = "50%";
    windesign.style.flexDirection = "row";
    windesign.innerHTML =
        `<div class="circle1 userCircle1">
    <div class="circle2 userCircle2">
    <span class="choosen-option-text">YOU PICKED</span>
    <div class="choosen-option-logo userCircle3">
    <div class="${input[0]}">
        <img src="./assets/${input[0]}.png" alt="userpicked" class="game-tool-logo">
        </div>
    </div>
    </div>
</div>
<div class="winlose">
    <p class="changing-text">${winningDecide()}</p><br>
    <p class="constant-winning-text">AGAINST PC</p> <button class="play-again" onclick="playAgain()">PLAY
        AGAIN</button>
</div>
<div class="circle1 compCircle1" >
    <div class="circle2 compCircle2">
    <span class="choosen-option-text ">PC PICKED</span>
<div class="choosen-option-logo compCircle3" >
    <div class="${input[1]}">
        <img src="./assets/${input[1]}.png" alt="computerpicked" class="game-tool-logo">
    </div>
    </div>
</div>
</div>`
    if (input[0] == input[1]) {
        document.querySelector(".constant-winning-text").innerText = "";
        document.querySelector(".play-again").innerText = "REPLAY";
        document.querySelector(".changing-text").style.top = "40px";
    }
    else if (input[1] < input[0]) {
        document.querySelector(".userCircle1").style.background = "rgba(46, 154, 37, 0.3)"
        document.querySelector(".userCircle2").style.background = "rgba(46, 154, 37, 0.6)"
        document.querySelector(".userCircle3").style.background = "rgba(46, 154, 37, 0.8)"
    }
    else {
        document.querySelector(".compCircle1").style.background = "rgba(46, 154, 37, 0.3)"
        document.querySelector(".compCircle2").style.background = "rgba(46, 154, 37, 0.6)"
        document.querySelector(".compCircle3").style.background = "rgba(46, 154, 37, 0.8)"
    }

}

let winningDecide = function () {
    if (input[0] > input[1]) {
        document.querySelector(".next-button").style.display = "block";
        return "YOU WIN";
    }
    else if (input[0] < input[1]) {
        return "YOU LOST"
    }
    else {
        return "TIE UP";
    }
}

//game reset
function playAgain() {
    localStorage.setItem("yourScoreSaved", 0);
    localStorage.setItem("computerScoreSaved", 0);
    window.location.href = "./index.html";
}

