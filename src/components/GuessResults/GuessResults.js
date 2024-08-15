import React from 'react';

function GuessResults({guessResults}) {
  console.log("Rendering guess results: " + {guessResults})
  return (
    <div className="guess-results">
      {
        guessResults.map((guess) => {
          console.log(guess)
          return (
            <p className="guess" key={Math.random()}>{guess}</p>
          )
        })
      }      
    </div>       
  )
}

export default GuessResults;
