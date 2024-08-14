import React from 'react';

function GuessInput({handleAddGuess, gameOutcome}) {
  const [wordGuess, setWordGuess] = React.useState('');
 
  console.debug("====>Render GuessInput");

  function addWordGuess(event) {   
    console.debug("->addWordGuess: " + wordGuess + " gameOutcome: " + gameOutcome); 
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
        disabled={gameOutcome}
      />
    </form>
  )
}

export default GuessInput;
