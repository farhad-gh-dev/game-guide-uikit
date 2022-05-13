import React from "react";
import { StyledRating, StyledRatingContent } from "./Rating.styled";
import StarSvg from "./StarIcon";
import Text from "../Text/Text";

export type RatingProps = {
  rating?: number;
};

const Rating: React.FC<RatingProps> = ({ rating = 0.0 }) => {
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
