import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import Lottie, { useLottie } from "lottie-react";
import computerLoading from "../../lotties/computerLoading.json";

export const LoadingAnimation = () => {
  const [out, setOut] = useState(false);
  const { View, pause, play } = useLottie(
    { animationData: computerLoading, loop: false, autoplay: true },
    { width: "150px", height: "150px" },
  );

  useEffect(() => {
    pause();
    const timeout = setTimeout(() => {
      setOut(true);
    }, 2000);

    const initTimeout = setTimeout(() => {
      play();
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initTimeout);
    };
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.AnimationContainer out={out}>
        <h1>E</h1>
        {View}
      </Styled.AnimationContainer>
    </Styled.Wrapper>
  );
};
