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
  //

  //2. add jquery click event to boxes that:
  //2a.sets inner html to X or 0, depending on our currentPlayer
  //2b.swaps currentPlayer
  let emptySquares = 9;
  //construct an array via new Array(9) method
  const arrayOfValues = [];
  const arrayOfNods = [];
  const arrayOfCrosses = [];
  const arrayOfIds = [];
  const idsOfNods = [];
  const idsOfCrosses = [];
  // A $( document ).ready() block.

  //turn
  //we call the function newGame() here, otherwise it wouldnt be available!

  //function that handles what happens after you click on any square
  const whenClicked = function() {
    // debugger;

    // TODO Check if square that was clicked is empty
    // TODO If it is not empty, we need to stop and not do anything else

    if (currentPlayer === "X") {
      $(this).text("X");
      currentPlayer = "0";
      arrayOfCrosses.push($(this).text());
      idsOfCrosses.push($(this).attr("id"));
    } else {
      $(this).text("0");
      currentPlayer = "X";
      arrayOfNods.push($(this).text());
      idsOfNods.push($(this).attr("id"));
    }



    arrayOfValues.push($(this).text());
    arrayOfIds.push($(this).attr("id"));
    //how to establish a WINNER
    //array of IDs/NODs includes any number of winning combos
    let winXstatement = `end game! X wins!`;
    if (idsOfNods.includes(0) && idsOfNods.includes(1) && idsOfNods.includes(2)) {
      console.log(winXstatement);
      alert("you won X");
      return winXstatement;
    }
    if (idsOfNods.includes(2) && idsOfNods.includes(4) && idsOfNods.includes(6)) {
      console.log(winXstatement);
      return winXstatement;
    }
    if (idsOfNods.includes(0) && idsOfNods.includes(4) && idsOfNods.includes(8)) {
      console.log(winXstatement);
      return winXstatement;
    }
    if (idsOfNods.includes(3) && idsOfNods.includes(4) && idsOfNods.includes(5)) {
      console.log(winXstatement);
      return winXstatement;
    }
    if (idsOfNods.includes(6) && idsOfNods.includes(7) && idsOfNods.includes(8)) {
      console.log(winXstatement);
      return winXstatement;
    }

    console.log(`this is the values we got from clicking:${arrayOfValues}`);
    console.log(`this is the ids array: ${arrayOfIds}`);
    console.log(`this is how many nods we have so far: ${arrayOfNods} and their ids are the following:`);
    console.log(`${idsOfNods}`);
    console.log(`this is how many crosses we got so far:${arrayOfCrosses} and their ids are the following:`);
    console.log(`${idsOfCrosses}`);
    //reduces number of empty squares
    emptySquares--;
    console.log(`this is how many empty squares we have got left: ${emptySquares}`);
    console.log("**********************click again*****************");
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