import React from "react";
import {
  StyledItemCard,
  ImageContainer,
  RatingContainer,
  TitleContainer,
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
      <ImageContainer backgroundImage={imageSrc}>
        {rating !== 0 && (
          <RatingContainer>
            <Rating rating={rating} />
          </RatingContainer>
        )}
      </ImageContainer>
      <TitleContainer>
        <Text size="md" overflowEllipsis fontWeight="500" title={title}>
          {title}
        </Text>
      </TitleContainer>
    </StyledItemCard>
  );
};

export default ItemCard;
