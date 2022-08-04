import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 35px;
    width: auto;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      height: 50px;
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      height: 65px;
    }
  }
`;

export const LoadingRing = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 10px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 130px;
    height: 130px;
    margin-bottom: 24px;
  }

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top: 2px solid ${color.primary};
    border-right: 2px solid ${color.primary};
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;

    &:before {
      content: "";
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${color.primary};
      top: -2px;
      right: -4px;

      @media (min-width: ${breakpoint.laptopScreen}px) {
        width: 8px;
        height: 8px;
        top: -3px;
        right: -5px;
      }

      @media (min-width: ${breakpoint.largeScreen}px) {
        width: 10px;
        height: 10px;
        top: -4px;
        right: -6px;
      }
    }
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;

export const LoadingText = styled.p`
  text-transform: capitalize;
  font-size: ${typography.size.text_14};
  font-weight: ${typography.weight.medium};

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_22};
  }
`;
