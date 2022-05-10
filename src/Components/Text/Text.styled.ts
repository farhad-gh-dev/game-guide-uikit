import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledParagraph = styled.p<{
  isInline?: boolean;
  opacity?: number;
  size?: string;
  fontWeight?: string;
  textTransform?: string;
  overflowEllipsis?: string;
}>`
  display: block;
  color: ${color.darkest};
  font-size: ${typography.size.text_12};
  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_16};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_18};
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
    props.size === "sm" &&
    `
    font-size: ${typography.size.text_12};
    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_14};
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_16};
    }
    `};

  ${(props) =>
    props.size === "md" &&
    `
    font-size: ${typography.size.text_14};
    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_16};
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_18};
    }
    `};

  ${(props) =>
    props.size === "lg" &&
    `
    font-size: ${typography.size.text_16};
    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_18};
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_20};
    }
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
  
  ${(props) =>
    props.overflowEllipsis &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `};
`;

export const StyledSpan = StyledParagraph.withComponent("span");
