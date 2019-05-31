var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");

var p1Display = document.getElementById("p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		p1score++;
		p1Display.textContent = p1score;
		if (p1score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}

});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2score++;
	p2Display.textContent = p2score;
		if (p2score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
};

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});































