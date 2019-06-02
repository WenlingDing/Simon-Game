Simon Game
==
This game is based on the Simon game which was launched in 1978. It is an electronic game of memory skill. The game is designed with 4 different color blocks with a center icon to start (or restart) the game. The different blocks will flash in random order and its for the user to remember and click the color blocks in the order its flash. As the level gets higher, the difficulty gets higher as number of the flashes the user have to remember increases.

UX
--
Playing the Game

To start, user clicks on "Start Game!" circle icon at the centre of the game.
Game begins and a random colored block flash once
The user clicks a button.
If the user clicks the correct button, the level will increment by 1 and the game repeat itself. However, the no. of flashes increments too.
The user will continue the game until he/she loses. The maximum level a user can get is unlimited. However, at level 20, there will be a message to congrats the user in reaching the level.
To lose, the user will click the color block in the incorrect order it was flashed. Upon lose, a message dialog will inform user and the circle icon will display "Game over".
User can click the circle icon to restart the game
Though the game is simple, I still put certain design elements to make sure its easy for the user to follow and play the game to maximize the enjoyment of the game.

For the top part of the game, I provided a simple summary of the game introduction

For the background of page, I choose colors that are not too light and in contrast to the background of the website for a pleasant viewing experience.

The button to start (or restart) will start the game upon click and will disable thereafter to avoid a likely scenario a user may accidentally click and restart the game all over

The flashes of the random color blocks are clear and at a reasonable speed to make it challenging for the user but not too difficult to lose interest.

The user can click the order of the flashes and if its correct, the color block will flash again to acknowledge the click was successful so the user can move on to the next move (if required), If user has cleared the level, the level will increment clearly and there will be a slight pause before the next level begins to allow the user time to reset and concentrate on the next level.

Features
--
Instructions prominently displayed so that the user knows what to do. Start button to begin the game. Score counter to keep track of the user's score and its located right at the middle for easy tracking. If a user loses the game, a message dialog will inform client and he same start button will be used inform user the game has ended and to click again to restart the game.
Blue, red, green and orange buttons are used and its colors are easy to view and focus against the brighter pink background.

Features Not Implemented
--
I could add the option to have sounds to increase the game experience

Technologies Used
--
HTML5 <br>
CSS3  <br>
Bootstrap 4.3.1  <br>
JavaScript  <br>
JQuery 3.2.1  <br>
Jasmine <br>

test
--
I tested the HTML and CSS By Chrome Developer Tools to ensure that it displays correctly at all screen sizes. <br>
I tested the JavaScript with Jasmine.  <br>
The Jasmine test files are at index.html, spec/spec.js.  <br>
To run the tests, view index.html in a browser. Since most of the functionality depends on click events, there are not many features that can be tested with Jasmine. I tested the user interface by playing the game multiple times. I clicked the Start and Reset buttons to ensure that they functioned correctly. I checked the score as I played to ensure that it increased by one point for each correct round input. I played a full game multiple times to ensure that a alert message displayed correctly when the score reached 20.

Deployment
--
I deployed the project to GitHub as folows: https://github.com/WenlingDing/Simon-Game
I pushed my repository to GitHub I selected the master branch as the source
