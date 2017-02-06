$(document).ready(function() {

var mov1 =
     {  number: 1,
         text: 'The flower that blooms in adversity is the most rare and beautiful of them all.',
         movie: 'Mulan'
     };
var mov2 =
     {   number: 2,
        text: 'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
         movie: 'The Lion King',

     };
var mov3 =
     {  number: 3,
        text: 'If you walk the footsteps of a stranger, you\'ll learn things you never knew you never knew.',
         movie: 'Pocahontas',
     };
var mov4 =
     { number: 4,
         text: 'A true hero isn\'t measured by the size of his strength, but by the strength of his heart.',
         movie: 'Herculus',
     };
var mov5 =
     {  number: 5,
        text: 'I\'m only brave when I have to be. Being brave doesn\'t mean you go looking for trouble.',
         movie: 'The Lion King',
     };
var mov6 =
     {  number: 6,
       text: 'Sometimes the right path is not the easiest one.',
        movie: 'Pocahontas',
     };
var char1 =
     { number: 1,
         speaker: 'The Emporor',
         pic: 'http://images6.fanpop.com/image/polls/1202000/1202219_1365371420033_full.jpg',
     };
var char2 =
     {   number: 2,
         speaker: 'Rafiki',
         pic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/01/Rafiki-The-Lion-King-3.jpeg',
     };
var char3 =
     {   number: 3,
         speaker: 'Pocahontas',
         pic: 'http://vignette1.wikia.nocookie.net/characters/images/3/32/Pocahontas1.jpg/revision/latest?cb=20150601000252',
     };
var char4 =
     {  number: 4,
         speaker: 'Zeus',
         pic: 'http://66.media.tumblr.com/tumblr_l6cph3rEMG1qd0axho1_1280.jpg',
     };
var char5 =
     {  number: 5,
         speaker: 'Mufasa',
         pic: 'http://vignette1.wikia.nocookie.net/tlk-characters/images/1/17/Mufasa_TLK1Presentati.jpg/revision/latest?cb=20140801170201',
     };
var char6 =
     {  number: 6,
         speaker: 'Grandmother Willow',
         pic: 'http://images6.fanpop.com/image/photos/36400000/Walt-Disney-Characters-image-walt-disney-characters-36400800-5760-3240.jpg',
     };

var boardContent = [mov1, mov2, mov3, mov4, mov5, mov6, char1, char2, char3, char4, char5, char6];


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
     // console.log(boardValue);
      console.log(this.id);
     counter++;
     flipCard(this.id, boardValue);
}

//on click "flip card" - render data.

function flipCard(card, content){
    console.log(content);
     var div = document.getElementById(card);
   //  console.log(div);
     for (var i = 0; i < content.length; i++){
          if (card == "piece"+[i]){
                  if (content[i].text) {
                    div.innerHTML = div.innerHTML + content[i].text;
                  } else if (content[i].speaker) {
                      div.innerHTML = div.innerHTML + content[i].speaker;
                      div.innerHTML = div.innerHTML + content[i].pic;
                  }
                  turn.push(content[i].number);
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
         alert("you win");
      }
}


//when cards match remove click option, change visual







// future iterations:
//---- randomize board order
//---- add player vs player
//if cards don't match, flip cards and switch player




// var quotes = [
//      {   text: 'The flower that blooms in adversity is the most rare and beautiful of them all.',
//          number: 1,
//          speaker: 'The Emporor',
//          movie: 'Mulan',
//          pic: 'http://images6.fanpop.com/image/polls/1202000/1202219_1365371420033_full.jpg',
//      },
//      {   text: 'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
//          number: 2,
//          speaker: 'Rafiki',
//          movie: 'The Lion King',
//          pic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/01/Rafiki-The-Lion-King-3.jpeg',
//      },
//      {   text: 'If you walk the footsteps of a stranger, you\'ll learn things you never knew you never knew.',
//          number: 3,
//          speaker: 'Pocahontas',
//          movie: 'Pocahontas',
//          pic: 'http://vignette1.wikia.nocookie.net/characters/images/3/32/Pocahontas1.jpg/revision/latest?cb=20150601000252',
//      },
//      {   text: 'A true hero isn\'t measured by the size of his strength, but by the strength of his heart.',
//          number: 4,
//          speaker: 'Zeus',
//          movie: 'Herculus',
//          pic: 'http://66.media.tumblr.com/tumblr_l6cph3rEMG1qd0axho1_1280.jpg',
//      },
//      {   text: 'I\'m only brave when I have to be. Being brave doesn\'t mean you go looking for trouble.',
//          number: 5,
//          speaker: 'Mufasa',
//          movie: 'The Lion King',
//          pic: 'http://vignette1.wikia.nocookie.net/tlk-characters/images/1/17/Mufasa_TLK1Presentati.jpg/revision/latest?cb=20140801170201',
//      } ,
//      {   text: 'Sometimes the right path is not the easiest one.',
//          number: 6,
//          speaker: 'Grandmother Willow',
//          movie: 'Pocahontas',
//          pic: 'http://images6.fanpop.com/image/photos/36400000/Walt-Disney-Characters-image-walt-disney-characters-36400800-5760-3240.jpg',
//      }
//     ];








  // closing doc.ready function
});
