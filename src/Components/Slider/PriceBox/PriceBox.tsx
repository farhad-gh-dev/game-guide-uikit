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
  price?: number;
};

const PriceBox: React.FC<Props> = ({ price = 0 }) => {
  return (
    <StyledPriceBox>
      <StyledTextArea>
        <Text size={"sm"} fontWeight={"700"}>
          Price
        </Text>
        <StyledPrice>
          <Text size="md" fontWeight="900">
            $ 1,500
          </Text>
          <div></div>
        </StyledPrice>
      </StyledTextArea>
      <StyledButtonContainer>
        <Button active={true} isLink={true} href={"https://google.com"}>
          Buy
        </Button>
      </StyledButtonContainer>
    </StyledPriceBox>
  );
};

export default PriceBox;
