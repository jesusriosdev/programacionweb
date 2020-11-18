let winner = "";
let numberOfTurns = 0;
let turn = 1;
let moves = [];

const values = ["X", "O"];

document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById("modal-result");
    const tachita = document.querySelector('.close');

    tachita.onclick = function() {
        
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        
        if(event.target == modal) {
            modal.style.display = "none";
        }
    }
});

init();

function init() {
	console.log("Starting new game!");

	winner = "";
	numberOfTurns = 0;
	turn = 1;
	moves = [];

	const playerOneText = document.querySelector(".player-one-text");
	const playerTwoText = document.querySelector(".player-two-text");

	playerOneText.classList.remove("active");
	playerTwoText.classList.remove("active");

	playerOneText.classList.add("active");

	document.querySelectorAll(".square").forEach((cuadrito) => {
		cuadrito.innerHTML = "";
	});
}

function move(number) {
    console.log(`Square clicked: ${number}`);
    
    if(moves.includes(number) === false && winner === '') {
        moves.push(number);
        numberOfTurns++;

        const cuadrito = document.querySelector(`div[data-key="${number}"]`);
        cuadrito.innerHTML = values[turn - 1];

        winner = checkForWinner(values[turn - 1]);
        if(winner) {

            // Mostrar ganador.
            console.log('Alguien ganó');

            const modal = document.getElementById('modal-result');
            modal.style.display = "block";

            const winnerTextResult = document.querySelector('#winner-text-result');
            winnerTextResult.innerHTML = `Winner: Player ${turn}`;

            return;
        }

        if(numberOfTurns === 9) {
            // Mostrar empate
            console.log('empate');
            return;
        }

        const playerOneText = document.querySelector(".player-one-text");
        const playerTwoText = document.querySelector(".player-two-text");
        if(turn === 1) {

            turn = 2;

            playerOneText.classList.remove('active');
            playerTwoText.classList.add('active');
        }
        else {

            turn = 1;

            playerTwoText.classList.remove('active');
            playerOneText.classList.add('active');
        }
    }
}

function checkForWinner(v) {
    
	let square1 = document.querySelector(`div[data-key="${1}"]`);
	let square2 = document.querySelector(`div[data-key="${2}"]`);
	let square3 = document.querySelector(`div[data-key="${3}"]`);
	let square4 = document.querySelector(`div[data-key="${4}"]`);
	let square5 = document.querySelector(`div[data-key="${5}"]`);
	let square6 = document.querySelector(`div[data-key="${6}"]`);
	let square7 = document.querySelector(`div[data-key="${7}"]`);
	let square8 = document.querySelector(`div[data-key="${8}"]`);
    let square9 = document.querySelector(`div[data-key="${9}"]`);

    if(checkLines(square1, square2, square3, v)) return v;
    if(checkLines(square4, square5, square6, v)) return v;
    if(checkLines(square7, square8, square9, v)) return v;

    if(checkLines(square1, square4, square7, v)) return v;
    if(checkLines(square2, square5, square8, v)) return v;
    if(checkLines(square3, square6, square9, v)) return v;

    if(checkLines(square1, square5, square9, v)) return v;
    if(checkLines(square3, square5, square7, v)) return v;

    return '';
}

function checkLines(square1, square2, square3, value) {
    if(square1.innerHTML === value && square2.innerHTML === value && square3.innerHTML === value) {
        return true;
    }
}