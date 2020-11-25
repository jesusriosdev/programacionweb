const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const DELAY_TIME = 500;

let playerTurn = false;
let moves = 0;
let cpuQuadrants = [];
let playerQuadrants = [];

let newGameButton = document.getElementById("start-game-button");

document.addEventListener("DOMContentLoaded", (e) => {


	const modalResult = document.getElementById("modal-result");
	const spanCloseResult = document.querySelector(`#modal-result .close`);
	spanCloseResult.onclick = function () {
		modalResult.style.display = "none";
	};

	window.onclick = function (event) {
		if (event.target == modalResult) {
			modalResult.style.display = "none";
		}
	};
});

function init() {
	cpuQuadrants = [];
	playerQuadrants = [];

    newGameButton.classList.add("hide");
    
    startSequence();
}

async function startSequence() {
    
	setInstruction('Observa!');
    setScore(cpuQuadrants.length);

    moves = 0;
    playerTurn = false;

    for(const q of cpuQuadrants) {
        

        const quadrant = document.querySelector(`div[data-key="${q}"]`);
        
        await sleep(DELAY_TIME);
        quadrant.classList.add('active');
        playSound(q);
        await sleep(DELAY_TIME);
        quadrant.classList.remove('active');
    }

    let randomNumber = Math.floor(Math.random() * 4) + 1;
    const quadrant = document.querySelector(`div[data-key="${randomNumber}"]`);

    await sleep(DELAY_TIME);
    quadrant.classList.add('active');
    playSound(randomNumber);
    await sleep(DELAY_TIME);
    quadrant.classList.remove('active');

    cpuQuadrants.push(randomNumber);

    playerTurn = true;
    
	setInstruction('A jugar!');
}

async function playerClick(number) {

    if(playerTurn === true) {
        playerQuadrants.push(number);

        playSound(number);

        const quadrant = document.querySelector(`div[data-key="${number}"]`);
        quadrant.classList.add('active');
        await sleep(200);
        quadrant.classList.remove('active');

        if(cpuQuadrants[moves] === number){
            moves++;

            if(moves === cpuQuadrants.length) {
                console.log('todo bien, nueva secuencia..');

                startSequence();
            }

        } else {
            // GAME OVER
            //console.log('game over..');
            showGameOverModal();
        }
    }
}

function showGameOverModal() {
	newGameButton.classList.remove('hide');
	// setScore(0);
	// setInstruction('');

	const modal = document.getElementById('modal-result');
	const resultText = document.querySelector(`#result-text`);
	resultText.innerHTML = `Game Over! Your score: ${cpuQuadrants.length - 1}`;
	modal.style.display = 'block';

	playerTurn = false;
}

function setScore(score) {
	const scoreText = document.querySelector('.info-score');
	scoreText.innerHTML = `Puntaje: ${score}`;
}

function setInstruction(instruction) {
	const instructionText = document.querySelector('.info-instruction');
	instructionText.innerHTML = instruction;
}

function playSound(number) {

    const audio = document.querySelector(`audio[data-key="${number}"]`);
    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
}