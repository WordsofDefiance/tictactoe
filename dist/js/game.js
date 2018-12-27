console.log('game.js has loaded');


var squares             = document.querySelectorAll('.square'),
square,
turn                    = "X",
turnTellerContainer     = document.querySelector('.turn-teller'),
turnTeller              = document.getElementById('x-or-o'),
turns                   = 0,
activeGame              = true;


// Initializing the game by adding the event listener to the squares

for (i=0; i < squares.length; i++) {
    square = squares[i];

    // Adding the event listener 
    square.addEventListener( 'click', clickOnSquare() );
}


// The eventListener for clicking on a square

function clickOnSquare() {
	// Check if all the turns have been taken
		//if so, stop the game and give an alert.
	if (turns == 9) {
		return;
	}

    var _this = this;	

	// Fill box with "X" or "O", depending on the value of the "turn" variable
	if (_this.innerHTML.length === 3 && turn == "X" ) {
		_this.innerHTML =  "X";
		turn = "O"
		turns++;
	}  else if (_this.innerHTML.length === 0 && turn === "O") {
	   _this.innerHTML = "O";
	   turn = "X";
	   turns++;
	}
	// Tell us whose turn it is 
	turnTeller.innerHTML = whoseTurn();        
	if (turns == 9) {
		document.querySelector('#alertBox').innerHTML = "The Game Is Over!";
		turnTellerContainer.style.display = "none";
	}
	// Check if there's a winner
	if( checkForWinner() ) {
		document.querySelector('#alertBox').innerHTML = checkForWinner();
		toggleClicks();
	}
	
};


// Check whose turn it is 
function whoseTurn() {
    if ( turn === "X") {
        return "X";
    } else {
        return "O";
    } 

}

// This function checks if there's a winner after each turn. It gets called whenver a square is clicked. 
// Returns false if no winner detected, otherwise returns name of winner.

function checkForWinner() {
    var topLeft         = document.querySelector('.horizontal-1.vertical-1').innerHTML,
        topMiddle       = document.querySelector('.horizontal-1.vertical-2').innerHTML,
        topRight        = document.querySelector('.horizontal-1.vertical-3').innerHTML,
        middleLeft      = document.querySelector('.horizontal-2.vertical-1').innerHTML,
        middleMiddle    = document.querySelector('.horizontal-2.vertical-2').innerHTML,
        middleRight     = document.querySelector('.horizontal-2.vertical-3').innerHTML,
        bottomLeft      = document.querySelector('.horizontal-3.vertical-1').innerHTML,
        bottomMiddle    = document.querySelector('.horizontal-3.vertical-2').innerHTML,
        bottomRight     = document.querySelector('.horizontal-3.vertical-3').innerHTML;
    
    if ( topLeft ) {
        if (topLeft === topMiddle && topMiddle === topRight) {
            return "Player " + topLeft + " Wins!";
        } else if ( topLeft === middleMiddle && middleMiddle === bottomRight ) {
            return "Player " + topLeft + " Wins!";
        } else if ( topLeft === middleLeft && middleLeft === bottomLeft ) {
            return "Player " + topLeft + " Wins!";
        } 
    } 
    
    if ( topMiddle ) {
       if ( topMiddle === middleMiddle && middleMiddle === bottomMiddle ) {
           return "Player " + topMiddle + " Wins!";
       }
    } 
    
    if ( topRight ) {
        if ( topRight === middleRight && middleRight === bottomRight ) {
           return "Player " + topRight + " Wins!";
        } else if (topRight === middleMiddle && middleMiddle === bottomLeft) {
            return "Player " + topRight + " Wins!";
        }
    } 
    
    if (middleLeft) {
        if ( middleLeft == middleMiddle && middleMiddle == middleRight ) {
            return "Player " + middleLeft + " Wins!";
        }
    } 
    
    if ( bottomLeft ) {
       if ( bottomLeft === bottomMiddle && bottomMiddle === bottomRight ) {
            return "Player " + bottomLeft + " Wins!";
       }
    } 
   
    return false;
    
}
    


// Controlling the behavior of the reset button
// Clears the squares
// Clears the alert box
// Shows the turn teller container if it is hidden
var reset = document.getElementById('reset-button');
reset.addEventListener('click', function(e) {
    console.log("reset");
    e.preventDefault();
    turns = 0;
    var squares1 =  document.querySelectorAll('.square');
    for( var i = 0; i < squares1.length; i++) {
        squares1[i].innerHTML = "";
    }       
    document.querySelector('#alertBox').innerHTML = "";
    turnTellerContainer.style.display = "block";
});


//Todo: Create function that disables squares when game is over. 
//
function toggleClicks() {
    console.log('toggleClicks()');
    if ( checkForWinner() ) {
        for ( var i = 0; i < squares.length; i++) {
            squares[i].removeEventListener('click', click);
        }
    }
}
