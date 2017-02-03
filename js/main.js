$(document).ready(function() {

  var boardContent = ["1","1","2","2","3","3","4","4","5","5","6","6"];
  var boardValue = [ ];
  var cardContent = [ ];
  var boardIds = [ ];
  var counter = 0;


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

            // var pieceId = document.getElementById("piece" + i);
            // console.log(pieceId);
            // document.getElementById(pieceId).addEventListener("click", flipCard, true)

            // $(pieceId).on('click', function() {
            //   console.log("clicked");
            // // //    flipCard();
            // })

      };
    document.getElementById('board').innerHTML = displayBoard;


}

createBoard();


$('.pieces').click(function() {
     flipCard(this.id,boardValue);

 })


//on click "flip card" - render data.

function flipCard(card, content){
   // console.log(card);
    console.log(content);
   var div = document.getElementById(card);
    if (card == "piece0"){
        div.innerHTML = div.innerHTML + content[0];
   } else if (card == "piece1"){
       div.innerHTML = div.innerHTML + content[1];
   }else if (card == "piece2"){
       div.innerHTML = div.innerHTML + content[2];
   }else if (card == "piece3"){
       div.innerHTML = div.innerHTML + content[3];
   }else if (card == "piece4"){
       div.innerHTML = div.innerHTML + content[4];
   }else if (card == "piece5"){
       div.innerHTML = div.innerHTML + content[5];
   }else if (card == "piece6"){
       div.innerHTML = div.innerHTML + content[6];
   }else if (card == "piece7"){
       div.innerHTML = div.innerHTML + content[7];
   }else if (card == "piece8"){
       div.innerHTML = div.innerHTML + content[8];
   }else if (card == "piece9"){
       div.innerHTML = div.innerHTML + content[9];
   }else if (card == "piece10"){
       div.innerHTML = div.innerHTML + content[10];
   }else if (card == "piece11"){
       div.innerHTML = div.innerHTML + content[11];
   }else if (card == "piece12"){
       div.innerHTML = div.innerHTML + content[12];
   }



}

// limit clicks to only 2 cards, then clear board.
//if cards match increase score, remove cards.
//if cards don't match, flip cards and switch player
//when last cards gets matched, display winner
//keep over all score
//reset board





// future iterations:
//---- randomize board order














  // closing doc.ready function
});
