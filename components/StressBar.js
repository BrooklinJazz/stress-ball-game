import React from "react";
import { StressContainer } from "./StressContainer";
import { StressLevel } from "./StressLevel";
export const StressBar = ({ stressLevel }) => {
  return (<StressContainer>
    <StressLevel stressLevel={stressLevel} />
  </StressContainer>);
};
