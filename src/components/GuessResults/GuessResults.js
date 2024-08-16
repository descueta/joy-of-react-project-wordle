import React from 'react';
import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function GuessResults({guessResults, answer}) {
  const guessAllowed = range(0,NUM_OF_GUESSES_ALLOWED,1);
  console.info(guessAllowed);
  
  console.log("Rendering guess results: " + {guessResults})
  return (  
      guessAllowed.map((count) => {
        let wordGuess = ''
        if (guessResults[count] != undefined) {
          wordGuess = guessResults[count]
        }
        console.debug('->Display guessAllowed count: ' + count + ' wordGuess: ' + wordGuess)
        return <Guess key={Math.random()} wordGuess={wordGuess} answer={answer}/>
      })
  )     
}

export default GuessResults;
