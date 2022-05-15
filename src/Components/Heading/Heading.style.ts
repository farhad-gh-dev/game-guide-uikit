import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledH1 = styled.h1<{
  isInline?: boolean;
  opacity?: number;
  fontWeight?: string;
  textTransform?: string;
}>`
  color: ${color.darkest};
  font-size: ${typography.size.text_26};
  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_30};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_32};
  }

  ${(props) =>
    props.isInline &&
    `
    display: inline-block;
    `};

  ${(props) =>
    props.opacity &&
    `
    opacity: ${props.opacity};
    `};

  ${(props) =>
    props.fontWeight &&
    `
    font-weight: ${props.fontWeight};
    `};

  ${(props) =>
    props.textTransform &&
    `
    text-transform: ${props.textTransform};
    `};
`;

export const StyledH2 = styled(StyledH1).attrs({ as: "h2" })`
  font-size: ${typography.size.text_22};
  line-height: 37px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_24};
    line-height: 42px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_28};
    line-height: 48px;
  }
`;

export const StyledH3 = styled(StyledH1).attrs({ as: "h3" })`
  font-size: ${typography.size.text_18};
  line-height: 31px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_20};
    line-height: 33px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_22};
    line-height: 37px;
  }
`;

export const StyledH4 = styled(StyledH1).attrs({ as: "h4" })`
  font-size: ${typography.size.text_14};
  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_20};
  }
`;

export const StyledH5 = styled(StyledH1).attrs({ as: "h5" })`
  font-size: ${typography.size.text_14};
  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_20};
  }
`;

export const StyledH6 = styled(StyledH1).attrs({ as: "h6" })`
  font-size: ${typography.size.text_14};
  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_20};
  }
`;
