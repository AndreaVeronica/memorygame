$(document).ready(function() {

    var quotes = [{
        text: 'The flower that blooms in adversity is the most rare and beautiful of them all.',
        number: 1,
        speaker: 'The Emperor',
        movie: 'Mulan',
        short: 'emperor',
        pic: 'http://images6.fanpop.com/image/polls/1202000/1202219_1365371420033_full.jpg',
    }, {
        text: 'The past can hurt. But the way I see it, you can either run from it, or learn from it.',
        number: 2,
        speaker: 'Rafiki',
        movie: 'The Lion King',
        short: 'rafiki',
        pic: 'https://a.dilcdn.com/bl/wp-content/uploads/sites/25/2015/01/Rafiki-The-Lion-King-3.jpeg',
    }, {
        text: 'If you walk the footsteps of a stranger, you\'ll learn things you never knew you never knew.',
        number: 3,
        speaker: 'Pocahontas',
        movie: 'Pocahontas',
        short: 'pocahontas2',
        pic: 'http://vignette1.wikia.nocookie.net/characters/images/3/32/Pocahontas1.jpg/revision/latest?cb=20150601000252',
    }, {
        text: 'A true hero isn\'t measured by the size of his strength, but by the strength of his heart.',
        number: 4,
        speaker: 'Zeus',
        short: 'zeus',
        movie: 'Herculus',
        pic: 'http://66.media.tumblr.com/tumblr_l6cph3rEMG1qd0axho1_1280.jpg',
    }, {
        text: 'I\'m only brave when I have to be. Being brave doesn\'t mean you go looking for trouble.',
        number: 5,
        speaker: 'Mufasa',
        movie: 'The Lion King',
        short: 'mufasa',
        pic: 'http://vignette1.wikia.nocookie.net/tlk-characters/images/1/17/Mufasa_TLK1Presentati.jpg/revision/latest?cb=20140801170201',
    }, {
        text: 'Sometimes the right path is not the easiest one.',
        number: 6,
        speaker: 'Grandmother Willow',
        movie: 'Pocahontas',
        short: 'gmawillow',
        pic: 'http://images6.fanpop.com/image/photos/36400000/Walt-Disney-Characters-image-walt-disney-characters-36400800-5760-3240.jpg',
    }, {
        text: 'You are braver than you believe, stronger than you seem, and smarter than you think.',
        number: 7,
        speaker: 'Christopher Robin',
        movie: 'Winnie the Pooh',
        short: 'chrisrob',
        pic: '',
    }, {
        text: 'Life\'s not a spectator sport. If watchin\' is all you\'re gonna do, then you\'re gonna watch your life go by without ya',
        number: 8,
        speaker: 'Laverne',
        movie: 'The Hunchback of Notre Dame',
        short: 'laverne',
        pic: '',
    }, ];
    // var quoteText = [];
    // var quoteChar = [];

    var boardContent = [];
    var arrayOfQuotes = [];

    var boardText = [];
    var boardChar = [];


    var boardValue = [];
    var counter = 0;
    var turn = [];
    var cardIds = [];
    var score = 0;



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

    function picQuotes() {
        for (var i = 0; i < quotes.length; i++) {
            arrayOfQuotes.push(quotes[i]);
        }
        shuffleArray(arrayOfQuotes);

        for (var i = 0; i < 6; i++) {
            boardContent.push(arrayOfQuotes[i].text);
            boardContent.push(arrayOfQuotes[i]);
        };
        // console.log(boardContent);
    }


    //create board
    function createBoard() {
        picQuotes();
        shuffleArray(boardContent);
        // console.log(boardContent);
        var displayBoard = " ";
        boardValue = [];
        for (var i = 0; i < boardContent.length; i++) {
            boardValue.push(boardContent[i]);
            displayBoard += '<div class="pieces" id="piece' + i + '" >  </div>';
        };
        document.getElementById('board').innerHTML = displayBoard;

    }

    createBoard();

    $('.pieces').on('click', startGame);

    function startGame() {
        counter++;
        console.log(boardValue)
        flipCard(this.id, boardValue);

    }

    //on click "flip card" - render data.

    function flipCard(card, content) {
        var div = document.getElementById(card);

        for (var i = 0; i < content.length; i++) {
            if (card == "piece" + [i]) {
                if (content[i].speaker) {
                    var h3El = document.createElement("h3");
                    var imgEl = document.createElement("IMG");
                    var speakerContent = document.createTextNode(content[i].speaker);
                    var short = content[i].short;
                    imgEl.src = 'images/' + short + '.jpg';
                    h3El.appendChild(speakerContent);
                    div.appendChild(h3El);
                    div.appendChild(imgEl);
                    h3El.classList.add("speaker-style");
                    // div.classList.add(content[i].short);
                    imgEl.classList.add("pic-style");
                } else if (content[i]) {
                    var h3El = document.createElement("h3");
                    var textContent = document.createTextNode(content[i]);
                    h3El.appendChild(textContent);
                    div.appendChild(h3El);
                    h3El.classList.add("text-style");
                }
                turn.push(content[i].text || content[i]);
                console.log(turn);
                cardIds.push(card);
                $(div).off('click');
            }
        }
        if (counter >= 2) {
            counter = 0;
            checkForMatch(cardIds, content);
            turn.length = 0;
            cardIds.length = 0;
        } else {
            //  console.log("nope");
        }
    }

    //when cards match remove click option, change visual
    function clearDiv(cards) {
        var saveCardIndex0 = cards[0];
        var saveCardIndex1 = cards[1];
        setTimeout(timer, 1000);

        function timer() {
            var div1 = document.getElementById(saveCardIndex0);
            div1.innerHTML = " ";
            $(div1).on('click', startGame);
            var div2 = document.getElementById(saveCardIndex1);
            div2.innerHTML = " ";
            $(div2).on('click', startGame);
        }
    }

    // limit clicks to only 2 cards, then clear board.
    //keep over all score
    //if cards match increase score, remove cards.
    //when last cards gets matched, display "you've won"
    function checkForMatch(cards, content) {
        if (turn[0] == turn[1]) {
            console.log("match has been made");
            score++;
            if (score >= 6) {
                var win = document.getElementById('winner');
                win.innerHTML = 'Yay! You won!';
            }
        } else {
            clearDiv(cards);
        }
    }









    // future iterations:
    //---- randomize board order
    //---- add player vs player
    //if cards don't match, flip cards and switch player











    // closing doc.ready function
});
