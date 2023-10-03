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
const gameOverMessage = document.querySelector('#game-over-message');
const buttons = document.querySelectorAll(".key");

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

    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - The clicked button element
     */
    handleInteraction(button) {
        
        if(this.activePhrase.phrase.includes(button.innerHTML)) {
            button.classList.add('chosen');
            button.disabled = true;
            this.activePhrase.showMatchedLetter(button.innerHTML);
            this.checkForWin();
            if(this.checkForWin() === true) {
                this.gameOver(this.checkForWin());
            }
        } else {
            button.classList.add('wrong');
            button.disabled = true;
            this.removeLife();
        }
    }
    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    
    removeLife() {
        let hearts = document.querySelectorAll('img');
        let aliveHearts = [];
        for(let i = 0; i < hearts.length; i++) {
            if(hearts[i].src.includes("images/liveHeart.png")) {
                aliveHearts.push(hearts[i]);
            }
        }
        aliveHearts[0].src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Checks if player won(revealed all letters in active phrase)
     * @returns {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        let listItems = document.querySelectorAll('li.letter');
        let hides = 0;
        
        listItems.forEach(li => {
            if(li.classList.value.includes("hide")) {
                hides += 1;
            }
        });
        if (hides === 0) {
            return true;
        } else {
            return false;
        }
        
    }

    reset() {
        ul.innerHTML = '';
        buttons.forEach(button => {
            if(button.tagName === "BUTTON") {
                
                if(button.className.includes('wrong')) {
                    button.disabled = false;
                    button.classList.remove('wrong');
                } else {
                    button.disabled = false;
                    button.classList.remove('chosen');
                }
                
            }
        });

        let hearts = document.querySelectorAll('img');
        hearts.forEach(heart => {
            heart.src = "images/liveHeart.png";
        });

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        startScreen.style.display = 'block';
        if(gameWon === true) {
            gameOverMessage.textContent = "Congratulations, you guessed the phrase correctly!";
            startScreen.classList.replace('start', 'win');
        } else {
            gameOverMessage.textContent = "Sorry. Better luck next time!";
            startScreen.classList.replace('start', 'lose');
        }
        this.reset();
        
    }
}