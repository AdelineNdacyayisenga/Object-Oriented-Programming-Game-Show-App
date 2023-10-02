/* Treehouse FSJS Techdegree
@author Adeline Ndacyayisenga
 * Project 4 - OOP Game App
 * Game.js */

/**
 * This class creates methods for starting and ending the game, handling interactions,
 * getting a random phrase, checking for a win, and removing a life from the scoreboard.
 * 
 * The class responsible for managing the game's state, logic, and interactions
 */
let startScreen = document.querySelector("#overlay");
const heartImages = document.querySelectorAll('#scoreboard img');
const gameOverMessage = document.querySelector('#game-over-message');
const li = document.querySelectorAll('#phrase li.letter');
//console.log(heartImages);
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null; //the Phrase object currently in play
    }
    /**
     * Begins game by selecting a random phrase and displaying grey box holders it to user
     */
    startGame() {
        startScreen.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Selects random phrase from phrases property
     * @returns {Object} Phrase object chosen to be used
     */
    getRandomPhrase () {
        const random = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[random];
    }

    //controls the game logic. Checks to see if the button clicked by the player matches a letter in the phrase
    //and directs the game based on a correct or incorrect guess
    handleInteraction() {

    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        const liveHearts = heartImages.filter(image => {
            image.src = "images/liveHeart.png";
        });
        liveHearts[0].src = "images/lostHeart.png";
        this.missed += 1;
        if (this.missed = 5) {
            this.gameOver();
        }
    }

    /**
     * Checks if player won(revealed all letters in active phrase)
     * @returns {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        //const phrase = this.activePhrase.phrase.split('');
        const check = false;
        ul.forEach(li => {
            if(ul.classList.contains('show')) {
                check = true;
            }
        });
        return check;

    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        startScreen.style.display = 'block';
        if(gameWon === true) {
            gameOverMessage.textContent = "Congratulations, you guessed the phrase correctly!";
            startScreen.classList.replace('start', 'love');
            //startScreen.classList.remove('start');
            //startScreen.classList.add('win');
        } else {
            gameOverMessage.textContent = "Ooops, at least one letter wasn't correct. Please play again.";
            startScreen.classList.replace('start', 'love');
        }
    }

}