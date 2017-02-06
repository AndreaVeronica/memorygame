$(document).ready(function() {

  var boardContent = ["1","1","2","2","3","3","4","4","5","5","6","6"];
  var boardValue = [ ];
  var cardContent = [ ];
  var boardIds = [ ];
  var counter = 0;
  // var player1count = 0;
  // var player2count = 0;
  var turn = [];
  var cardIds = [];
  var saveIds = "";
  var score = 0;


  var $gamePiece = $('.pieces');
//reset board
//hide reset board, during game.
  $('#reset').on('click', function() {
        location.reload();
    })


//shuffle array content
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//create board
function createBoard(){
    var saveShuffleArray = shuffleArray(boardContent);
        cardContent = [];
    var displayBoard = " ";
        boardValue = [];
        for (var i = 0; i < saveShuffleArray.length; i++){
            boardValue.push(saveShuffleArray[i]);
            displayBoard += '<div class="pieces" id="piece'+ i+'" > </div>';
      };
    document.getElementById('board').innerHTML = displayBoard;
    //startGame(displayBoard, boardValue);
}

createBoard();

$('.pieces').on('click', startGame);

 function startGame(){
  // board, value
     console.log(this.id);
     counter++;
     flipCard(this.id, boardValue);
}

//on click "flip card" - render data.

function flipCard(card, content){
     console.log(content);
     var div = document.getElementById(card);

     for (var i = 0; i < content.length; i++){
          if (card == "piece"+[i]){
                  div.innerHTML = div.innerHTML + content[i];
                  turn.push(content[i]);
                  console.log(turn);
                  cardIds.push(card);
                  $(div).off('click');
           }else{
           // console.log("nope");
           }
      }
     if (counter >= 2){
         counter = 0;
         checkForMatch(div, card, content);
         turn.length = 0;
         cardIds.length = 0;
     }else{
      //  console.log("nope");
     }
}

function clearDiv(){
          for (var i = 0; i < cardIds.length; i++){
               var saveCardIndex0 = cardIds[0];
               var saveCardIndex1 = cardIds[1];
              }
          setTimeout(timer, 1000);
          function timer(){
               var div1 = document.getElementById(saveCardIndex0);
             //  $(div1).removeClass("clicked");
               div1.innerHTML = " ";
               $(div1).on('click', startGame);
              // $(div1).addClass("clickable");
               var div2 = document.getElementById(saveCardIndex1);
              //  $(div2).removeClass("clicked");
               div2.innerHTML = " ";
               $(div2).on('click', startGame);

          }
}

// limit clicks to only 2 cards, then clear board.
function checkForMatch(card, content){
     // var saveIt = div;
     // console.log(saveIt);
      if (turn[0] == turn[1]){
              console.log("its a match");
              matchMade(cardIds, turn[0],turn[1]);
            } else{
              // $(div).removeClass("clicked");
               clearDiv();
               // console.log(this.id);


               // var div = document.getElementById();
               // $(div1).removeClass("clicked");
            }
}

//keep over all score
//if cards match increase score, remove cards.
//when last cards gets matched, display "you've won"
function matchMade(cards, num1, num2){
      // console.log(cards);

      if (num1 == num2){
        console.log("match has been made");

      }
      score++;
      console.log(score);
      if (score >= 6){
         console.log("you win");
      }
}


//when cards match remove click option, change visual







// future iterations:
//---- randomize board order
//---- add player vs player
//if cards don't match, flip cards and switch player













  // closing doc.ready function
});
