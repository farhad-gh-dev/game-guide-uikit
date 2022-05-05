import styled from "styled-components";
import { color, breakpoint, typography } from "../../Styles/styles";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;

  svg {
    g {
      stroke: ${color.lightest};

      @media (min-width: ${breakpoint.laptopScreen}px) {
        stroke: ${color.darkest};
      }
    }
  }
`;

export const StyledDivider = styled.div`
  display: none;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.2);
    width: 1px;
    height: 34px;
    margin: 0 15px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 45px;
    margin: 0 20px 0 24px;
  }
`;

export const StyledInputContainer = styled.div<{
  isActive?: boolean;
}>`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: unset;
    flex: 1;
    position: unset;
    height: auto;
    width: auto;
    background-color: transparent;
  }
`;

export const StyledInput = styled.input`
  width: calc(100% - 100px);
  margin: 0;
  padding: 0;
  padding-bottom: 10px;
  background-color: transparent;
  text-align: center;
  font-size: ${typography.size.text_14};
  border-bottom: 1px solid ${color.lightest};
  color: ${color.lightest};

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: 100%;
    padding: 0;
    font-size: ${typography.size.text_18};
    text-align: left;
    border-bottom: none;
    color: ${color.darkest};
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_22};
  }

  &::placeholder {
    color: ${color.lightest};

    @media (min-width: ${breakpoint.laptopScreen}px) {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: none;
  color: ${color.lightest};
  font-size: ${typography.size.text_20};
  cursor: pointer;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: none;
  }
`;
