import React, { useState, useEffect } from "react";
import { StressBar } from "./StressBar";
import { StressBall } from "./StressBall";
export const Game = ({ winGame, loseGame }) => {
  const [stressLevel, setStressLevel] = useState(255 / 2);
  useEffect(() => {
    const stressInterval = setInterval(() => {
      setStressLevel(prevLevel => Math.min(prevLevel + 1, 255));
    }, 20);
    return () => clearInterval(stressInterval);
  }, [stressLevel]);
  useEffect(() => {
    if (stressLevel >= 255) {
      loseGame();
    }
    else if (stressLevel <= 0) {
      winGame();
    }
  }, [stressLevel]);
  const reduceStress = () => setStressLevel(prevLevel => Math.max(prevLevel - 30, 0));
  return (<>
    <StressBar stressLevel={stressLevel} />
    <StressBall onPress={reduceStress} />
  </>);
};
