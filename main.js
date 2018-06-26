//1.add newGame(), which
$(document).ready(function() {
  console.log("ready!");
  let currentPlayer = "X";
  const newGame = function() {
    //1a.changes current Player to X
    currentPlayer = "X";
    //2b. changes all boxes to empty
    $(".box").html("");
  }
  newGame();
  //winning combos
  //if boxes id coincide with the winning combos, we have to declare winner and end game
  const win1 = [0, 1, 2];
  const win2 = [2, 4, 6];
  const win3 = [0, 4, 8];
  const win4 = [3, 4, 5];
  const win5 = [6, 7, 8];
  //2. add jquery click event to boxes that:
  //2a.sets inner html to X or 0, depending on our currentPlayer
  //2b.swaps currentPlayer
  let emptySquares = 9;
  //construct an array via new Array(9) method
  const arrayOfValues = [];
  const arrayOfIds = [];
  // A $( document ).ready() block.
  //compare with winning combos function
  const compare = function() {
    const toCompare = arrayOfIds.join("");
    console.log(toCompare);
  }

  //turn
  //we call the function newGame() here, otherwise it wouldnt be available!

  //function that handles what happens after you click on any square
  const whenClicked = function() {
    // debugger;
    if (currentPlayer === "X") {
      $(this).text("X");
      currentPlayer = "0";
    } else {
      $(this).text("0");
      currentPlayer = "X";
    }

    arrayOfValues.push($(this).text());
    arrayOfIds.push($(this).attr("id"));
    console.log(arrayOfValues);
    console.log(arrayOfIds);
    //reduces number of empty squares
    emptySquares--;
    console.log(emptySquares);
  };
  //function to hold the logic of the game

  $(".box").on("click", whenClicked);
  // if ()

  //while (there are empty squares)
  //place a marker
  //reduce number of squares
  //if(there is a three combo)
  //exit the game, declare WINNER
  //exit game with a draw
  //we can only click if there are empty squares, i.e array.length=<9









  //this.attr("id")[3]
});