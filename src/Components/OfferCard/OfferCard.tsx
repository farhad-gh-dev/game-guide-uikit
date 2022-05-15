import React from "react";
import {
  StyledOfferCard,
  StyledImageContainer,
  StyledCardImage,
  StyledRatingContainer,
  StyledTextArea,
  StyledTitleContainer,
  StyledPriceContainer,
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
  onAddToCard?: (itemData: {}) => void;
};

const OfferCard: React.FC<OfferCardProps> = ({
  itemData = {},
  className = "",
  onAddToCard = () => {},
}) => {
  return (
    <StyledOfferCard className={className}>
      <StyledImageContainer href={itemData.url} >
        <StyledCardImage CardImageSrc={itemData.imageSrc}>
          <div></div>
        </StyledCardImage>

        <StyledRatingContainer>
          <Raring rating={itemData.rating} />
        </StyledRatingContainer>

        <AddToCardButton onAddToCard={() => onAddToCard(itemData)} isActive={itemData.isInBasket}/>
      </StyledImageContainer>

      <StyledTextArea>
        <StyledTitleContainer>
          <a href={itemData.url}>
            <Heading h3 className="offer-card-title">
              {itemData.title ? itemData.title : "No Title"}
            </Heading>
          </a>

          {itemData.dropdownItems && (
            <Dropdown items={itemData.dropdownItems} />
          )}
        </StyledTitleContainer>

        <StyledPriceContainer>
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
        </StyledPriceContainer>
      </StyledTextArea>
    </StyledOfferCard>
  );
};

export default OfferCard;
