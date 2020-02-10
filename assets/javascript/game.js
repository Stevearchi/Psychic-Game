let winsDisplay = document.getElementById("wins");
let lossesDisplay = document.getElementById("losses");
let guessesDisplay = document.getElementById("guesses");
let guessesRemDisplay = document.getElementById("guessesRem");
let wins = 0;
let losses = 0;
let alpha = [];
let guesses = [];
let guessesRem = 8;
let randomChar;
// Generate all letters in the alphabet as strings, add them to alpha array
function genAlpha(charA, charZ) {
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);
    for (; i <= j; i++)
        alpha.push(String.fromCharCode(i));
}
// Checks if guess was correct and resets game if nessecary.
function checkGuess(){
    guessesRem--;
    guessesRemDisplay.textContent = guessesRem;
    guessesDisplay.textContent = guesses;
    console.log("random char: ", randomChar)
    console.log(guesses[guesses.length-1])
    if (guesses[guesses.length-1] === randomChar){
        alert("You win!");
        wins++;
        startGame();
    } else if (guesses.length === 8){ // game resets once user has guessed 8 times
        alert("LOSER!!")
        losses++;
        startGame();
    }
}
// starts a new game, resetting guesses remaining and the guesses array
function startGame(){
    guessesRem = 8;
    winsDisplay.textContent = wins; // this is the only time wins and losses are printed to the screen
    lossesDisplay.textContent = losses;
    guesses = [];
    randomChar = genRandomChar();

}

function genRandomChar(){
    let randnum = Math.floor(Math.random()*26);
    return(alpha[randnum]);
}

genAlpha('a', 'z'); // Initiate genAlpha
startGame();  // Begin first game
document.onkeydown = function(event){
    guesses.push(event.key.toLowerCase());
    checkGuess();
}


