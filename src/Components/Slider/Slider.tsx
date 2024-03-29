import React from "react";
import PriceBox from "./PriceBox/PriceBox";
import {
  StyledSlider,
  SliderContainer,
  SliderItem,
  OverlayImage,
  TextArea,
  TitleImage,
  DefaultTitle,
  OverlayImageBottomCover,
} from "./Slider.styled";

export type SliderItemType = {
  id?: string;
  title?: string;
  backgroundImageSrc?: string;
  overlayImageSrc?: string;
  overlayImage3DEffect?: boolean;
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
  sliderItems?: Array<SliderItemType>;
  basketItems?: Array<string>;
  activeSlide?: number;
  overlayImage3DOffsets?: [xOffset: number, yOffset: number];
  className?: string;
  onToggleInCart?: (itemId?: string) => void;
};

const Slider: React.FC<SliderProps> = ({
  sliderItems = [],
  basketItems = [],
  activeSlide = 1,
  overlayImage3DOffsets = [0, 0],
  className = "",
  onToggleInCart = () => {},
}) => {
  return (
    <StyledSlider data-testid="slider">
      <SliderContainer className={className}>
        {sliderItems?.map((item, index) => {
          const { overlayImage3DEffect = true } = item;
          return (
            <SliderItem
              data-testid={`slide-${index + 1}`}
              active={activeSlide - 1 === index}
              backgroundImageSrc={item.backgroundImageSrc}
              key={item.id}
            >
              {item.overlayImageSrc && (
                <OverlayImage
                  alt={`${item.title} overlay`}
                  src={item.overlayImageSrc}
                  imageHeight={item.overlayImageHeight}
                  imagePositionFromRight={item.overlayPositionFromRight}
                  style={
                    overlayImage3DEffect
                      ? {
                          transform: `perspective(800px)
                                      rotateY(${overlayImage3DOffsets[0]}deg)
                                      rotateX(${overlayImage3DOffsets[1]}deg)`,
                        }
                      : {}
                  }
                />
              )}
              <TextArea>
                {item.titleImageSrc && (
                  <TitleImage
                    alt={`${item.title} title`}
                    src={item.titleImageSrc}
                    titleImageHeight={item.titleImageHeight}
                  />
                )}

                {!item.titleImageSrc && item.title && (
                  <DefaultTitle isLight={item.titleIsLight}>
                    {item.title}
                  </DefaultTitle>
                )}
              </TextArea>
              <div>
                <PriceBox
                  itemId={item.id}
                  price={item.price}
                  isInBasket={basketItems.includes(`${item.id}`)}
                  onToggleInCart={onToggleInCart}
                />
              </div>
            </SliderItem>
          );
        })}
      </SliderContainer>
      <OverlayImageBottomCover />
    </StyledSlider>
  );
};

export default Slider;
