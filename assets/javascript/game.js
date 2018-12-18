var name = "priyesh"
console.log(name);


var magicNum;

//added another variable to represent currentmagicNUM since cannot have 2 same variables
var currentmagicNum;

var cry1Num;
var cry2Num;
var cry3Num;
var cry4Num;


var wins = 0;
var losses = 0;




$(function magicNumGenerator() {
  // assign random value between 19-120 to magicNum
  magicNum = Math.floor(Math.random() * 100) + 20;
  console.log(magicNum);
  // display magicNum value on the HTML page
  $(".magicnum-text").html(magicNum);
});


$(function cryNumGenerator() {
  //assign random value between 1-12 to cry1Num, cry2Num, cry3Num, cry4Num
  cry1Num = Math.floor(Math.random() * 11) + 1;
  cry2Num = Math.floor(Math.random() * 11) + 1;
  cry3Num = Math.floor(Math.random() * 11) + 1;
  cry4Num = Math.floor(Math.random() * 11) + 1;
});

// $(function startGame() {
//   //give set values to start game
//   magicNumGenerator();
//   cryNumGenerator();
//   });


$(function magicNumCalc() {
  //click funtion for cry1-cry4, when clicked the number value generated should subtract from the magicNum value
  // startgame();
  //cry1
  $(".cry1-text").on("click", function () {
    currentMagicNum = magicNum - cry1Num;
    $(".magicnum-text").html(currentMagicNum);
  });
  //cry2
  $(".cry2-text").on("click", function () {
    currentMagicNum = magicNum - cry1Num;
    $(".magicnum-text").html(currentMagicNum);
  });
  //cry3
  $(".cry3-text").on("click", function () {
    currentMagicNum = magicNum - cry1Num;
    $(".magicnum-text").html(currentMagicNum);
  });
  //cry4
  $(".cry4-text").on("click", function () {
    currentMagicNum = magicNum - cry1Num;
    $(".magicnum-text").html(currentMagicNum);
  });



//assign conditions for when the value hits 0 player wins and counter increases
if (magicNum === 0) {
  wins++;
  $(".wins-text").html(wins);
  // startgame();
  alert("YOU WIN!!!");
}

//assign conditions for when the value hits below 0 player looses counter increases
else if (magicNum < 0) {
  losses++;
  $(".losses-text").html(losses);
  alert("YOU LOST!!!");
}

});
