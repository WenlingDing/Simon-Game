 /* global $ */
window.onload = function (){
    $(document).ready(function(){
//Define the properties that are needed in the game
var addedflash = [];
var computer = [];
var count = 0;
var game = false;

//start a new game so need to reset
function start() {
reset();
}

//reset all varible so need to empty all records
function reset(){
    //level is zero
    count=0;
    //remove the events about colors
    $('.colorblock').unbind();
    // adjust the font style in the click board
    $('#count').html('Level:'+count);
    $('#simon').text('Simon').css({
              fontSize: '7vw',
              textalign: 'center',
              position: 'absolute',
              left:'5vw',
    });
    $('#start').text('Start Game!').css({
          fontSize:'5vw',
          textalign: 'center',
          position: 'absolute',
          top:'15vw',
          left: '5vw',
    });
    getRand();
    flashArray(); 
    }

// get a rand int between min and max, both min and max are inclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;  
}
// get a random colorblock to colorflash array
function getRand() {
var n = getRandomIntInclusive(1, 4);
addedflash.push(n);
}

//pattern array
function flashArray() {
    for (let i = 0; i < addedflash.length; i++) {
// defined color blocks flash every one second       
        let time = i * 1000;
        setTimeout(colorShow, time);
        }
    }

function colorShow() {
// get the last element value of the array
      let thisBlock = addedflash.pop();
//make animation after each random color choosed
      $('#' + thisBlock).fadeOut(150).fadeIn(150);
      computer.push(thisBlock);
// if computer turn done, it is player turn
      if (addedflash.length <= 0) {
      player();
    }
} 

function player(){
      $('.colorblock').click(function(){
          //get the first element value of the array
          let theblock = computer.shift();
          //get the id from player click
          let colorId = $(this).attr('id');
          //make player click animation
           $(this).fadeOut(150).fadeIn(150);
          //compare each click id and computer turn flash id, if it matches, player win
              if (theblock == colorId){
                addedflash.push(theblock);
                    if (computer.length <= 0){
                        //add  level  
                          count++;
                          $('#count').html('Level: ' + count);
                          $('.colorblock').unbind();
                          getRand();
                          setTimeout(flashArray, 1500);
                          if (count==20){
                              alert('You are so great!')}
                    }
                        } 
                  else {
                      game = false;
                      $('#simon').text('Game Over').css({
                          color:'red',
                          fontSize:'5vw',
                          margin:0,
                          position: 'absolute',
                          top:'2vw',
                          right:'3vw',
                      });
                      $('#start').text('Click to Restart!').css({
                          fontSize:'4vw',
                          position:'absolute',
                          top:'17vw',
                          left: '4vw',
                      });
                      alert("Oh,you lost! Let's start again!");
                      addedflash = [];
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
};
