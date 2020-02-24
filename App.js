import React, { useState } from "react";
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
  starting: "starting"
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

const Game = () => {
  return (
    <StressBar stressLevel={30}/>
  );
};

export default function App() {
  const [gameState, setGameState] = useState(GameState.starting);
  const startGame = () => setGameState(GameState.playing);
  return (
    <Container>
      {gameState === GameState.starting && (
        <SuccessButton onPress={startGame}>Start</SuccessButton>
      )}
      {gameState === GameState.playing && <Game />}
    </Container>
  );
}
