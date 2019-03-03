class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.toggledCards = 0;
    this.potentialPair = []
    this.pairsGuessed = 0;
    
  }

  Toggle(id, cardName) {


    var front = $("#" + id).children(".front")

    $("#" + id).children(".back").addClass("front").removeClass("back")

    front.addClass("back").removeClass("front")

    $("#" + id).addClass("clicked")


    this.toggledCards += 1
    if (this.toggledCards % 2 == 0) {
      document.getElementById("pairs_clicked").innerHTML = this.toggledCards / 2
    }

    let index
    if (this.toggledCards % 2 !== 0) {
      index = 0
      this.potentialPair = []
    } else {
      index = 1
    }

    if (this.potentialPair.length === 0) {

      this.potentialPair[index] = { id: id, cardName: cardName }

    } else if (this.potentialPair.length === 1) {
      this.potentialPair[0].id === id
        ? alert("you clicked the same card")
        : this.potentialPair[index] = { id: id, cardName: cardName }
    }




    if (this.potentialPair.length === 2) {
      if (
        this.potentialPair[0].cardName === this.potentialPair[1].cardName
        &&
        this.potentialPair[0].id !== this.potentialPair[1].id
      ) {
        console.log('Cards fit!!!')

        this.pairsGuessed += 1

        $("#pairs_guessed")[0].innerHTML = this.pairsGuessed
       
       $(".clicked").children('.back').addClass("blocked")
       
       $(".clicked").removeClass("clicked")
       




      } else {


        console.log("Cards dont fit")
        setTimeout(function () {

var frontClicked = $(".clicked").children(".front")
 $(".clicked").children(".back").addClass("front").removeClass("back")
 frontClicked.addClass("back").removeClass("front")

 $(".clicked").removeClass("clicked")

        }, 1000)



      }
    }

  }

}

