$(document).ready(function() {

  var boardContent = ["1","1","2","2","3","3"];
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
            displayBoard += '<div class="pieces" id="piece'+ i+'" >  </div>';
            cardContent.push(displayBoard);

      };
    document.getElementById('board').innerHTML = displayBoard;

}

createBoard();

// function flipCard(){
//            console.log("clicked");
//           }


$('.pieces').click(function() {
   flipCard(this.id, boardValue);


 })

    //  console.log(pieceId);

    //  // for (var i = 0; i < boardValue.length; i++){
    //  //    saveId = boardValue[i];

    //  //
    // console.log(boardValue);


// var $gameCells = $('.pieces');


function flipCard(card, content){
  console.log(card);
  console.log(content);




// for (var i = 0; i < content.length; i++){

  // }


  // if (card == 'piece0'){
  //       console.log(content[0]);
  //     } else if (card == 'piece1'){
  //        console.log(content[1]);
  //     }


  // }


  // for (var i = 0; i < content.length; i++){

  // }

  // content.forEach(assignValue);

  // function assignValue(item, index){
  //    console.log(item, index)
  //    // var pieceIndex = 'piece'+index;
  //    if (index == 0){
  //     console.log("worked");
  //    }

  // }
  // for (var i = 0; i < content.length; i++){

  // if (card == 'piece0'){
  //   console.log(content[i]);
  // } else if (card == 'piece1'){

  // }




}


// });




//on click flip piece over


//only allow user to click 2 cards
//if cards match increase score, remove cards.
//if cards don't match, flip cards and switch player
//when last cards gets matched, display winner
//keep over all score
//reset board





// future iterations:
//---- randomize board order














  // closing doc.ready function
});
