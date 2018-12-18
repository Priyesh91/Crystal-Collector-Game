var name = "priyesh"
console.log(name);


var magicNum = 0

//added another variable to represent currentmagicNUM since cannot have 2 same variables
var currentmagicNum = 0;


var wins = 0;
var losses = 0;

$(".wins-text").append(wins);
$(".losses-text").append(losses);


function magicNumGenerator() {
  // assign random value between 19-120 to magicNum
  magicNum = Math.floor(Math.random() * 100) + 20;
  console.log(magicNum);
  currentmagicNum = magicNum;
  // display magicNum value on the HTML page
  $(".magicnum-text").html(magicNum);
};


function setCrystalValue() {
  $(".button").each(function () {
    var randomValue = Math.floor(Math.random() * 11) + 1;

    $(this).attr("data-value", randomValue);
    console.log(randomValue)
  })
}

function startGame() {
  //give set values to start game
  magicNumGenerator();
  setCrystalValue();
};


$(document).ready(function () {
  //click funtion for cry1-cry4, when clicked the number value generated should subtract from the magicNum value
  startGame();
  $(".button").on("click", function () {
    console.log("hi")
    var crystalValue = $(this).attr("data-value");
    currentmagicNum -= crystalValue;
    $(".magicnum-text").html(currentmagicNum);
    

    // write new value to page

    if (currentmagicNum === 0) {
      wins++;
      $(".wins-text").append(wins);
      // startgame();
      startGame();
      alert("YOU WIN!!!");
    }

    //assign conditions for when the value hits below 0 player looses counter increases
    else if (currentmagicNum < 0) {
      losses++;
      $(".losses-text").append(losses);
      startGame();
      alert("YOU LOST!!!");
    }

  })


  // $(".cry1-text").on("click", function () {
  //   currentMagicNum = magicNum - cry1Num;
  //   $(".magicnum-text").html(currentMagicNum);
  // });
  // //cry2
  // $(".cry2-text").on("click", function () {
  //   currentMagicNum = magicNum - cry1Num;
  //   $(".magicnum-text").html(currentMagicNum);
  // });
  // //cry3
  // $(".cry3-text").on("click", function () {
  //   currentMagicNum = magicNum - cry1Num;
  //   $(".magicnum-text").html(currentMagicNum);
  // });
  // //cry4
  // $(".cry4-text").on("click", function () {
  //   currentMagicNum = magicNum - cry1Num;
  //   $(".magicnum-text").html(currentMagicNum);
  // });


  //assign conditions for when the value hits 0 player wins and counter increases

});