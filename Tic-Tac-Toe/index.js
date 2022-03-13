const tiles = Array.from(document.querySelectorAll('.tile'));
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

// 9 Board Spaces (Holds the X / O Board Values)
let board = ['', '', '', '', '', '', '', '', ''];

// X Starts the Game
let currentPlayer = 'X';

// Boolean to indicate Game Status
let isGameActive = true;

// Game Conclusion Variables
const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

let pointsX = 0;
let pointsO = 0;

let count = 0;

// Reset Button Audio
const alarmAudio = document.getElementById("alarm-audio");
alarmAudio.src = "http://soundbible.com/grab.php?id=1540&type=mp3";
alarmAudio.volume = 1;
alarmAudio.load();

// Background Audio
const backgroundAudio = document.getElementById("background-audio");
backgroundAudio.src = "background.mp3";
backgroundAudio.volume = 0.5;
backgroundAudio.load();

// Array index configurations which will lead to a victory
const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function handleResultValidation() {
	let roundWon = false;

	// Loops through winningConditions array (Researched)
	for (let i = 0; i <= 7; i++) {
		const winCondition = winningConditions[i];
		const a = board[winCondition[0]];
		const b = board[winCondition[1]];
		const c = board[winCondition[2]];

		// If there are any empty fields, repeat
		if (a === '' || b === '' || c === '') {
			continue;
		}
		
		// If all fields are equal, there's a winner
		if (a === b && b === c) {
			roundWon = true;
			break;
		}
	}

	// If Player "X" is active upon the roundWon condition turning true, they win
	if (roundWon) {
		if (currentPlayer === 'X')
			announce(PLAYERX_WON);
		else
			announce(PLAYERO_WON);
		
		isGameActive = false;
		return;
	}

	// Tie Condition
	if (!board.includes(''))
		announce(TIE);
}

// Changes text to announce player victory
const announce = (type) => {
	switch(type) {
		case PLAYERO_WON:
			announcer.innerHTML = 'Player O Won';
			pointsO++;
			document.getElementById('point-counter-O').innerHTML = pointsO;
			break;
		case PLAYERX_WON:
			announcer.innerHTML = 'Player X Won';
			pointsX++;
			document.getElementById('point-counter-X').innerHTML = pointsX;
			break;
		case TIE:
			announcer.innerText = 'Tie';
	}

	// Shows the banner with winning player
	announcer.classList.remove('hide');
};

// Validation (Makes Sure that you Don't Override a Used Space)
const isValidAction = (tile) => {
	if (tile.innerText === 'X' || tile.innerText === 'O'){
		return false;
	}

	return true;
};

// Receives an index parameter to set the corresponding array element
const updateBoard =  (index) => {
	board[index] = currentPlayer;
}

// Player Change (If Count is Even, Player X Plays, Otherwise Player O does)
const changePlayer = () => {
	if (count%2 == 0) {
		currentPlayer = 'X';
	} else {
		currentPlayer = 'O';
	}
}

// Update Board for Valid Moves and Change Player Initialisation
const userAction = (tile, index) => {
	if(isValidAction(tile) && isGameActive) {
		tile.innerText = currentPlayer;
		tile.classList.add(`player${currentPlayer}`);
		updateBoard(index);
		handleResultValidation();
		count++
		changePlayer();
	}
}

// Clear
const resetBoard = () => {
	board = ['', '', '', '', '', '', '', '', ''];
	isGameActive = true;
	announcer.classList.add('hide');

	if (currentPlayer === 'O') {
		changePlayer();
	}

	tiles.forEach(tile => {
		tile.innerText = '';
		tile.classList.remove('playerX');
		tile.classList.remove('playerO');
	});
}

// Reset Sound
const playSound = () => {
	alarmAudio.play();
}

// Plays BAckground Music
const playBackground = () => {
	backgroundAudio.play();
}

// Change from Start Screen to the Game
const cont = () => {
	document.getElementById('main').style.display = 'block';
	document.getElementById('start').style.display = 'none';
}

tiles.forEach( (tile, index) => {
	tile.addEventListener('click', () => userAction(tile, index));
});

// Clicking Reset Button Actions
resetButton.addEventListener('click', resetBoard);
resetButton.addEventListener('click', playSound);

// Start Music and Change Page when Start is CLicked
document.getElementById('start').addEventListener('click', cont);
document.getElementById('start').addEventListener('click', playBackground);

setInterval(playBackground, 1000);