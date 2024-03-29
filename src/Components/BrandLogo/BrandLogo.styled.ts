import styled, { css } from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

const imageOnlyStyle = css`
  margin-right: 7px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    margin-right: 15px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    margin-right: 20px;
  }
`;
const coloredTextStyle = css`
  color: ${color.primary};
`;

export const StyledBrandLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div<{
  imageOnly?: boolean;
}>`
  &,
  svg {
    height: 25px;
    width: auto;

    @media (min-width: ${breakpoint.laptopScreen}px) {
      height: 44px;
    }

    @media (min-width: ${breakpoint.largeScreen}px) {
      height: 50px;
    }
  }

  ${(props) => !props.imageOnly && imageOnlyStyle};
`;

export const BrandTitle = styled.span<{
  colored?: boolean;
}>`
  color: ${color.lightest};
  font-size: ${typography.size.text_14};
  text-transform: capitalize;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_18};
    font-weight: 600;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: ${typography.size.text_20};
  }

  ${(props) => props.colored && coloredTextStyle}
`;
