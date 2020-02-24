import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BaseText = styled.Text`
  color: ${props => props.color};
`;

const BaseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 40px;
  min-width: 100px;
`;

export const Button = ({ children, color, ...props }) => (
  <BaseButton {...props}>
    <BaseText color={color}>{children}</BaseText>
  </BaseButton>
);

export const success = "#43a047";

export const SuccessButton = styled(Button).attrs(props => ({
  color: "white"
}))`
  background-color: ${success};
`;

const GameState = {
  playing: "playing",
  starting: "starting",
  won: "won",
  lost: "lost"
};

const StressContainer = styled.View`
  border: solid 1px black;
  width: 40px;
  height: 255px;
  justify-content: flex-end;
`;

const StressLevel = styled.View(
  props => `
  height: ${props.stressLevel}px;
  background-color: rgb(${props.stressLevel}, ${255 - props.stressLevel}, 0);
`
);

const StressBar = ({ stressLevel }) => {
  return (
    <StressContainer>
      <StressLevel stressLevel={stressLevel} />
    </StressContainer>
  );
};

const StressBall = styled(SuccessButton)`
  border-radius: 50%;
  margin-top: 15px;
  min-width: 50px;
  height: 50px;
`

const Game = ({winGame, loseGame}) => {
  const [stressLevel, setStressLevel] = useState(255 / 2);
  useEffect(() => {
    const stressInterval = setInterval(() => {
      setStressLevel(prevLevel => Math.min(prevLevel + 1, 255));
    }, 20);
    return () => clearInterval(stressInterval);
  }, [stressLevel]);

  useEffect(() => {
    if (stressLevel >= 255) {
      loseGame()
    } else if (stressLevel <= 0) {
      winGame()
    }
  }, [stressLevel])

  const reduceStress = () => setStressLevel(prevLevel => Math.max(prevLevel - 30, 0))

  return (
    <>
    <StressBar stressLevel={stressLevel}/>
    <StressBall onPress={reduceStress}/>
    </>
  );
};

const danger = "#b00020";

const DangerButton = styled(Button)`
  background-color: ${danger};
`

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
