import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledAvatar = styled.div<{ imageSrc?: any }>`
  position: relative;
  border-radius: 100%;

  &,
  svg {
    width: 35px;
    height: 35px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      width: 50px;
      height: 50px;
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      width: 60px;
      height: 60px;
    }
  }

  ${(props) =>
    props.imageSrc &&
    `
      background-image: url(${props.imageSrc});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `};
`;

export const StyledProfileType = styled.div`
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 4px;
  background-color: ${color.dark_yellow};
  border-radius: 3px;
  font-size: ${typography.size.text_10};
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 0.05em;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    bottom: -8px;
    padding: 0 7px;
    border-radius: 4px;
    font-size: ${typography.size.text_12};
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    bottom: -9px;
    padding: 1px 9px 1px;
    border-radius: 5px;
    font-size: ${typography.size.text_12};
  }
`;
