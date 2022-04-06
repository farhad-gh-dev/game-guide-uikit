import styled from "styled-components";
import { color, breakpoint } from "../../Styles/styles";

export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledToggler = styled.div`
  display: flex;
  padding: 6px 0 6px 6px;
  cursor: pointer;

  div {
    width: 3px;
    height: 3px;
    border-radius: 3px;
    background-color: ${color.darkest};
    margin-right: 3px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      height: 4px;
      width: 4px;
      margin-right: 4px;
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      height: 5px;
      width: 5px;
      margin-right: 5px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StyledMenu = styled.div`
  position: absolute;
  top: 17px;
  right: 0;
  width: 110px;
  padding: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    top: 25px;
    width: 170px;
    padding: 20px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    top: 26px;
    border-radius: 8px;
  }
`;

export const StyledMenuItem = styled.div<{ active?: boolean }>`
  position: relative;
  text-align: left;
  transition: 0.15s ease-in-out;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${(props) =>
    props.active &&
    `
        background-color: rgba(0, 0, 0, 0.05);

        &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 3px;
            background-color: ${color.darkest};
        }
    `};

  a {
    display: block;
    padding: 6px 18px 7px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      padding: 9px 23px;
    }
  }
`;
