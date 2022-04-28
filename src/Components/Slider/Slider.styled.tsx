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

export const StyledSliderItem = styled.div`
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

  @media (min-width: ${breakpoint.laptopScreen}px) {
    border-radius: 20px;
    padding: 45px;
  }
  @media (min-width: ${breakpoint.largeScreen}px) {
    border-radius: 35px;
    padding: 80px 60px;
  }
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

export const StyledDescription = styled.div`
  display: none;

  @media (min-width: ${breakpoint.laptopScreen}px) {
    display: flex;
    flex-direction: column;
    width: 445px;
    margin-top: 37px;
  }

  @media (min-width: ${breakpoint.largeScreen}px) {
    width: 500px;
    margin-top: 44px;
  }

  p {
    text-shadow: 0px 0px black;

    @media (min-width: ${breakpoint.largeScreen}px) {
      font-size: ${typography.size.text_20};
    }
  }
`;
