import styled from "styled-components/native";
import { Button } from "./Button";
export const success = "#43a047";
export const SuccessButton = styled(Button).attrs(props => ({
  color: "white"
}))`
  background-color: ${success};
`;
