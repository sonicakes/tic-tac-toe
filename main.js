$(document).ready(function() {
  console.log("ready!");

  let currentPlayer = "X";

  const newGame = function() {

    currentPlayer = "X";

    $(".box").html("");
  }

  newGame();
  const whenClicked = function() {

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


    if (idsOfNods.includes("0") && idsOfNods.includes("1") && idsOfNods.includes("2")) {
      console.log(`0 wins`);
      //TODO whyit doesnt work???????
      for (var i = 0; i < idsOfNods.length; i++) {
        $(idsOfNods[i]).addClass("greeny");
      }
      return `0 wins`;
    }

    if (idsOfNods.includes("2") && idsOfNods.includes("4") && idsOfNods.includes("6")) {
      console.log(`0 wins`);
      return `0 wins`;
    }
    if (idsOfNods.includes("0") && idsOfNods.includes("4") && idsOfNods.includes("8")) {
      console.log(`0 wins`);
      return `0 wins`;
    }
    if (idsOfNods.includes("3") && idsOfNods.includes("4") && idsOfNods.includes("5")) {
      console.log(`0 wins`);
      return `0 wins`;
    }
    if (idsOfNods.includes("6") && idsOfNods.includes("7") && idsOfNods.includes("8")) {
      console.log(`0 wins`);
      return `0 wins`;
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

  }
  const win1 = [0, 1, 2];
  const win2 = [2, 4, 6];
  const win3 = [0, 4, 8];
  const win4 = [3, 4, 5];
  const win5 = [6, 7, 8];

  const arrayOfValues = [];
  const arrayOfNods = [];
  const arrayOfCrosses = [];
  const arrayOfIds = [];
  const idsOfNods = [];
  const idsOfCrosses = [];


  $(".box").on("click", whenClicked);
});





//this.attr("id")[3]