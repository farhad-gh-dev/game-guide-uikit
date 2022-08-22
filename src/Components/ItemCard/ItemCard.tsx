import React from "react";
import {
  StyledItemCard,
  ImageContainer,
  RatingContainer,
  TitleContainer,
} from "./ItemCard.styled";
import Text from "../Text/Text";
import Rating from "../Rating/Rating";

export type ItemCardInfo = {
  id?: string;
  title?: string;
  rating?: number;
  imageSrc?: string;
};

export type ItemCardProps = {
  cardInfo?: ItemCardInfo;
  className?: string;
};

const ItemCard: React.FC<ItemCardProps> = ({
  cardInfo = undefined,
  className = "",
}) => {
  return (
    <StyledItemCard href={"#"} className={className}>
      <ImageContainer backgroundImage={cardInfo?.imageSrc}>
        {cardInfo?.rating !== 0 && (
          <RatingContainer>
            <Rating rating={cardInfo?.rating} />
          </RatingContainer>
        )}
      </ImageContainer>
      <TitleContainer>
        <Text
          size="md"
          overflowEllipsis
          fontWeight="500"
          title={cardInfo?.title}
        >
          {cardInfo?.title}
        </Text>
      </TitleContainer>
    </StyledItemCard>
  );
};

export default ItemCard;
