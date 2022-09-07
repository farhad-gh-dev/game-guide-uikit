import React from "react";
import {
  StyledOfferCard,
  ImageContainer,
  CardImage,
  RatingContainer,
  TextArea,
  TitleContainer,
  PriceContainer,
} from "./OfferCard.styled";
import AddToCardButton from "./AddToCardButton/AddToCardButton";
import Rating from "../Rating/Rating";
import Heading from "../Heading/Heading";
import Dropdown, { type DropdownItem } from "../Dropdown/Dropdown";
import Text from "../Text/Text";

export type offerItem = {
  id?: string;
  title?: string;
  imageSrc?: string;
  url?: string;
  price?: number;
  rating?: number;

  dropdownItems?: DropdownItem[];
};

export type OfferCardProps = {
  itemData?: offerItem;
  isInBasket?: boolean;
  className?: string;
  onToggleInCart?: (itemData: {}) => void;
};

const OfferCard: React.FC<OfferCardProps> = ({
  itemData = {},
  isInBasket = false,
  className = "",
  onToggleInCart = () => {},
}) => {
  return (
    <StyledOfferCard className={className} data-testid="offer-card">
      <ImageContainer>
        <CardImage
          aria-label={`${
            itemData.title ? itemData.title + " " : "Offer "
          }Poster`}
          CardImageSrc={itemData.imageSrc}
          href={itemData.url}
        >
          <div></div>
        </CardImage>

        <RatingContainer>
          <Rating rating={itemData.rating} />
        </RatingContainer>

        <AddToCardButton
          onAddToCart={() => onToggleInCart(itemData)}
          isActive={isInBasket}
        />
      </ImageContainer>

      <TextArea>
        <TitleContainer>
          <a href={itemData.url}>
            <Heading h3 className="offer-card-title">
              {itemData.title ? itemData.title : "No Title"}
            </Heading>
          </a>

          {itemData.dropdownItems && (
            <Dropdown items={itemData.dropdownItems} />
          )}
        </TitleContainer>

        <PriceContainer>
          <Text isSpan size="sm" fontWeight="700" className="offer-price-label">
            Price
          </Text>

          <Text fontWeight="700" className="offer-price">
            {itemData.price
              ? itemData.price === 0
                ? "Free"
                : "$ " + itemData.price
              : "$ 0"}
          </Text>
        </PriceContainer>
      </TextArea>
    </StyledOfferCard>
  );
};

export default OfferCard;
