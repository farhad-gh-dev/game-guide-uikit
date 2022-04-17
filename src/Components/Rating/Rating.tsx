import React from "react";
import { StyledRating, StyledRatingContent } from "./Rating.styled";
import StarSvg from "./StarIcon";
import { Text } from "..";

type Props = {
  rating?: number;
};

export const Rating: React.FC<Props> = ({ rating = 0.0 }) => {
  return (
    <StyledRating>
      <StyledRatingContent>
        <StarSvg />
        <Text isSpan size="lg">
          {rating.toFixed(1)}
        </Text>
      </StyledRatingContent>
    </StyledRating>
  );
};

export default Rating;
