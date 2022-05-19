import styled from "styled-components";
import { color, breakpoint } from "../../../Styles/styles";

export const StyledTabsListSmallScreen = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 25px;

  &::after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: none;
  }
`;

export const SliderControlButton = styled.button<{
  isOnLeft?: boolean;
  isOnRight?: boolean;
  isDisabled?: boolean;
}>`
  background-color: transparent;
  margin-bottom: 13px;

  ${(props) =>
    props.isOnLeft &&
    `
        padding: 0 15px 0 5px;
      `};

  ${(props) =>
    props.isOnRight &&
    `
        padding: 0 5px 0 15px;
      `};

  ${(props) =>
    props.isDisabled &&
    `
        opacity: 0.5;
      `};
`;

export const TabsSlider = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
`;

export const TabsWrapper = styled.div<{
  horizontalOffsetValue?: number;
}>`
  display: flex;
  transition: 0.3s ease-in-out;
`;

export const Tab = styled.div<{
  activeItem?: boolean;
  focusedItem?: boolean;
  isLeftSideItem?: boolean;
  isRightSideItem?: boolean;
}>`
  position: relative;
  padding: 0 7px 15px;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    width: 35%;
    background-color: ${color.primary};
    border-radius: 5px;
    opacity: 0;
    transition: 300ms ease-in-out;
  }

  h4 {
    cursor: pointer;
    opacity: 0.45;
    font-weight: 500;
    white-space: nowrap;
    pointer-events: none;
  }

  ${(props) =>
    props.activeItem &&
    `
      &::before{
        opacity: 1;
      }

      h4{
        opacity: 1;
        font-weight: 700;
      }
    `};

  ${(props) =>
    props.focusedItem &&
    `
      h4{
        pointer-events: unset;
      }
    `};

  ${(props) =>
    props.isLeftSideItem &&
    `
      h4{
        background: linear-gradient(
          -90deg,
          rgba(0, 0, 0, 1),
          rgba(255, 255, 255, 0) 65%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `};

  ${(props) =>
    props.isRightSideItem &&
    `
      h4{
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 1),
          rgba(255, 255, 255, 0) 65%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `};
`;
