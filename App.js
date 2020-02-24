import React from 'react';

import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const BaseText = styled.Text`
  color: ${props => props.color};
`

const BaseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 40px;
  min-width: 100px;
`;

export const Button = ({children, color, ...props}) => (
  <BaseButton {...props}>
    <BaseText color={color} >{children}</BaseText>
  </BaseButton>
);

export const success = "#43a047";

export const SuccessButton = styled(Button).attrs(props => ({
  color: "white",
}))`
  background-color: ${success};
`;

export default function App() {
  return (
    <Container>
      <SuccessButton>Start</SuccessButton>
    </Container>
  );
}
