import styled from "styled-components";
import { color, breakpoint } from "../../Styles/styles";

export const StyledRating = styled.div`
  padding: 4px 11px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px) brightness(105%);

  @media (min-width: ${breakpoint.sm}px) {
    padding: 6px 18px;
    border-radius: 15px;
  }
`;

export const StyledRatingContent = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;

    @media (min-width: ${breakpoint.sm}px) {
      width: 23px;
      height: 23px;
    }
  }

  span {
    color: ${color.lightest};
    margin-left: 4px;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;

    @media (min-width: ${breakpoint.sm}px) {
      margin-left: 8px;
    }
  }
`;
