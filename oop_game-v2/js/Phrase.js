/* Treehouse FSJS Techdegree
@author Adeline Ndacyayisenga
 * Project 4 - OOP Game App
 * Phrase.js */

/**
 * This class handles the creation of phrases
 */
const ul = document.querySelector('#phrase ul');

//serves as the blueprint for creating phrase objects
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = phrase.toLowerCase().split('');
    }
    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        ul.innerHTML = ``;
        for(let i = 0; i < this.phrase.length; i ++) {
            if(this.phrase[i] === ' ') {
                const html = `<li class="hide space">${this.phrase[i]}</li>`;
                ul.innerHTML += html;
            } else {
            const html = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            ul.innerHTML += html; 
            }
        }
        return ul;
    }

    /**
     * Checks to see if passed in letter matches a letter in the phrase
     * @param {string} letter A letter selected by the user(to check)
     * @returns boolean value
     */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Reveals the letter(s) on the board that matches the player's selection
     * @param {string} letter a letter selecter by the user(to display)
     */
    showMatchedLetter(letter) {
        const similarLetters = document.querySelectorAll(`#phrase li.${letter}`);
        if(this.checkLetter(letter)) { //if letter is in the phrase
            similarLetters.forEach(lett => {
                lett.classList.remove('hide');
                lett.classList.add('show');
            });
        }
    }

    /**
     * Hide phrase
     */
    hidePhrase () {
        
    }
}


