import React from "react";
import { StyledRating, RatingContent } from "./Rating.styled";
import StarSvg from "./StarIcon";
import Text from "../Text/Text";

export type RatingProps = {
  rating?: number;
  className?: string;
};

const Rating: React.FC<RatingProps> = ({ rating = 0.0, className = "" }) => {
  return (
    <StyledRating className={className} data-testid="rating">
      <RatingContent>
        <StarSvg />
        <Text isSpan size="lg">
          {rating.toFixed(1)}
        </Text>
      </RatingContent>
    </StyledRating>
  );
};

export default Rating;
