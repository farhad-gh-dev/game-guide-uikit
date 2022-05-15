import styled from "styled-components";
import { color, breakpoint } from "../../../Styles/styles";

export const StyledShoppingCardIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg {
    g,
    path,
    line {
      transition: 0.15s ease-in-out;
    }
  }
`;

export const StyledAddToCardButton = styled.button<{
  isActive?: boolean;
}>`
  position: absolute;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 1s ease-in-out;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    right: -20px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    right: -25px;
  }

  .hexagon,
  .hexagon-laptop,
  .hexagon-desktop {
    display: none;

    path {
      transition: 0.15s ease-in-out;
      fill: ${(props) => (props.isActive ? color.primary : color.lightest)};
    }
  }

  .hexagon {
    display: unset;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      display: none;
    }
  }

  .hexagon-laptop {
    @media (min-width: ${breakpoint.laptopScreen}px) {
      display: unset;
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      display: none;
    }
  }

  .hexagon-desktop {
    @media (min-width: ${breakpoint.largeScreen}px) {
      display: unset;
    }
  }

  ${StyledShoppingCardIcon} {
    svg {
      g,
      path,
      line {
        stroke: ${(props) =>
          props.isActive ? color.lightest : color.primary} !important;
      }
    }
  }

  &:hover {
    .hexagon,
    .hexagon-laptop,
    .hexagon-desktop {
      path {
        fill: ${(props) => (props.isActive ? color.lightest : color.primary)};
      }
    }

    ${StyledShoppingCardIcon} {
      svg {
        g,
        path,
        line {
          stroke: ${(props) =>
            props.isActive ? color.primary : color.lightest} !important;
        }
      }
    }
  }
`;
