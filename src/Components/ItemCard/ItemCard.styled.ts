import styled from "styled-components";
import { typography, breakpoint } from "../../Styles/styles";

export const ImageContainer = styled.div<{
  backgroundImage?: string;
}>`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 20px);
  height: 160px;
  background-color: grey;
  border-radius: 14px;
  transition: 0.2s ease-in-out;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    width: calc(100% - 30px);
    height: 185px;
    border-radius: 16px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: calc(100% - 40px);
    height: 260px;
    border-radius: 20px;
  }

  ${(props) =>
    props.backgroundImage &&
    `
        background-image: url(${props.backgroundImage});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    `};
`;

export const RatingContainer = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${breakpoint.laptopScreen}px) {
    bottom: 14px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    bottom: 20px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 80px 12px 20px;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 14px;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 100px 12px 25px;
    border-radius: 16px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 140px 25px 30px;
    border-radius: 20px;

    p {
      font-size: ${typography.size.text_20} !important;
    }
  }
`;

export const StyledItemCard = styled.a`
  display: block;
  position: relative;
  width: 100%;
  padding: 95px 0 0;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    padding: 100px 0 0;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    padding: 140px 0 0;
  }

  &:hover ${ImageContainer} {
    transform: translateX(-50%) scale(0.96);
  }
`;
