import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledAvatar = styled.div<{ imageSrc?: string }>`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-image: url(${(props) => (props.imageSrc ? props.imageSrc : "")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 60px;
    height: 60px;
  }
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
    bottom: -9px;
    padding: 1px 9px 1px 9px;
    border-radius: 5px;
    font-size: ${typography.size.text_12};
  }
`;
