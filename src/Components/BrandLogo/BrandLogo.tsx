import React from "react";
import LogoIcon from "../../Assets/brand-logo.svg";
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
      <StyledLogo src={LogoIcon} imageOnly={imageOnly} />
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
