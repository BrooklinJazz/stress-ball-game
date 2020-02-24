import styled from "styled-components/native";
export const StressLevel = styled.View(props => `
  height: ${props.stressLevel}px;
  background-color: rgb(${props.stressLevel}, ${255 - props.stressLevel}, 0);
`);
