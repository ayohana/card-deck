$(document).ready(function(){

  $("#button").click(function(event){
    event.preventDefault();

    var suits = [" of spades", " of clubs", " of hearts", " of diamonds"];
    var ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    var cards = [];

    $("#cards").text(suits.forEach(function(suit){
      for(var i = 0; i < ranks.length; i++) {
        cards.push(ranks[i].concat(suit));
      }
    }))

    cards.forEach(function(card){
      $("#cards").append(`<li>${card}</li>`);
    })

    console.log(cards.length)
    console.log(cards)

  })

});