import styled, { css } from "styled-components";
import { color, breakpoint } from "../../../Styles/styles";

const activeTabStyle = css`
  &::after {
    opacity: 1;
  }

  h4 {
    opacity: 1;
    font-weight: 700;
  }
`;

export const StyledTabsListLargeScreen = styled.div`
  display: none;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 35px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-bottom: 50px;
  }
`;

export const Tab = styled.div<{
  active?: boolean;
}>`
  position: relative;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 0 12px 20px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 0 30px 30px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    height: 7px;
    width: 38%;
    background-color: ${color.primary};
    border-radius: 5px;
    opacity: 0;
    transition: 300ms ease-in-out;

    @media (min-width: ${breakpoint.largeScreen}px) {
      bottom: -5px;
      height: 9px;
    }
  }

  h4 {
    cursor: pointer;
    opacity: 0.55;
    font-weight: 500;
    white-space: nowrap;
  }

  ${(props) => props.active && activeTabStyle};
`;
