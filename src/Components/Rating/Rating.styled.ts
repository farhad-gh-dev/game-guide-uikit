import styled from "styled-components";
import { color, breakpoint } from "../../Styles/styles";

export const StyledRating = styled.div`
  display: inline-block;
  padding: 4px 11px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px) brightness(105%);

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 4px 12px;
    border-radius: 12px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 6px 18px;
    border-radius: 15px;
  }
`;

export const RatingContent = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    margin-bottom: 3px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      width: 20px;
      height: 20px;
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      width: 23px;
      height: 23px;
    }
  }

  span {
    color: ${color.lightest};
    margin-left: 4px;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);

    @media (min-width: ${breakpoint.laptopScreen}px) {
      margin-left: 6px;
    }
    @media (min-width: ${breakpoint.largeScreen}px) {
      margin-left: 8px;
    }
  }
`;
