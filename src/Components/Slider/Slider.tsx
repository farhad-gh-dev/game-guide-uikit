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

export type SliderItem = {
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
  isInBasket?: boolean;
};

export type SliderProps = {
  sliderItems?: Array<SliderItem>;
  activeSlide?: number;
  overlayImage3DOffsets?: [xOffset: number, yOffset: number];
  className?: string;
  onToggleInCart?: (itemId?: string) => void;
};

const Slider: React.FC<SliderProps> = ({
  sliderItems = [],
  activeSlide = 1,
  overlayImage3DOffsets = [0, 0],
  className = "",
  onToggleInCart = () => {},
}) => {
  return (
    <StyledSlider>
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
                  alt={item.title}
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
                    alt={item.title}
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
                  isInBasket={item.isInBasket}
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
