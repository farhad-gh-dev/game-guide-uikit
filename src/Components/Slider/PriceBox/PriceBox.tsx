import React from "react";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import {
  StyledPriceBox,
  TextArea,
  PriceContainer,
  ButtonContainer,
} from "./PriceBox.styled";

export type PriceBoxProps = {
  itemId?: string;
  price?: number;
  isInBasket?: boolean;
  onToggleInCart?: (itemId?: string) => void;
};

const PriceBox: React.FC<PriceBoxProps> = ({
  itemId,
  price = 0,
  isInBasket = false,
  onToggleInCart = () => {},
}) => {
  return (
    <StyledPriceBox>
      <TextArea>
        <Text className="price-label" size={"sm"} fontWeight={"700"}>
          Price
        </Text>
        <PriceContainer>
          <Text size="md" fontWeight="900">
            {price ? "$" + price : "Free"}
          </Text>
          <div></div>
        </PriceContainer>
      </TextArea>
      <ButtonContainer>
        <Button
          variant={isInBasket ? "primary-outlined" : "primary"}
          onClick={() => onToggleInCart(itemId)}
        >
          {isInBasket ? "Drop It" : "Buy"}
        </Button>
      </ButtonContainer>
    </StyledPriceBox>
  );
};

export default PriceBox;
