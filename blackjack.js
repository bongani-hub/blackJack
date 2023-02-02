// //black jack app

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let cards = [];
let hasBlackJack = false;
let isAlive = false;

let sum = 0;

let message = "";

let player = {
	name: "Bongz",
	chips: 60,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": " + player.chips;

function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13) + 1;
	if (randomCard === 1) {
		return 11;
	} else if (randomCard > 10) {
		return 10;
	} else {
		return randomCard;
	}

	//or jus
	//return Math.floor(Math.random()*13)+1
}

function startGame() {
	isAlive = true;
	firstCard = getRandomCard();
	secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;

	renderGame();
}

function renderGame() {
	cardsEl.textContent = "Cards: ";
	for (i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = "sum:" + sum;
	if (sum <= 20) {
		message = "draw card";
	} else if (sum === 21) {
		message = "win";
		hasBlackJack = true;
	} else {
		//we dont need to specify if it is over 21
		message = "you lose";
		isAlive = false;
	}

	messageEl.textContent = message;
}
function newCard() {
	if (isAlive === true && hasBlackJack === false) {
		let card = getRandomCard();

		sum += card;
		cards.push(card);

		renderGame();
	}
}

console.log(isAlive);
console.log(hasBlackJack);

//first increment app

// let countEl = document.getElementById("count-el"); //passing an argument

// console.log(countEl);

// let count = 0;

// function increment() {
// 	// count = count + 1;
// 	count += 1; //plus egual sign same as above line
// 	countEl.textContent = count;
// 	console.log(count);
// }

//save function

// let saveEl = document.getElementById("save-el");

// function save() {
// 	let saveBtn = 0;

// 	let countStr = count + " - ";

// 	saveEl.textContent += countStr;
// 	countEl.textContent = 0;
// 	count = 0;
// 	console.log(saveEl);
// }

//increment

// let lapsCompleted = 0;
// function incrementLaps() {
// 	lapsCompleted = lapsCompleted + 1;
// }
// incrementLaps();
// incrementLaps();
// incrementLaps();

// console.log(lapsCompleted);

//welcome function

// let username = "bg";
// let name = "you have three new notifications";
// let messageToUser = name + "," + username + ",";

//  console.log(messageToUser);
// let name = "bongz" ;
// let greeting = "hi im bongz";
// let myGreeting = name + "," + greeting + ".";
// console.log(myGreeting);

//add emoji in welcome

// let welcomeEl = document.getElementById("welcome-el");
// let name = "bongz";
// let greeting = "hi mr ";
// let emoji = "";
// welcomeEl.innerText = greeting + "," + name + ",";
// console.log(emoji);

//full recap

// let firstName = "Bongz";
// let lastName = " gaanabo";
// let fullName = firstName + lastName;
// console.log(fullName);

//logging hi linda
// let name = "linda";
// let greeting = "hi";
// function hi() {
// 	console.log(name + greeting);
// }
// hi();

//adding and removing

// let myPoints = 3;
// function add3Points() {
// 	myPoints += 3;
// }

// function remove1Point() {
// 	myPoints -= 1;
// }
// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// console.log(myPoints);

//ERROr message !! but my version wont show error as a function

// let errorParagraph = document.getElementById(error);
// function btn() {
// 	let errorMessage = "error 404";
// 	errorParagraph.innerText = errorMessage;
// 	console.log("button clicked");
// }

//calculater app

// let num1 = 8;
// let num2 = 2;
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;
// let sumEl = document.getElementById("sum-el");
// console.log(sumEl);

// function add() {
// 	num3 = num1 + num2;
// 	sumEl.textContent = "Sum: " + num3;
// }

// function subtract() {
// 	sumEl.textContent = num1 - num2;
// }
// function divide() {
// 	sumEl.textContent = num1 / num2;
// }

// function multiply() {
// 	sumEl.textContent = "Sum:" + num1 * num2;
// }

//first if test basic

//  let age = 34;

//  if (age = 21) {
//  	console.log("not allowed");
//  } else if (age === 22) {
// 	console.log("welcome");
// } else {
// 	console.log("welcome ei");
// }

//second test

// let age = 1000;

// if (age < 100) {
// 	console.log("not eligible");
// } else if (age === 100) {
// 	console.log("eligible");
// } else {
// 	console.log("congrats already got one");
// }

//arrays

// let arrays = ["system engineer", "javascript learner", "python learner"];

// console.log(arrays[0]);
// console.log(arrays[1]);
// console.log(arrays[2]);
// for (let i = 0; i < 5; i += 1) {
// 	console.log(arrays.length[i]);
// }

// let sentence = ["hello", "my", "name", "is", "bongz"];
// let greetingEl = document.getElementById("greeting-el");
// for (i = 0; i < sentence.length; i++) {
// 	greetingEl.textContent += sentence[i] + " ";
// }

//counting

// for (let count = 0; count < 110; count += 10) {
// 	console.log(count);
// }

//returning values wont work on this update

// let player1Time = 105;
// let player2Time = 106;

// function getFastestRaceTime() {
// 	if (player1Time < player2Time) {
// 		return player1Time;
// 	} else if (player2Time < player1Time) {
// 		return player2Time;
// 	} else {
// 		return player1Time;
// 	}
// }
// let fastestRace = getFastestRaceTime();
// console.log(fastestRace);

// let race1 = 2;
// let race2 = 3;
// function totalRceTime() {
// 	if (race1 < race2) {
// 		return race1;
// 	} else if (race2 < race1) {
// 		return race2;
// 	} else {
// 		return race1;
// 	}
// }
// let raceTime = totalRceTime();
// console.log(raceTime);

//random number using Math.rand/math. operator
//let floorNumber = Math.floor(Math.random() * 6); // returns numbers without decimals
// console.log(floorNumber);

// function rollDice() {
// 	let floorNumber = Math.floor(Math.random() * 6) + 1; //0-6 not including 6
// 	return floorNumber;
// }
// console.log(rollDice());

//logical operators

// let hasSolvedChallenge = false;
// let hasHintsLLeft = true;

// if (hasHintsLLeft === false && hasHintsLLeft === false) {
// 	showSolution();
// }

// function showSolution() {
// 	console.log("showing solution");
// }

//objects

// let airBnd = {
// 	night: true,
// 	price: 250,
// 	room: "small",
// 	shop: ["cider", "whiskey"],
// };
// console.log(airBnd.night);
// console.log(airBnd.room);
// console.log(airBnd.price);
// console.log(airBnd.shop);

//recap of whole blackjack app

//arrays
//objects
//booleans
//if else statements
//comparison operators
//logical operators
//for loops
//math object
//return statements
//
