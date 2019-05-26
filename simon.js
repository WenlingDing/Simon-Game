var turn = [];
var usedPattern = [];
var count = 0;
var game = false;
var greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var orangeSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

function add() {
var n = randNum(1, 4);
// add pattern to array
turn.push(n);
}

function playArray() {
// takes pattern array
for (var i = 0; i < turn.length; i++) {
var delayTime = i * 600;
setTimeout(colorShow, delayTime);
}
}

function colorShow() {
  var item = turn.pop();
      game = true;

// pops and removes first item of array 
      $('#' + item).animate({
      opacity: 0.2
      }, 200).animate({
      opacity: 1
      }, 100);
      
//animation takes 300 ms
 
    
usedPattern.push(item);
// take the item  removed from pattern and add it to used pattern 

if (turn.length <= 0) {
// add the click event once cpu is finished showing the pattern
createClicks();
}

} // end flashSquare()

function createClicks() {
      $('.colorblock').click(function() {
      // check if clicked element is the right square
      var item = usedPattern.shift();
      var colorId = $(this).attr('id');
      
      $(this).animate({opacity:0.2},200).animate({opacity:1},100)
      
      // if yes remove from used pattern and add to pattern
      if (item == colorId) {
      //adds item back to pattern array
      turn.push(item);
      
      if (usedPattern.length <= 0) {
      count++;
      $('#count').html('Level: ' + count);
      
      remove();
      //user is finished clicking through the pattern successfully
      // add new square to pattern
      add();
      
      // playPattern();
      setTimeout(playArray, 800);
      }
      
      } else {
      // else game over
      game = false;
      $('h1').html('Game Over').css({
      "color":"red",
      "font-size":"2.5em",
      "padding":"5px",
      "position": "relative",
      });
      
      $('p').html('Click to Restart!');
      // clear out pattern arrays
      turn = [];
      usedPattern = [];
      }
}); // end .square click
} // end create click

function remove() {
//removes all events from element 
$('.colorblock').unbind();
}

//start a new game all records removed
function start() {
remove();
add();
add();
playArray(); 
reset();
}

function reset() {
count = 0;
    $('#count').html('Level: ' + count);
    $('h1').html('Simon');
    $('p').html('Start Game!');
    }

$('#round').click(function() {
if(game === false){
    start();
    } 
    });

function randNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}