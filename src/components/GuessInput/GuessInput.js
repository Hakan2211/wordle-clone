import React, { useState } from "react";

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ guess });
    handleGuessSubmit(guess);
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="^[A-Z]{5}$"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
