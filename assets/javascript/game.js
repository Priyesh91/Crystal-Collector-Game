var name = "priyesh"
console.log(name);


var magicNum;

var cry1Num;
var cry2Num;
var cry3Num;
var cry4Num;


var wins = 0;
var losses = 0;


$(function startGame() {
  
});

$(function magicNumGenerator() {
  // assign random value between 19-120 to magicNum
  magicNum = Math.floor(Math.random() * 100) + 20;
  console.log(magicNum);
  // display magicNum value on the HTML page
  $(".magicnum-text").html(magicNum);
});


$(function cryNumGenerator(params) {
  //assign random value between 1-12 to cry1Num, cry2Num, cry3Num, cry4Num
  cry1Num = Math.floor(Math.random() * 11) + 1;
  cry2Num = Math.floor(Math.random() * 11) + 1;
  cry3Num = Math.floor(Math.random() * 11) + 1;
  cry4Num = Math.floor(Math.random() * 11) + 1;
});





//click funtion for cry1-cry4, when clicked the number value generated should subtract from the magicNum value
$(".cry1-text").on("click", function subtraction(cry1Num) {
  console.log($(this).attr(cry1Num));
})


$(function numTractor() {
  //assign conditions for when the value hits 0 player wins and counter increases
  if (magicNum === 0) {
    wins++;
    $(".wins-text").html(wins);
    startgame();
    alert("YOU WIN!!!");
  } else if (magicNum < 0) {
    losses++;
    $(".losses-text").html(losses);
    alert("YOU LOST!!!");
  }
  //assign conditions for when the value hits below 0 player looses counter increases
});