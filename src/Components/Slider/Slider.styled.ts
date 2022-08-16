import styled from "styled-components";
import { color, background, typography, breakpoint } from "../../Styles/styles";

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
`;

export const SliderContainer = styled.div`
  position: relative;
  height: 170px;
  width: 100%;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    height: 340px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 450px;
  }
`;

export const SliderItem = styled.div<{
  active?: boolean;
  backgroundImageSrc?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 30px 20px;
  background-color: ${background.placeholder_light};
  border-radius: 16px;
  opacity: 0;
  z-index: 0;
  transition: 0.3s ease-in-out;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    border-radius: 20px;
    padding: 45px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    border-radius: 35px;
    padding: 80px 60px;
  }

  ${(props) =>
    props.backgroundImageSrc &&
    `
    background-image: url("${props.backgroundImageSrc}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    `};

  ${(props) =>
    props.active &&
    `
    opacity: 1;
    z-index: 10;
    `};
`;

export const OverlayImage = styled.img<{
  imageHeight?: number;
  imagePositionFromRight?: number;
}>`
  position: absolute;
  right: 0;
  bottom: -4%;
  height: 120%;
  width: auto;
  max-width: 100%;

  ${(props) =>
    props.imagePositionFromRight &&
    `
    right: ${props.imagePositionFromRight}%;
    `};

  ${(props) =>
    props.imageHeight &&
    `
    height: ${props.imageHeight}%;
    `};
`;

export const TextArea = styled.div`
  flex: 1;
  position: relative;
`;

export const TitleImage = styled.img<{
  titleImageSrc?: string;
  titleImageHeight?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: auto;
  z-index: -1;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    height: 37px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 50px;
  }

  ${(props) =>
    props.titleImageHeight &&
    `
      height: ${props.titleImageHeight}%;

      @media (min-width: ${breakpoint.laptopScreen}px) {
        height: ${props.titleImageHeight}%;
      }

      @media (min-width: ${breakpoint.largeScreen}px) {
        height: ${props.titleImageHeight}%;
      }
    `};
`;

export const DefaultTitle = styled.span<{
  isLight?: boolean;
}>`
  font-size: ${typography.size.text_18};
  font-weight: 700;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_26};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: 37px;
  }

  ${(props) =>
    props.isLight &&
    `
      color: ${color.lightest}
    `}
`;

export const OverlayImageBottomCover = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 35px;
  background-color: white;
  z-index: 15;
  pointer-events: none;

  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 60px;
  }
`;
