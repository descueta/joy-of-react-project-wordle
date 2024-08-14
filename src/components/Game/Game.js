import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';
import GameResultBanner from '../GameResultBanner/GameResultBanner';
import { checkGuess } from '../../game-helpers';
import { check } from 'prettier';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const guessAllowed = range(0,NUM_OF_GUESSES_ALLOWED,1);
console.info(guessAllowed);

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [gameOutcome, setGameOutcome] = React.useState(false)
  const [winner, setWinner] = React.useState(false)
  const [numTries, setNumTries] = React.useState('')

  console.debug("=====>Render Game");
  
  function checkGameOutcome(nextGuessResults) {    
    let gameOver = false
    let winner = false
    let numTries = 0

    console.debug("=>checkGameOutcome -> gameOutcome: " + gameOutcome);
    console.debug("=>checkGameOutcome -> nextGuessResults: " + nextGuessResults);

    nextGuessResults.map( (wordGuess, index) => {
      let guessAnswer = checkGuess(wordGuess, answer)
      if (guessAnswer != null) {
        console.debug("=>checkGameOutcome -> wordGuess: " + wordGuess + " guessAnswer: " + JSON.stringify(guessAnswer))
      } else {
        console.debug("=>checkGameOutcome -> wordGuess: " + wordGuess + " guessAnswer is null")
      }

      if (wordGuess === answer) {
        winner = true
        numTries = index + 1
        gameOver = true
      }
  
      if ((index == NUM_OF_GUESSES_ALLOWED - 1) && (!winner)) {        
        gameOver = true
      }
    })

    setGameOutcome(gameOver)
    setWinner(winner)
    setNumTries(numTries)
    console.debug("=>checkGameOutcome -> gameOver: " + gameOver + " | winner: " + winner);
  }  

  function handleAddGuess(word) {    
    const nextGuessResults = [...guessResults, word];
    setGuessResults(nextGuessResults); 
    checkGameOutcome(nextGuessResults);  
    console.debug("-->handleAddGuess: word: " + word + " guessResults: " + guessResults + " nextGuessResults: " + nextGuessResults);
  }



  return (
  <>Put a game here!

    <GameResultBanner guessResults={guessResults} gameWinner={winner} isGameOver={gameOutcome} answer={answer} numTries={numTries}/>

    {      
      guessAllowed.map((count) => {
        let wordGuess = ''
        if (guessResults[count] != undefined) {
          wordGuess = guessResults[count]
        }
        console.debug('->Display guessAllowed count: ' + count + ' wordGuess: ' + wordGuess)
        return <Guess key={Math.random()} wordGuess={wordGuess} answer={answer}/>
      })
    }
    
    <GuessInput handleAddGuess={handleAddGuess} gameOutcome={gameOutcome}/>
  </>
  )
}

export default Game;
