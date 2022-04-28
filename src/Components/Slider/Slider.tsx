import React from "react";
import Text from "../Text/Text";
import PriceBox from "./PriceBox/PriceBox";
import {
  StyledSlider,
  StyledSliderItem,
  StyledTextArea,
  StyledTitleImage,
  StyledDefaultTitle,
  StyledDescription,
} from "./Slider.styled";

type Props = {
  titleImageSrc?: string;
  description?: string;
  price?: number;
};

const Slider: React.FC<Props> = ({
  titleImageSrc = "",
  description = "",
  price = "",
}) => {
  return (
    <StyledSlider>
      <StyledSliderItem>
        <StyledTextArea>
          {titleImageSrc ? (
            <StyledTitleImage src={titleImageSrc} title={titleImageSrc} />
          ) : (
            <StyledDefaultTitle>No Title</StyledDefaultTitle>
          )}
          <StyledDescription>
            <Text size="md">
              This Collection Includes 4 Versions Of All Call Of Duty & You Can
              Have Permanent Access To The 4 Versions Available In The
              Collection Buy Buying Online.
            </Text>
          </StyledDescription>
        </StyledTextArea>
        <div>
          <PriceBox />
        </div>
      </StyledSliderItem>
    </StyledSlider>
  );
};

export default Slider;
