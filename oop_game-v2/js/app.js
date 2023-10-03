/* Treehouse FSJS Techdegree
@author Adeline Ndacyayisenga
 * Project 4 - OOP Game App
 * app.js */

/**
 * We create a new instance of the 'Game' class and add event listeners for the start button
 * and onscreen keyboard buttongs
 */

const startGame = document.getElementById('btn__reset');
const div = document.querySelector('#qwerty');
let game;

startGame.addEventListener('click', e => {
    game = new Game();
    game.startGame();
    game.reset();

});

/**
 * Onscreen keyboard buttons' click event listener
 */

div.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    } 
});

div.addEventListener('keydown', e => {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});
