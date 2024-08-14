import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GameResultBanner({guessResults, gameWinner, isGameOver, answer}) {

  console.log("======>Render GameResultBanner");

    if (gameWinner && isGameOver) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numTries} guesses</strong>.
          </p>
        </div>
      )
    } else if (!gameWinner && isGameOver) {
      return (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>  
      )
    } else {
        return (
          <div/>
        )
    }
    

}

export default GameResultBanner;
