import styled from "styled-components";
import { color, breakpoint } from "../../Styles/styles";

export const StyledIcon = styled.div<{
  color?: string;
  strokeColor?: string;
  width?: string;
  widthTablet?: string;
  widthDesktop?: string;
  height?: string;
  heightLaptop?: string;
  heightDesktop?: string;
}>`
  display: inline-block;
  position: relative;

  svg {
    display: block;
    height: auto;
    width: auto;

    ${(props) =>
      props.height &&
      `
            height: ${props.height}
        `};
    ${(props) =>
      props.heightLaptop &&
      `
            @media (min-width: ${breakpoint.laptopScreen}px) {
                height: ${props.heightLaptop};
            } 
        `};
    ${(props) =>
      props.heightDesktop &&
      `
            @media (min-width: ${breakpoint.largeScreen}px) {
                height: ${props.heightDesktop};
            }
        `};

    ${(props) =>
      props.width &&
      `
            width: ${props.width}
        `};
    ${(props) =>
      props.widthTablet &&
      `
            @media (min-width: ${breakpoint.laptopScreen}px) {
                width: ${props.widthTablet}
            } 
        `};
    ${(props) =>
      props.widthDesktop &&
      `
            @media (min-width: ${breakpoint.largeScreen}px) {
                width: ${props.widthDesktop}
            } 
        `};

    path,
    line,
    g {
      ${(props) =>
        props.color &&
        `
            fill: ${props.color === "primary" ? color.primary : props.color};
        `};

      ${(props) =>
        props.strokeColor &&
        `
            stroke: ${
              props.strokeColor === "primary"
                ? color.primary
                : props.strokeColor
            };
        `};
    }
  }
`;

export const Counter = styled.span<{ width?: string }>`
  position: absolute;
  bottom: 70%;
  left: 61%;
  padding: 0 3px;
  border-radius: 3px;
  background-color: ${color.primary};
  color: ${color.lightest};
  font-size: 10px;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 0 4px;
    border-radius: 4px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 0 5px;
    border-radius: 5px;
    font-size: 12px;
  }
`;
