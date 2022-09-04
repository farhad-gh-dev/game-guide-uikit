import React from "react";
import {
  StyledSliderControl,
  SliderControlContainer,
  SlideIndicators,
  SingleIndicator,
  SlideNumber,
} from "./SliderControl.styled";

export type SliderControlProps = {
  numberOfSlides?: number;
  activeSlide?: number;
  className?: string;
  handleSlideChange?: (i: number) => void;
};

const SliderControl: React.FC<SliderControlProps> = ({
  numberOfSlides = 1,
  activeSlide = 1,
  className = "",
  handleSlideChange = () => {},
}) => {
  return (
    <StyledSliderControl className={className} data-testid="slider-control">
      <SliderControlContainer>
        <SlideIndicators>
          {[...Array(numberOfSlides)].map((i, index) => {
            return (
              <SingleIndicator
                key={index}
                data-testid={`indicator-${index + 1}`}
                aria-label={`slide-${index + 1}-indicator`}
                active={index + 1 === activeSlide}
                onClick={() => handleSlideChange(index + 1)}
              />
            );
          })}
        </SlideIndicators>
        <SlideNumber>
          {activeSlide}/{numberOfSlides}
        </SlideNumber>
      </SliderControlContainer>
    </StyledSliderControl>
  );
};

export default SliderControl;
