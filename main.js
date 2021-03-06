$(document).ready(function() {

  let currentPlayer = "X";
  let isGameActive = false;

  let idsOfNods = [];
  let idsOfCrosses = [];

  const checkIfPlayerHasWon = function(arrayToCheck) {
    if (arrayToCheck.includes("0") && arrayToCheck.includes("1") && arrayToCheck.includes("2")) {
      $('#0').addClass('winningCombo');
      $('#1').addClass('winningCombo');
      $('#2').addClass('winningCombo');
      return true;
    }
    if (arrayToCheck.includes("2") && arrayToCheck.includes("4") && arrayToCheck.includes("6")) {
      $('#2').addClass('winningCombo');
      $('#4').addClass('winningCombo');
      $('#6').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("0") && arrayToCheck.includes("4") && arrayToCheck.includes("8")) {
      $('#0').addClass('winningCombo');
      $('#4').addClass('winningCombo');
      $('#8').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("3") && arrayToCheck.includes("4") && arrayToCheck.includes("5")) {
      $('#3').addClass('winningCombo');
      $('#4').addClass('winningCombo');
      $('#5').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("6") && arrayToCheck.includes("7") && arrayToCheck.includes("8")) {
      $('#6').addClass('winningCombo');
      $('#7').addClass('winningCombo');
      $('#8').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("0") && arrayToCheck.includes("3") && arrayToCheck.includes("6")) {
      $('#0').addClass('winningCombo');
      $('#3').addClass('winningCombo');
      $('#6').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("1") && arrayToCheck.includes("4") && arrayToCheck.includes("7")) {
      $('#1').addClass('winningCombo');
      $('#4').addClass('winningCombo');
      $('#7').addClass('winningCombo');

      return true;
    }
    if (arrayToCheck.includes("2") && arrayToCheck.includes("5") && arrayToCheck.includes("8")) {
      $('#2').addClass('winningCombo');
      $('#5').addClass('winningCombo');
      $('#8').addClass('winningCombo');
      return true;
    }

    return false;
  }

  const newGame = function() {
    // X is always the first player in any game
    currentPlayer = "X";

    // Clear all the squares
    $(".box").html("");

    // Clear the game message
    $('#message').html("");

    // Remove winningCombo class
    $('.winningCombo').removeClass('winningCombo');

    // Set the game state to active
    isGameActive = true;

    // Clear the arrays of X and 0
    idsOfNods = [];
    idsOfCrosses = [];

  };

  newGame();

  const whenClicked = function() {
    //is the game active?
    if (!isGameActive) {
      $('#message').html("game over! press the NEW GAME button");
      return;
    }

    // Check if square that was clicked is empty
    if ($(this).text() !== "") {
      //alert the user that they cant click twice on a buton
      $('#message').html("you cant click twice, sorry!");
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

    // Check if a player has won
    if (checkIfPlayerHasWon(idsOfNods)) {
      isGameActive = false;
      $('#message').html(`congrats, player 0, you have won!!!`);
      return;
    };

    if (checkIfPlayerHasWon(idsOfCrosses)) {
      isGameActive = false;
      $('#message').html(`congrats, player X, you have won!!!`);
      return;
    };

    // check if there are no empty squares left and alert GAME OVER
    let numberOfEmptySquares = $(".box:empty").length;
    console.log(`There are ${numberOfEmptySquares} empty squares`);

    if (numberOfEmptySquares < 1) {
      isGameActive = false;
      $('#message').html("GAME OVER - It's a draw");
    }
  };


  $(".box").on("click", whenClicked);
  $("#newGame").on("click", newGame);
});