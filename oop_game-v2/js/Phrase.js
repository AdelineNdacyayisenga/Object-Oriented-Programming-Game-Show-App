/* Treehouse FSJS Techdegree
@author Adeline Ndacyayisenga
 * Project 4 - OOP Game App
 * Phrase.js */

const ul = document.querySelector('#phrase ul');

//serves as the blueprint for creating phrase objects
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.phraseArray = phrase.toLowerCase().split('');
    }
    addPhraseToDisplay() {
        ul.innerHTML = ``;
        for(let i = 0; i < this.phrase.length; i ++) {
            if(this.phrase[i] === ' ') {
                const html = `<li class="space">${this.phrase[i]}</li>`;
                ul.innerHTML += html;
            } else {
            const html = `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            ul.innerHTML += html; 
            }
        }
        return ul;
    }

    //check to see if the selected letter matches any letter in the phrase
    checkLetter(letter) {
        if (this.phraseArray.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    //reveal the letters on the board that matches the player's selection
    //param is the player's selection
    showMatchedLetter(letter) {
        const similarLetters = document.querySelectorAll(`#phrase li.${letter}`);
        if(this.checkLetter(letter)) {
            similarLetters.forEach(lett => {
                lett.classList.remove('hide');
                lett.classList.add('show');
            });
        }
    }
}


const phrase1 = new Phrase("Thank you Jesus");
console.log(phrase1.addPhraseToDisplay());
phrase1.showMatchedLetter('z');
