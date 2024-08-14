import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GameResultBanner({guessResults, answer, gameResult}) {

  console.debug("====>Render GameResultBanner -> gameResult: " + JSON.stringify(gameResult));

    if (gameResult.winner && gameResult.gameOver) {
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {gameResult.numTries} guesses</strong>.
          </p>
        </div>
      )
    } else if (!gameResult.winner && gameResult.gameOver) {
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
