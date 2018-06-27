$(document).ready(function() {
  console.log("ready!");

  let currentPlayer = "X";
  let isGameActive = false;
  // let emptySquares = 9;

  const win1 = [0, 1, 2];
  const win2 = [2, 4, 6]; //diagonal
  const win3 = [0, 4, 8];
  const win4 = [3, 4, 5];
  const win5 = [6, 7, 8];

  // const arrayOfValues = [];
  // const arrayOfNods = [];
  // const arrayOfCrosses = [];
  // const arrayOfIds = [];
  let idsOfNods = [];
  let idsOfCrosses = [];

  const newGame = function() {
    // X is always the first player in any game
    currentPlayer = "X";

    // Clear all the squares
    $(".box").html("");

    // Set the game state to active
    isGameActive = true;

    // Clear the arrays of X and 0
    idsOfNods = [];
    idsOfCrosses = [];

  }

  newGame();
  const whenClicked = function() {
    //is the game active?
    if (!isGameActive) {
      alert("game over! press the NEW GAME button");
      return;
    }

    // Check if square that was clicked is empty
    if ($(this).text() !== "") {
      //alert the user that they cant click twice on a buton
      alert("you cant click twice, sorry!");
      return;
    }

    if (currentPlayer === "X") {
      $(this).text("X");
      currentPlayer = "0";
      idsOfCrosses.push($(this).attr("id"));
    } else {
      $(this).text("0");
      currentPlayer = "X";
      idsOfNods.push($(this).attr("id"));
    }

    // Check if there any winning combinations for 0
    if (idsOfNods.includes("0") && idsOfNods.includes("1") && idsOfNods.includes("2")) {
      console.log(`0 wins`);
      isGameActive = false;
      return `0 wins`;
    }
    if (idsOfNods.includes("2") && idsOfNods.includes("4") && idsOfNods.includes("6")) {
      console.log(`0 wins`);
      isGameActive = false;

      return `0 wins`;
    }
    if (idsOfNods.includes("0") && idsOfNods.includes("4") && idsOfNods.includes("8")) {
      console.log(`0 wins`);
      isGameActive = false;

      return `0 wins`;
    }
    if (idsOfNods.includes("3") && idsOfNods.includes("4") && idsOfNods.includes("5")) {
      console.log(`0 wins`);
      isGameActive = false;

      return `0 wins`;
    }
    if (idsOfNods.includes("6") && idsOfNods.includes("7") && idsOfNods.includes("8")) {
      console.log(`0 wins`);
      isGameActive = false;

      return `0 wins`;
    }

    // Check if there any winning combinations for X
    if (idsOfCrosses.includes("0") && idsOfCrosses.includes("1") && idsOfCrosses.includes("2")) {
      console.log(`X wins`);
      isGameActive = false;

      return `X wins`;
    }
    if (idsOfCrosses.includes("2") && idsOfCrosses.includes("4") && idsOfCrosses.includes("6")) {
      console.log(`X wins`);
      isGameActive = false;

      return `X wins`;
    }
    if (idsOfCrosses.includes("0") && idsOfCrosses.includes("4") && idsOfCrosses.includes("8")) {
      console.log(`X wins`);
      isGameActive = false;

      return `X wins`;
    }
    if (idsOfCrosses.includes("3") && idsOfCrosses.includes("4") && idsOfCrosses.includes("5")) {
      console.log(`X wins`);
      isGameActive = false;

      return `X wins`;
    }
    if (idsOfCrosses.includes("6") && idsOfCrosses.includes("7") && idsOfCrosses.includes("8")) {
      console.log(`X wins`);
      isGameActive = false;

      return `X wins`;
    }

    // TODO check if there are no empty squares left and alert GAME OVER
    let numberOfEmptySquares = $(".box:empty").length;
    console.log(`There are ${numberOfEmptySquares} empty squares`);

    if (numberOfEmptySquares < 1) {
      alert("GAME OVER - It's a draw");
    }



  }


  $(".box").on("click", whenClicked);
  $("#newGame").on("click", newGame);
});