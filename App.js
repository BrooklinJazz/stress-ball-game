import React, { useState } from "react";
import { Container } from "./components/Container";
import { SuccessButton } from "./components/SuccessButton";
import { GameState } from "./components/GameState";
import { Game } from "./components/Game";
import { DangerButton } from "./components/DangerButton";

export default function App() {
  const [gameState, setGameState] = useState(GameState.starting);
  const startGame = () => setGameState(GameState.playing);
  const winGame = () => setGameState(GameState.won);
  const loseGame = () => setGameState(GameState.lost);
  return (
    <Container>
      {gameState === GameState.starting && <SuccessButton onPress={startGame}>Start</SuccessButton>}
      {gameState === GameState.playing && <Game loseGame={loseGame} winGame={winGame} />}
      {gameState === GameState.lost && <DangerButton onPress={startGame}>You Lost, Try Again?</DangerButton>}
      {gameState === GameState.won && <SuccessButton onPress={startGame}>You Won, Play Again?</SuccessButton>}
    </Container>
  );s
}
