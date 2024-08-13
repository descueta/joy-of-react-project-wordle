import React from 'react';

function GuessInput({ guessResults, setGuessResults }) {
  const [wordGuess, setWordGuess] = React.useState('');
  
  function addWordGuess(event) {
    event.preventDefault()
    console.log({wordGuess})
    let guessList = [...guessResults]
    guessList.push(wordGuess)
    console.log(guessList)
    setGuessResults(guessList)
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
      />
    </form>
  )
}

export default GuessInput;
