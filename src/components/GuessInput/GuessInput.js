import React from 'react';

function GuessInput({handleAddGuess, gameResult}) {
  const [wordGuess, setWordGuess] = React.useState('');
 
  console.debug("====>Render GuessInput -> gameOutcome: " + JSON.stringify(gameResult));

  function addWordGuess(event) {   
    console.debug("->addWordGuess: " + wordGuess); 
    event.preventDefault()    
    handleAddGuess(wordGuess)
    setWordGuess('')            
  }

  return (
    <form className="guess-input-wrapper" onSubmit={addWordGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"  pattern='[\w]{5}' maxLength={5} minLength={5}
        title="Guess with words of length 5"
        value={wordGuess}
        onChange={() => {
          let guessText = event.target.value
          setWordGuess(guessText.toUpperCase())           
        }}
        disabled={gameResult.gameOver}
      />
    </form>
  )
}

export default GuessInput;
