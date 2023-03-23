let player = {
  name: "Fisayo",
  chips: 1000,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;

  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! you have got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum = sum + card;
    cards.push(card);
    console.log(cards);
  }
  renderGame();
}


// CHALLENGES


// let airBnbCastListings = {
//   available: true,
//   location: "Lagos, Nigeria",
//   houseNumber: 24,
//   equipments: ["bed", "dining", "television", "freezer"],
//   price: 160
// };

// console.log (airBnbCastListings.location)
// console.log (airBnbCastListings.equipments)



// const personObject = {
//   name: "Fisayo",
//   age: 30,
//   country: "NIGERIA",
// };

// function logData() {
//   console.log(
//     personObject.name +
//       " is " +
//       personObject.age +
//       " years old and lives in " +
//       personObject.country
//   );
// }

// logData();

//CONDITIONALS

// let age = 67;

// if (age < 6) {
//   console.log("We aren't going to collect a penny from you.");
// } else if (age >= 6 && age <= 17) {
//   console.log("You are getting a child discount");
// } else if (age >= 18 && age <= 26) {
//   console.log("You are getting a student discount");
// } else if (age >= 27 && age <= 66) {
//   console.log("You will get a full price discount");
// } else {
//   console.log("Welcome senior citizen!, kindly enter for free ");
// }

// ARRAYS AND LOOP

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// for (let i = 0; i < largeCountries.length; i++) {
//   console.log(largeCountries[i]);
// }

// largeCountries.pop();
// largeCountries.push("something");
// largeCountries.shift();
// largeCountries.unshift("anything");

// console.log(largeCountries);

// LOGICAL AND OPERATOR

// let dayOfMonth = 31;
// let weekDay = "Friday";

// if (dayOfMonth === 31 && weekDay === "Friday") {
//   console.log("This is an attempt of printing a spooky face.");
// }

// MATH.RANDOM FUNCTION
// let hands = ["rock", "paper", "scissors"]

// function randomItem () { 
//  let randomIndex = Math.floor (Math.random () * hands.length)
//  console.log (hands[randomIndex] )
// }

// randomItem()

// LOOP, CONDITIONALS

// let fruits = ["apple", "orange", "apple", "apple", "orange"]
// let appleShelf = document.getElementById ("apple-shelf")
// let orangeShelf = document.getElementById ("orange-shelf")

// function sort (){
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits [i] === "apple") {
//     appleShelf.textContent += " apple"
//     }
//     else if (fruits [i] === "orange") {
//       orangeShelf.textContent += " orange"
//     }
// }
// }

// sort ()

