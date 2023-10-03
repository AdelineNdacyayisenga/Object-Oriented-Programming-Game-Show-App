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

const phrase1 = new Phrase('focus on the future');
const phrase2 = new Phrase('You are amazing');
const phrase3 = new Phrase('never give up');
const phrase4 = new Phrase('always work hard');
const phrase5 = new Phrase('Be kind');


//const game = new Game();


// game.phrases.forEach((phrase, index) => {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//console.log(game.getRandomPhrase());
//game.getRandomPhrase().addPhraseToDisplay();

// game.startGame();
// console.log(`Active phrase - phrase: ${game.activePhrase.phrase}`);

/**
 * The event listener for the 'Start Game' button
 */

let game;
startGame.addEventListener('click', e => {
    game = new Game();
    game.phrases.push(phrase1);
    game.phrases.push(phrase2);
    game.phrases.push(phrase3);
    game.phrases.push(phrase4);
    game.phrases.push(phrase5);
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
