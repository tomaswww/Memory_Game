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
  for (i = 0, i < deckOfCards.lenght, i++) {
    let deck = document.querySelector(".deck");
    let liCard = document.createElement('li');
    let cardName = deckOfCards[i];
    liCard.className = 'card fa fa-' + cardName + ' hide';
    deck.appendChild(liCard);
    liCard.addEventListener('click', showCard);
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
  }
  /*Set the RESET button */
  var resetBut = document.getElementsByClassName('restart');
  resetBut[0].addEventListener('click', reset);

  function reset() {
    moves = 0;
    stars = 0;
    lockedCards = [];
    selectedCards = [];
    shuffle(deckOfCards);
  };
  /* - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  - if the list already has another card, check to see if the two cards match */
  function matchCheck(y) {
    selectedCards.push(y);
    if (openedCards.length < 2) {
      openedCards.push(y);
      if openedCards.length === 2 {
        if (openedCards[1] === openedCards[2]) {
          console.log('Its a match dude!');
          incrementMovement();
          selectedCards.push(y);
          guessedCards(y);
        } else {
          console.log('Keep trying dude!');
          incrementMovement();
          hideCards(y);
        }
      }
    }
  }
  /*- increment the move counter and display it on the page (put this functionality in another function that you call from this one)*/
  function incrementMovement() {
    moves = +1;
    let movements = document.querySelector(".moves");
    moves.innerHTML = (moves);
    setStars();
  }
  /* -Set the stars dependingo on movements */
  function setStars() {
    if (moves === 17)
      const star = stars.querySelector('li');
    stars.removeChild("fa fa-star");
    stars.addChild("fa fa-star-o");
    else if (moves == 20) {} else if (moves === 24) {}
  };
  /*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)*/
  function guessedCards(w) {
    console.log('lock cards');
    guessedCards.push(selectedCards[0]);
    guessedCards.push(seleedCards[1]);
    console.log(guessedCards);
    selectedCards[0].classList.add('match');
    selectedCards[1].classList.add('match');
    selectedCards[0].classList.remove("hide");
    selectedCards[1].classList.remove("hide");
    clearAllArrays();
    /*    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)*/
    if (guessedCards.length === deckOfCards.length) {}
  }
  /* + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)*/
  function hideCards(z) {
    selectedCards[0].classList.remove("open", "show");
    selectedCards[0].classList.add("hide");
    selectedCards[1].classList.remove("open", "show");
    selectedCards[1].classList.add("hide");
    clearAllArrays();
  }

  function clearAllArrays() {
    selectedCards = [];
    openedCards = [];
  }
