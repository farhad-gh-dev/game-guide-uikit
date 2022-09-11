import styled, { css } from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

const btnSize = {
  width_mobile: 80,
  height_mobile: 37,

  width_laptop: 130,
  height_laptop: 52,

  width_large_screen: 160,
  height_large_screen: 65,
};

const primaryVariantStyle = css`
  background-color: ${color.primary};
  border-color: transparent;
  color: white;

  &:hover {
    filter: brightness(85%);
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    border-color: transparent;
  }
`;

const primaryOutlinedVariantStyle = css`
  background-color: ${color.lightest};
  color: ${color.primary};
  border: 2px solid ${color.primary};
  font-weight: ${typography.weight.regular};

  @media (min-width: ${breakpoint.laptopScreen}px) {
    border: 3px solid ${color.primary};
    font-weight: ${typography.weight.bold};
  }
`;

const disabledStyle = css`
  background-color: #e8e8e8;
  color: ${color.text_disabled};
  cursor: not-allowed;
  pointer-event: none;
`;

export const StyledButton = styled.button<{
  variant?: string;
  disabled: boolean;
}>`
  width: ${btnSize.width_mobile}px;
  height: ${btnSize.height_mobile}px;
  padding: 0 10px;
  font-size: ${typography.size.text_12};
  font-weight: ${typography.weight.medium};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-color: #f7f7f7;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    transition: 0.1s ease-in-out;
    transform: scale(0.96);
  }

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: ${btnSize.width_laptop}px;
    height: ${btnSize.height_laptop}px;
    padding: 0 15px;
    font-size: ${typography.size.text_16};
    border: 2px solid rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    border-radius: 16px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: ${btnSize.width_large_screen}px;
    height: ${btnSize.height_large_screen}px;
    padding: 0 20px;
    font-size: ${typography.size.text_18};
    border-radius: 20px;
  }

  ${(props) => props.variant === "primary" && primaryVariantStyle};

  ${(props) =>
    props.variant === "primary-outlined" && primaryOutlinedVariantStyle};

  ${(props) => props.disabled && disabledStyle};
`;

export const StyledLink = StyledButton.withComponent("a");
