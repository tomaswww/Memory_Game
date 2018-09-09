/*
 * Create a list that holds all of your cards
 */
var deckOfCards = ["diamond","diamond","paper-plane","paper-plane","bolt","bolt","cube","cube","anchor","anchor","leaf","leaf","bicycle","bicycle","bomb","bomb"];
var clickedCards = [];
var selectedCards = [];
var clickedCards = [];
var guessedCards = [];
var openedCards = [];

shuffle(deckOfCards);
// - shuffle the list of cards using the provided "shuffle" method below
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;}
// Shuffle function from http://stackoverflow.com/a/2450976
 /* Display the cards on the page */
 displayCards(deckOfCards);
/*  - loop through each card and create its HTML */
/*  - add each card's HTML to the page */
 /* set up the event listener for a card. If a card is clicked:*/
function displayCards(array){
for (i=0,i=<array.lenght,i++){
  card = array(i);
  let deck = document.querySelector(".deck");
  document.createElement('li');
  deck.appendChild(card);
  let cardName = deckOfCards[i];
  liElement.className = 'card fa fa-' + cardName + ' hide';
  liElement.addEventListener('click', showCard);
}
 /*  - display the card's symbol (put this functionality in another function that you call from this one)*/
function showCard(x) {
    if (clickedCards.length < 2) {
        x.target.classList.add('open');
        x.target.classList.add("show");
        x.target.removeEventListener('click', showCard);
        console.log('click');
        matchCheck(x);
        console.log(clickedCards);
    }

}
function matchCheck(y){
  selectedCards.push(y);
  if (openedCards.length<2){
    openedCards.push(y);
    if openedCards.length===2{
      if (openedCards[1]===openedCards[2]){
        console.log('Its a match dude!');
        incrementMovement();
        clickedCards.push(y);
        guessedCards(y);
      }
      else {
        console.log('Keep trying dude!');
        incrementMovement();
        hideCards(y);
      }
    }
  }
}

function hideCards(z){
}

function guessedCards(w){
  console.log('lock cards');
  guessedCards.push(clickedCards[0]);
  guessedCards.push(clickedCards[1]);
  console.log(guessedCards);
  clickedCards[0].classList.add('match');
  clickedCards[1].classList.add('match');
  clickedCards[0].classList.remove("hide");
  clickedCards[1].classList.remove("hide");
  clearAllArrays();
  if (lockedCards.length === cards.length) {
  }

}

}
 /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
