import React from "react";
import {
  StyledSliderControl,
  StyledSliderControlContainer,
  StyledSlideIndicators,
  StyledSingleIndicator,
  StyledSlideNumber,
} from "./SliderControl.styled";

type Props = {
  numberOfSlides?: number;
  activeSlide?: number;
  handleSlideChange?: Function;
};

const SliderControl: React.FC<Props> = ({
  numberOfSlides = 1,
  activeSlide = 1,
  handleSlideChange = () => {},
}) => {
  return (
    <StyledSliderControl>
      <StyledSliderControlContainer>
        <StyledSlideIndicators>
          {[...Array(numberOfSlides)].map((i, index) => {
            return (
              <StyledSingleIndicator
                key={index}
                active={index + 1 === activeSlide}
                onClick={() => handleSlideChange(index + 1)}
              />
            );
          })}
        </StyledSlideIndicators>
        <StyledSlideNumber>
          {activeSlide}/{numberOfSlides}
        </StyledSlideNumber>
      </StyledSliderControlContainer>
    </StyledSliderControl>
  );
};

export default SliderControl;
