import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const guessAllowed = range(0,NUM_OF_GUESSES_ALLOWED,1);
console.info(guessAllowed);

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  return (
  <>Put a game here!

    {      
      guessAllowed.map((count) => {
        let wordGuess = ''
        if (guessResults[count] != undefined) {
          wordGuess = guessResults[count]
        }
        console.log('wordGuess: ' + wordGuess)
        return <Guess key={Math.random()} wordGuess={wordGuess}/>
      })
    }

    <GuessResults guessResults={guessResults} />
    <GuessInput guessResults={guessResults} setGuessResults={setGuessResults}/>
  </>
  )
}

export default Game;
