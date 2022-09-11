import styled, { css } from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

const activeNavbarItemStyle = css`
  transform: translateY(-5px);

  & * {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 25px;
    background-color: ${color.primary};
    border-radius: 3px;
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    transform: translateY(0);
    &::before {
      top: 0;
      bottom: unset;
      height: 4px;
      width: 36px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    &::before {
      height: 6px;
      width: 40px;
    }
  }
`;

export const StyledNavbar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const StyledNavbarItem = styled.li<{ active?: boolean }>`
  position: relative;
  padding: 5px 10px;
  transition: 0.2s ease-in-out;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 0 25px;
    display: flex;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 0 35px;
  }

  & * {
    text-transform: capitalize;
    padding: 0;
    margin: 0;
    opacity: 0.5;
    color: ${color.lightest};
    font-size: ${typography.size.text_14};
    letter-spacing: 0.05em;
    transition: 0.2s ease-in-out;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      font-size: ${typography.size.text_16};
    }

    &:hover {
      opacity: 1;
    }
  }

  ${(props) => props.active && activeNavbarItemStyle};
`;
