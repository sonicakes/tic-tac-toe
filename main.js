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
  //2. add jquery click event to boxes that:
  //2a.sets inner html to X or 0, depending on our currentPlayer
  //2b.swaps currentPlayer
  let emptySquares = 9;
  //construct an array via new Array(9) method
  const arrayOfValues = [];
  // A $( document ).ready() block.

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
    console.log(arrayOfValues);
    emptySquares--;
    console.log(emptySquares);
  };

  //we can only click if there are empty squares, i.e array.length=<9


  $(".box").on("click", whenClicked);






  //this.attr("id")[3]
});