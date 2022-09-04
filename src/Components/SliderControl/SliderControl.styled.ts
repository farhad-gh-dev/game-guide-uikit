import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledSliderControl = styled.div`
  display: inline-block;
  height: 100%;
  padding-left: 5px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding-left: 15px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    padding-left: 25px;
  }
`;

export const SliderControlContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideIndicators = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    margin-bottom: 15px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-bottom: 25px;
  }
`;

export const SingleIndicator = styled.button<{ active?: boolean }>`
  flex-grow: 1;
  width: 3px;
  border-radius: 3px;
  margin-bottom: 7px;
  background-color: rgba(0, 0, 0, 0.15);
  transition: 0.3s ease-in-out;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 3px;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 5px;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  ${(props) =>
    props.active &&
    `
        background-color: ${color.primary}
    `};
`;

export const SlideNumber = styled.span`
  font-size: ${typography.size.text_14};
  letter-spacing: 0.03em;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_20};
  }
`;
