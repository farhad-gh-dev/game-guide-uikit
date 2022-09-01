import React from "react";
import LogoIcon from "./Logo";
import { StyledBrandLogo, LogoContainer, BrandTitle } from "./BrandLogo.styled";

export type BrandLogoProps = {
  imageOnly?: boolean;
  coloredText?: string;
  whiteText?: string;
  className?: string;
};

const BrandLogo: React.FC<BrandLogoProps> = (props) => {
  const {
    imageOnly,
    coloredText = "Game",
    whiteText = "Guide",
    className = "",
  } = props;

  return (
    <StyledBrandLogo className={className} data-testid="brand-logo">
      <LogoContainer imageOnly={imageOnly}>
        <LogoIcon />
      </LogoContainer>
      {!imageOnly ? (
        <>
          <BrandTitle colored>{coloredText}</BrandTitle>&nbsp;
          <BrandTitle>{whiteText}</BrandTitle>
        </>
      ) : null}
    </StyledBrandLogo>
  );
};

export default BrandLogo;
