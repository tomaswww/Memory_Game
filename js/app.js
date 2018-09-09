/* Create a list that holds all of your cards */
var deckOfCards = ["diamond", "diamond", "paper-plane", "paper-plane", "bolt", "bolt", "cube", "cube", "anchor", "anchor", "leaf", "leaf", "bicycle", "bicycle", "bomb", "bomb"];
var selectedCards = [];
var guessedCards = [];
var openedCards = [];
var moves = 0;
var stars = 3;
// - shuffle the list of cards using the provided "shuffle" method below
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
shuffle(deckOfCards);
// Shuffle function from http://stackoverflow.com/a/2450976
/*  - loop through each card and create its HTML */
/*  - add each card's HTML to the page */
/* set up the event listener for a card. If a card is clicked:*/
function displayCards() {
  for (let i = 0 ;i < deckOfCards.lenght;i++){
    let deck = document.querySelector(".deck");
    let liElement = document.createElement('li');
    let cardName = deckOfCards[i];
    liCard.className = 'card fa fa-'+cardName+' hide';
    deck.appendChild(liElement);
    liElement.addEventListener('click', showCard);
  }
}
/* Display the cards on the page */
displayCards(deckOfCards);
/*  - display the card's symbol (put this functionality in another function that you call from this one)*/
function showCard(x) {
  if (selectedCards.length < 2) {
    x.classList.add('open');
    x.classList.add("show");
    x.removeEventListener('click', showCard);
    console.log('click');
    matchCheck(x);
    console.log(selectedCards);
  }};
