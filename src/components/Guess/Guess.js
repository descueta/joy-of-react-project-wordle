import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({wordGuess, answer}) {
  let wordGuessArray = []

  console.info("====>Render Guess");

  if (wordGuess != undefined && wordGuess != '') {
    wordGuessArray = [...wordGuess]
    console.log("wordGuess: " + wordGuess + " wordGuessArray: " + wordGuessArray)    
  } else {
    console.log("wordGuess is undefined or blank")
  }

  let guessAnswer = checkGuess(wordGuess, answer)
  if (guessAnswer != null) {
    console.log("guessAnswer: " + JSON.stringify(guessAnswer))
  }

  if (guessAnswer != null) {
    return (
      <p className="guess">
        <span className={`cell ${guessAnswer[0].status}`}>{guessAnswer[0].letter}</span>
        <span className={`cell ${guessAnswer[1].status}`}>{guessAnswer[1].letter}</span>
        <span className={`cell ${guessAnswer[2].status}`}>{guessAnswer[2].letter}</span>
        <span className={`cell ${guessAnswer[3].status}`}>{guessAnswer[3].letter}</span>
        <span className={`cell ${guessAnswer[4].status}`}>{guessAnswer[4].letter}</span>
      </p>    
    )
  } else {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>       
    )
  }

  /*
  return (
    <p className="guess">
      <span className="cell ${guessAnswer[0].status}">{guessAnswer[0].letter}</span>
      <span className="cell ${guessAnswer[1].status}">{guessAnswer[1].letter}</span>
      <span className="cell ${guessAnswer[2].status}">{guessAnswer[2].letter}</span>
      <span className="cell ${guessAnswer[3].status}">{guessAnswer[3].letter}</span>
      <span className="cell ${guessAnswer[4].status}">{guessAnswer[4].letter}</span>
  </p>    
  )  
  */
}

export default Guess;
