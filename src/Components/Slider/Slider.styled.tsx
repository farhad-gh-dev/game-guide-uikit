import styled from "styled-components";
import { color, typography, breakpoint } from "../../Styles/styles";

export const StyledSlider = styled.div`
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

export const StyledSliderItem = styled.div<{
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
  background-color: #f2f2f2;
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
    `}

  ${(props) =>
    props.active &&
    `
    opacity: 1;
    z-index: 100;
    `}
`;

export const StyledOverlayImage = styled.img<{
  imageHeight?: number;
  imagePositionFromRight?: number;
}>`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 120%;
  width: auto;

  ${(props) =>
    props.imagePositionFromRight &&
    `
    right: ${props.imagePositionFromRight}%;
    `}

  ${(props) =>
    props.imageHeight &&
    `
    height: ${props.imageHeight}%;
    `}
`;

export const StyledTextArea = styled.div``;

export const StyledTitleImage = styled.img<{
  titleImageSrc?: string;
}>`
  height: 25px;
  width: auto;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    height: 37px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    height: 50px;
  }
`;

export const StyledDefaultTitle = styled.span`
  font-size: ${typography.size.text_18};
  font-weight: 700;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    font-size: ${typography.size.text_26};
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    font-size: 37px;
  }
`;

export const StyledDescription = styled.div<{
  isLight?: boolean;
}>`
  display: none;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: flex;
    flex-direction: column;
    width: 445px;
    margin-top: 37px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 500px;
    margin-top: 32px;
  }

  p {
    text-shadow: 0px 0px black;

    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_20};
    }

    ${(props) =>
      props.isLight &&
      `
    color: ${color.lightest};
    `}
  }
`;
