import React from "react";
import Button from "../../Button/Button";
import Text from "../../Text/Text";
import {
  StyledPriceBox,
  StyledTextArea,
  StyledPrice,
  StyledButtonContainer,
} from "./PriceBox.styled";

type Props = {
  itemId?: string | number;
  price?: number;
  onBuyHandler?: (itemId?: string | number) => void;
};

const PriceBox: React.FC<Props> = ({
  itemId,
  price = 0,
  onBuyHandler = () => {},
}) => {
  return (
    <StyledPriceBox>
      <StyledTextArea>
        <Text size={"sm"} fontWeight={"700"}>
          Price
        </Text>
        <StyledPrice>
          <Text size="md" fontWeight="900">
            {price ? "$" + price : "Free"}
          </Text>
          <div></div>
        </StyledPrice>
      </StyledTextArea>
      <StyledButtonContainer>
        <Button active={true} onClick={() => onBuyHandler(itemId)}>
          Buy
        </Button>
      </StyledButtonContainer>
    </StyledPriceBox>
  );
};

export default PriceBox;
