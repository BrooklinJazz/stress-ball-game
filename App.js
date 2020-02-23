import React from 'react';
import { Text } from 'react-native';

import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <Container>
      <Text>Open up App.js to start working on your app!</Text>
    </Container>
  );
}
