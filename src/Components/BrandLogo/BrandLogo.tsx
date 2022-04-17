import React from "react";
import LogoIcon from "./Logo";
import { StyledBrandLogo, StyledLogo, StyledText } from "./BrandLogo.styled";

type Props = {
  imageOnly?: boolean;
  coloredText?: string;
  whiteText?: string;
};

const Button: React.FC<Props> = (props) => {
  const { imageOnly, coloredText = "Game", whiteText = "Guide" } = props;

  return (
    <StyledBrandLogo>
      <StyledLogo imageOnly={imageOnly}>
        <LogoIcon />
      </StyledLogo>
      {!imageOnly ? (
        <>
          <StyledText colored>{coloredText}</StyledText>&nbsp;
          <StyledText>{whiteText}</StyledText>
        </>
      ) : null}
    </StyledBrandLogo>
  );
};

export default Button;
