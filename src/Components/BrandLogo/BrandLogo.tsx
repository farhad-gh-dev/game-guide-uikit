import React from "react";
import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";
import LogoIcon from "../../Assets/brand-logo.svg";

const StyledBrandLogo = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLogo = styled.img<{
  imageOnly?: boolean;
}>`
  height: 25px;

  @media (min-width: ${breakpoint.sm}px) {
    height: 50px;
  }

  ${(props) =>
    !props.imageOnly &&
    `
    margin-right: 7px;
  
    @media (min-width: ${breakpoint.sm}px) {
        margin-right: 20px;
    }
  `}
`;

const StyledText = styled.span<{
  colored?: boolean;
}>`
  color: ${color.lightest};
  font-size: ${typography.size.text_14};
  text-transform: capitalize;

  @media (min-width: ${breakpoint.sm}px) {
    font-size: ${typography.size.text_20};
    font-weight: 600;
  }

  ${(props) => props.colored && `color: ${color.primary}`}
`;

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
