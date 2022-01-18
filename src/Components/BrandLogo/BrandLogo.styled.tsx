import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledBrandLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.img<{
  imageOnly?: boolean;
}>`
  height: 25px;

  @media (min-width: ${breakpoint.sm}px) {
    height: 50px;
  }

  ${(props) =>
    !props.imageOnly &&
    `
    margin-right: 7px;
  
    @media (min-width: ${breakpoint.sm}px) {
        margin-right: 20px;
    }
  `}
`;

export const StyledText = styled.span<{
  colored?: boolean;
}>`
  color: ${color.lightest};
  font-size: ${typography.size.text_14};
  text-transform: capitalize;

  @media (min-width: ${breakpoint.sm}px) {
    font-size: ${typography.size.text_20};
    font-weight: 600;
  }

  ${(props) => props.colored && `color: ${color.primary}`}
`;
