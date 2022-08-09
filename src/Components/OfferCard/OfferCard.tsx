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
import Raring from "../Rating/Rating";
import Heading from "../Heading/Heading";
import Dropdown, { type DropdownItem } from "../Dropdown/Dropdown";
import Text from "../Text/Text";

export type offerItem = {
  id?: string;
  title?: string;
  imageSrc?: string,
  url?: string;
  price?: number;
  rating?: number;
  isInBasket?: boolean;
  dropdownItems?: DropdownItem[];
};

export type OfferCardProps = {
  className?: string;
  itemData?: offerItem;
  onToggleInCart?: (itemData: {}) => void;
};

const OfferCard: React.FC<OfferCardProps> = ({
  itemData = {},
  className = "",
  onToggleInCart = () => {},
}) => {
  return (
    <StyledOfferCard className={className}>
      <ImageContainer>
        <CardImage CardImageSrc={itemData.imageSrc} href={itemData.url}>
          <div></div>
        </CardImage>

        <RatingContainer>
          <Raring rating={itemData.rating} />
        </RatingContainer>

        <AddToCardButton onAddToCart={() => onToggleInCart(itemData)} isActive={itemData.isInBasket}/>
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
