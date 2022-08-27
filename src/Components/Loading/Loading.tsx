import React from "react";
import { StyledLoading, LoadingRing, LoadingText } from "./Loading.styled";
import DarkLogo from "./DarkLogo";

type LoadingProps = {
  coverPage?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ coverPage = false }) => {
  return (
    <StyledLoading coverPage={coverPage}>
      <LoadingRing>
        <DarkLogo />
        <span></span>
      </LoadingRing>
      <LoadingText>loading...</LoadingText>
    </StyledLoading>
  );
};

export default Loading;
