import * as Styled from "./styles";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import computerLoading from "../../lotties/computerLoading.json";
import React from "react";

export const LoadingAnimation = () => {
  const LoadingAnimationMotion = motion(
    // eslint-disable-next-line react/display-name
    React.forwardRef<HTMLDivElement>((props, ref) => (
      <Styled.Wrapper ref={ref}>
        <Lottie
          animationData={computerLoading}
          style={{ width: "300px", height: "300px" }}
        />
      </Styled.Wrapper>
    )),
  );

  return (
    <LoadingAnimationMotion
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
    />
  );
};
