import React from "react";
import Text from "../Text/Text";
import PriceBox from "./PriceBox/PriceBox";
import {
  StyledSlider,
  StyledSliderItem,
  StyledOverlayImage,
  StyledTextArea,
  StyledTitleImage,
  StyledDefaultTitle,
} from "./Slider.styled";

type SliderItem = {
  id?: string | number;
  title?: string;
  backgroundImageSrc?: string;
  overlayImageSrc?: string;
  /**
   * To percentage
   */
  overlayImageHeight?: number;
  /**
   * To percentage
   */
  overlayPositionFromRight?: number;
  titleImageSrc?: string;
  /**
   * To percentage
   */
  titleImageHeight?: number;
  lightDescription?: boolean;
  price?: number;
};

type Props = {
  sliderItems?: Array<SliderItem>;
  activeSlide?: number;
  onBuyHandler?: (itemId?: string | number) => void;
};

const Slider: React.FC<Props> = ({
  sliderItems = [],
  activeSlide = 1,
  onBuyHandler = () => {},
}) => {
  return (
    <StyledSlider>
      {sliderItems?.map((item, index) => {
        return (
          <StyledSliderItem
            active={activeSlide - 1 === index}
            backgroundImageSrc={item.backgroundImageSrc}
            key={item.id}
          >
            <StyledOverlayImage
              src={item.overlayImageSrc}
              imageHeight={item.overlayImageHeight}
              imagePositionFromRight={item.overlayPositionFromRight}
            />
            <StyledTextArea>
              {item.titleImageSrc ? (
                <StyledTitleImage
                  src={item.titleImageSrc}
                  title={item.titleImageSrc}
                  titleImageHeight={item.titleImageHeight}
                />
              ) : null}

              {!item.titleImageSrc && item.title ? (
                <StyledDefaultTitle>{item.title}</StyledDefaultTitle>
              ) : null}
            </StyledTextArea>
            <div>
              <PriceBox
                price={item.price}
                itemId={item.id}
                onBuyHandler={onBuyHandler}
              />
            </div>
          </StyledSliderItem>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
