import React, { useState } from "react";
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
  className?: string;
  onToggleInCart?: (itemId?: string) => void;
};

const Slider: React.FC<SliderProps> = ({
  sliderItems = [],
  activeSlide = 1,
  className = "",
  onToggleInCart = () => {},
}) => {
  const [offsetX, setOffsetX] = useState("");
  const [offsetY, setOffsetY] = useState("");
  const friction = 1 / 60;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let followX = window.innerWidth / 2 - e.clientX;
    let followY = window.innerHeight / 2 - e.clientY;

    let x = 0,
      y = 0;
    x += (-followX - x) * friction;
    y += (followY - y) * friction;

    setOffsetX(`${x}`);
    setOffsetY(`${y}`);
  };

  let offset = {
    transform: `perspective(800px)
                rotateY(${offsetX}deg)
                rotateX(${offsetY}deg)`,
  };
  return (
    <StyledSlider>
      <SliderContainer className={className}>
        {sliderItems?.map((item, index) => {
          return (
            <SliderItem
              data-testid={`slide-${index + 1}`}
              active={activeSlide - 1 === index}
              backgroundImageSrc={item.backgroundImageSrc}
              key={item.id}
              onMouseMove={(e) => handleMouseMove(e)}
            >
              {item.overlayImageSrc && (
                <OverlayImage
                  style={offset}
                  alt={item.title}
                  src={item.overlayImageSrc}
                  imageHeight={item.overlayImageHeight}
                  imagePositionFromRight={item.overlayPositionFromRight}
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
