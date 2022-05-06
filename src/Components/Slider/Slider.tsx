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
  StyledDescription,
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
  description?: string;
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
  activeSlide = 0,
  onBuyHandler = () => {},
}) => {
  return (
    <StyledSlider>
      {sliderItems?.map((item, index) => {
        return (
          <StyledSliderItem
            active={activeSlide === index}
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
                />
              ) : (
                <StyledDefaultTitle>
                  {item.title ? item.title : "No Title"}
                </StyledDefaultTitle>
              )}
              <StyledDescription isLight={item.lightDescription}>
                <Text size="md">{item.description}</Text>
              </StyledDescription>
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
