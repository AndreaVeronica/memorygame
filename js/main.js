$(document).ready(function() {

  var boardContent = ["1","1","2","2","3","3","4","4","5","5","6","6","7","7","8","8" ];
  var boardValue = [ ];
  var boardIds = [ ];

//create board
function createBoard(){
   console.log("called createBoard");
    var displayBoard = "";
     console.log(displayBoard);
        for (var i = 0; i < boardContent.length; i++){
          displayBoard += '<div class="pieces" id="piece'+ i+'">  </div>'
          console.log(displayBoard);
        }
      document.getElementById('board').innerHTML = displayBoard;
      console.log(displayBoard);
   }

createBoard();

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
