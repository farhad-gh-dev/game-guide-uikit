import React from "react";
import PriceBox from "./PriceBox/PriceBox";
import {
  StyledSlider,
  SliderItem,
  OverlayImage,
  TextArea,
  TitleImage,
  DefaultTitle,
} from "./Slider.styled";

export type SliderItem = {
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
  titleIsLight?: boolean;
  price?: number;
};

export type SliderProps = {
  sliderItems?: Array<SliderItem>;
  activeSlide?: number;
  className?: string;
  onBuyHandler?: (itemId?: string | number) => void;
};

const Slider: React.FC<SliderProps> = ({
  sliderItems = [],
  activeSlide = 1,
  className = "",
  onBuyHandler = () => {},
}) => {
  return (
    <StyledSlider className={className}>
      {sliderItems?.map((item, index) => {
        return (
          <SliderItem
            active={activeSlide - 1 === index}
            backgroundImageSrc={item.backgroundImageSrc}
            key={item.id}
          >
            <OverlayImage
              src={item.overlayImageSrc}
              imageHeight={item.overlayImageHeight}
              imagePositionFromRight={item.overlayPositionFromRight}
            />
            <TextArea>
              {item.titleImageSrc ? (
                <TitleImage
                  src={item.titleImageSrc}
                  title={item.titleImageSrc}
                  titleImageHeight={item.titleImageHeight}
                />
              ) : null}

              {!item.titleImageSrc && item.title ? (
                <DefaultTitle isLight={item.titleIsLight}>
                  {item.title}
                </DefaultTitle>
              ) : null}
            </TextArea>
            <div>
              <PriceBox
                price={item.price}
                itemId={item.id}
                onBuyHandler={onBuyHandler}
              />
            </div>
          </SliderItem>
        );
      })}
    </StyledSlider>
  );
};

export default Slider;
