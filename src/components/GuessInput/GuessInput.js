import React from 'react';

function GuessInput() {
  const [wordGuess, setWordGuess] = React.useState('');
  
  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault()
      console.log({wordGuess})
      setWordGuess('')
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text"  pattern='[\w]{5}' maxLength={5} minLength={5}
        title="Guess with words of length 5"
        value={wordGuess}
        onChange={() => {
          setWordGuess(event.target.value)
          
        }}
      />
    </form>
  )
}

export default GuessInput;
