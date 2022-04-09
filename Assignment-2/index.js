const tiles = Array.from(document.querySelectorAll('.tile'));
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');
const pointTable = document.getElementById('points');

// 9 Board Spaces
let board = ['', '', '', '', '', '', '', '', ''];

// X Starts the Game
let currentPlayer = 'X';
let isGameActive = true;

// Game Conclusion Variables
const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

let pointsX = 0;
let pointsO = 0;
let leaderBoardConsideration;
let iteration = 1;
let arrayVal = 1;

let count = 0;

// Reset Button Audio
// const alarmAudio = document.getElementById("alarm-audio");
// alarmAudio.src = "http://soundbible.com/grab.php?id=1540&type=mp3";
// alarmAudio.volume = 1;
// alarmAudio.load();

// Background Audio
// const backgroundAudio = document.getElementById("background-audio");
// backgroundAudio.src = "background.mp3";
// backgroundAudio.volume = 0.5;
// backgroundAudio.load();

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

	for (let i = 0; i <= 7; i++) {
		const winCondition = winningConditions[i];
		const a = board[winCondition[0]];
		const b = board[winCondition[1]];
		const c = board[winCondition[2]];

		if (a === '' || b === '' || c === '') {
			continue;
		}

		if (a === b && b === c) {
			roundWon = true;
			break;
		}
	}

	if (roundWon) {
		if (currentPlayer === 'X')
			announce(PLAYERX_WON);
		else
			announce(PLAYERO_WON);
		
		isGameActive = false;
		return;
	}

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

	announcer.classList.remove('hide');
};

// Validation (Makes Sure that you Don't Override a Used Space)
const isValidAction = (tile) => {
	if (tile.innerText === 'X' || tile.innerText === 'O'){
		return false;
	}

	return true;
};

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
	// alarmAudio.play();
}

// Plays Background Music
const playBackground = () => {
	// backgroundAudio.play();
}

// Change from Start Screen to the Game
const cont = () => {
	document.getElementById('main').style.display = 'block';
	document.getElementById('start').style.display = 'none';
	document.getElementById('leaderboard').style.display = 'block';
}

tiles.forEach( (tile, index) => {
	tile.addEventListener('click', () => userAction(tile, index));
});

function printScore() {
	let topPoints = [];

	pointTable.innerHTML = '';

	if (pointsX > pointsO) {
		topPoints.push(pointsX);
	} else if (pointsO > pointsX) {
		topPoints.push(pointsO);
	} else {
		topPoints.push(pointsX);
	}
  
	let orderTopPoints = topPoints.sort((a, b) => a - b);
	let finalOrderTopPoints = orderTopPoints.slice(0, 5);

	finalOrderTopPoints.forEach(function(elements) {
		let newElement = document.createElement("div");
		newElement.innerHTML = 
		`
			<tr>
				<td>1<td>
				<td>${finalOrderTopPoints[0]}<td>
			<tr>
			<br>
			<tr>
				<td>2<td>
				<td>${finalOrderTopPoints[1]}<td>
			<tr>
			<br>
			<tr>
				<td>3<td>
				<td>${finalOrderTopPoints[2]}<td>
			<tr>
			<br>
			<tr>
				<td>4<td>
				<td>${finalOrderTopPoints[3]}<td>
			<tr>
			<br>
			<tr>
				<td>5<td>
				<td>${finalOrderTopPoints[4]}<td>
			<tr>
		`;

		pointTable.appendChild(newElement);
		iteration++
		arrayVal++;
	});

	iteration = 0;
	arrayVal = 0;
	pointsX = 0;
	pointsO = 0;
	resetBoard();
	pointTable.deleteItem(newElement);
}

// Clicking Reset Button Actions
resetButton.addEventListener('click', resetBoard);
// resetButton.addEventListener('click', playSound);

// Start Music and Change Page when Start is CLicked
document.getElementById('start').addEventListener('click', cont);
// document.getElementById('start').addEventListener('click', playBackground);

document.getElementById('end-game').addEventListener('click', printScore);

// setInterval(playBackground, 1000);

function saveLeaderboardToLocalStorage() {
	localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}