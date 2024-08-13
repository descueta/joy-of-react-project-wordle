import React from 'react';

function Guess({wordGuess}) {
  let wordGuessArray = []

  if (wordGuess != undefined) {
    wordGuessArray = [...wordGuess]
    console.log(wordGuessArray)    
  }
  
  return (
    <p className="guess">
      <span className="cell">{wordGuessArray[0]}</span>
      <span className="cell">{wordGuessArray[1]}</span>
      <span className="cell">{wordGuessArray[2]}</span>
      <span className="cell">{wordGuessArray[3]}</span>
      <span className="cell">{wordGuessArray[4]}</span>
  </p>    
  )
}

export default Guess;
