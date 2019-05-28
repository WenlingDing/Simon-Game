/* global $ */
window.onload = function () {
    $(document).ready(function() {
//Define the properties that are needed in the game,the colorflash arary
var turn = [];
var computer = [];
var count = 0;
var game = false;

//start a new game so need to reset all varible firstly
function start() {
reset();
}

//reset all varible 
function reset(){
    count=0;
    $('.colorblock').unbind();
    $('#count').html('Level:'+count);
    $('#simon').html('Simon');
    $('#start').html('Start Game!');
    getRand();
    flashArray(); 
    }

// get a rand int between min and max, both min and max are inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}
// get a random colorblock
function getRand() {
var n = getRandomIntInclusive(1, 4);
turn.push(n);
}

// defined color blocks flash every one second
function flashArray() {
    for (let i = 0; i < turn.length; i++) {
        let time = i * 1000;
        setTimeout(colorShow, time);
        }
    }

//let color blocks flash 
function colorShow() {
      let thisBlock = turn.pop();
      game = true;
//make animation for every color 
      $('#' + thisBlock).fadeOut(150).fadeIn(150);
      computer.push(thisBlock);
      if (turn.length <= 0) {
      player();
    }
} 

//get the id from player click, and though determine whether it matches the last computer array can get player win will lost
function player(){
      $('.colorblock').click(function(){
          let theblock = computer.shift();
          let colorId = $(this).attr('id');
           $(this).fadeOut(150).fadeIn(150);
              if (theblock == colorId){
                turn.push(theblock);
                    if (computer.length <= 0) {
                          count++;
                          $('#count').html('Level: ' + count);
                          $('.colorblock').unbind();
                          //user is finished clicking through the pattern successfully
                          // add new square to pattern
                          getRand();
                          // playPattern();
                          setTimeout(flashArray, 1500);
                          if (count==20){
                              alert('You are so great!')}
                    }
                        } 
                  else {
                      game = false;
                      $('#simon').text('Game Over');
                      $('#start').text('Click to Restart!');
                      alert("Oh,you lost! Let's start again！");
                      turn = [];
                      computer = [];
                     }
}); 
} 
// click the circle to restart
$('#round').click(function() {
    if(game == false){
    start();
}});
});
}
