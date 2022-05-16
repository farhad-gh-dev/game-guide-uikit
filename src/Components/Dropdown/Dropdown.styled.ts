import styled from "styled-components";
import { color, ZIndex, breakpoint } from "../../Styles/styles";

export const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  z-index: ${ZIndex.dropdown};
`;

export const MenuToggler = styled.div`
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

export const Menu = styled.div`
  position: absolute;
  top: 17px;
  right: 0;
  width: 110px;
  padding: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background-color: ${color.lightest};

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

export const MenuItem = styled.div<{ active?: boolean }>`
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

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 3px;
            background-color: ${color.darkest};
        }

        a::before {
          display: none;
        }
    `};

  a {
    position: relative;
    display: block;
    padding: 6px 18px 7px;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      padding: 9px 23px;
    }

    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      right: 18px;
      width: calc(100% - 36px);
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);

      @media (min-width: ${breakpoint.laptopScreen}px) {
        right: 23px;
        width: calc(100% - 46px);
        height: 2px;
      }
    }
  }
`;
