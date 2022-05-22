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
  itemId?: string | number;
  price?: number;
  onBuyHandler?: (itemId?: string | number) => void;
};

const PriceBox: React.FC<PriceBoxProps> = ({
  itemId,
  price = 0,
  onBuyHandler = () => {},
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
        <Button active={true} onClick={() => onBuyHandler(itemId)}>
          Buy
        </Button>
      </ButtonContainer>
    </StyledPriceBox>
  );
};

export default PriceBox;
