Simon Game
This game is based on the Simon game which launched in 1978. It is an electronic game of memory skill.

UX
Playing the Game
Click here to see a flowchart outlining the game logic.

The user clicks start circle in the gameboard.
A random colored block is flashs and its sound plays.
The user clicks the same coloured button.
If the user clicks the correct button, a bell rings, the user earns a point, and the same button plus one more random coloured button is highlighted. Each button's unique sound plays as it is highlighted.
If the user continues to click the correct sequence of buttons, the sequence and the user's score increase by one with each round. The user can start over at any time by clicking the “Reset” button and then the "Start" button.
If the user clicks the wrong button or sequence of buttons, an error sound plays and one of two alerts appears:
Normal mode: "Incorrect. Please attempt the sequence again." When the user clicks OK, the button or sequence of buttons is highlighted again.
Strict mode: "Incorrect. Please click Start to begin a new game." When the user clicks OK, the page reloads.
When the user’s score reaches 20, a fanfare plays and an alert saying "You win!" appears.
User Stories
I want a game with clear, intuitive rules.

Clear, concise instructions are prominently displayed on the page and user interface elements are clearly labelled.

I want clear feedback when I click buttons.

When the Start button is clicked, it is disabled to prevent it from being clicked again while a game is in progress. When the Reset button is clicked, it is briefly highlighted before the page reloads. When the user presses the mouse button over one of the coloured buttons, the drop shadow disappears, mimicking the effect of pressing a button, its colour is lightened and a sound unique to that button plays. When the user releases the mouse button, the coloured button reverts to its original state.

I want clear feedback at the end of each round.

If the user clicks the correct sequence, the score increases and a bell rings before the next round starts. If they clicked an incorrect sequence, an error sound plays and an alert pops up telling them that they made a mistake, and what to do next: start over in strict mode or try the same sequence again in normal mode. Because excessive popups are annoying, I only included ones that give useful information to the user.

I want to know when the game is over.

If the user achieves a score of 20, a fanfare plays and an alert saying "You win!" pops up.

I don't want irritating sounds.

I carefully chose sounds that would be pleasant to listen to over and over. If a sound started to irritate me after I'd been testing the game for a while, I replaced it.

I want to be able to cancel a game and start over if I want to.

There is a clearly labelled Reset button.

Features
Instructions prominently displayed so that the user knows what to do.
Checkbox to select Strict Mode if desired.
Start button to begin the game.
Score counter to keep track of the user's score.
Reset button to cancel the game. When clicked, it reloads the page, emptying the user and game sequences and reverting the score to zero.
Blue, red, yellow and orange buttons. The original Simon game has a green button, but I replaced it with orange to make it easier for colourblind people to play.
Features Not Implemented
I could add the option to mute sounds for people who find them annoying. However, since modern browsers allow users to mute individual tabs, this is not an essential feature.

Technologies Used
HTML5
CSS3
Bootstrap
JavaScript
JQuery
Jasmine
Jasmine-jQuery 
Testing
I tested the CSS with W3C CSS Validator.
I tested the HTML with W3C Markup Validator.
I tested the JavaScript with JS Hint, JS Lint and Jasmine. The Jasmine test files are at simon-game/jasmine.html, simon-game/assets/js/jasmine-jquery.js and simon-game/assets/js/scriptSpec.js. To run the tests, view jasmine.html in a browser. Since most of the functionality depends on click events, there are not many features that can be tested with Jasmine.
I tested the user interface by playing the game multiple times.
I clicked the Start and Reset buttons to ensure that they functioned correctly.
I checked the highlighted buttons against gameSequence in the browser console to ensure that the correct buttons were highlighted.
I checked the score as I played to ensure that it increased by one point for each correct round input.
I played a full game multiple times to ensure that the fanfare played and the "You win!" alert displayed correctly when the score reached 20.
I made deliberate errors in strict mode to ensure that the error tone played, the correct alert popped up and the page reloaded after I clicked OK.
I made deliberate errors in normal mode to ensure that the error tone played, the correct alert popped up, the sequence was highlighted again after I clicked OK and the game continued to function correctly.
I checked the layout on a desktop PC, a laptop, a tablet computer and a smartphone to ensure that it displays correctly at all screen sizes.

Bug

Deployment
I deployed the project to GitHub as folows:
I pushed my local repository to GitHub
I navigated to the repository in GitHub.
I clicked on Settings
I scrolled down to GitHub Pages and selected the master branch as the source
I clicked Save.
The procedure worked without any errors, and there are no differences between the deployed version and the development version.

Credits
Audio

