import React from "react";
import { StyledLoading, LoadingRing, LoadingText } from "./Loading.styled";
import DarkLogo from "./DarkLogo";

const Loading: React.FC = () => {
  return (
    <StyledLoading>
      <LoadingRing>
        <DarkLogo />
        <span></span>
      </LoadingRing>
      <LoadingText>loading...</LoadingText>
    </StyledLoading>
  );
};

export default Loading;
