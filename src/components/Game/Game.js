import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  const handleGuessSubmit = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };
  return (
    <>
      {gameStatus}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleGuessSubmit={handleGuessSubmit}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      {/* <GameOverBanner
        answer={answer}
        gameStatus={gameStatus}
        numOfGuesses={guesses.length}

/> */}
    </>
  );
}

export default Game;
