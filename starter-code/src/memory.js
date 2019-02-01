// var MemoryGame = function (cards) {
//   this.cards = cards;
// };


class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
    this.checkIfPair();
    this.isFinished();
  }

  shuffleCards() {
    this.cards.sort(function (a, b) {
      return Math.random() - 0.5
    })
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else {
    return false
  }
  }
  isFinished() {
  return (this.pairsGuessed === this.cards.length / 2)
  }
}

// MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
//   this.pairsClicked++;
//   if (firstCard === secondCard) {
//     this.pairsGuessed++;
//     return true;
//   } else {
//     return false
//   }

