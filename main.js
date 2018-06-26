//1.add newGame(), which

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





//we can only click if there are empty squares, i.e array.length=<9
$(document).ready(function() {
  console.log("ready!");

  $("#box0").on("click", function() {
    console.log($(this).text());
    if (currentPlayer === "X") {
      $("#box0").html("X");
      currentPlayer = "0";
    } else {
      $("#box0").html("0");
      currentPlayer = "X";
    }
    arrayOfValues.push($(this).text());
    console.log(arrayOfValues);
    emptySquares--;
    console.log(emptySquares);
  });

  console.log("end game");

  //this.attr("id")[3]
});