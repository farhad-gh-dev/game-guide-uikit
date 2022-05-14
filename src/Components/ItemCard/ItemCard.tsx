import React from "react";
import {
  StyledItemCard,
  StyledImageBox,
  StyledRatingBox,
  StyledTitleBox,
} from "./ItemCard.styled";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

export type ItemCardProps = {
  title?: string;
  rating?: number;
  imageSrc?: string;
  className?: string;
};

const ItemCard: React.FC<ItemCardProps> = ({
  title = "",
  rating = 0,
  imageSrc = "",
  className = "",
}) => {
  return (
    <StyledItemCard href={"#"} className={className}>
      <StyledImageBox backgroundImage={imageSrc}>
        {rating !== 0 && (
          <StyledRatingBox>
            <Rating rating={rating} />
          </StyledRatingBox>
        )}
      </StyledImageBox>
      <StyledTitleBox>
        <Text size="md" overflowEllipsis fontWeight="500" title={title}>
          {title}
        </Text>
      </StyledTitleBox>
    </StyledItemCard>
  );
};

export default ItemCard;
