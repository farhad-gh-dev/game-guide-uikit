import React from "react";
import {
  StyledAddToCardButton,
  ShoppingCardIconContainer,
} from "./AddToCardButton.styled";
import HexagonSmallScreen from "../Icons/HexagonSmallScreen";
import HexagonLaptopScreen from "../Icons/HexagonLaptopScreen";
import HexagonDesktopScreen from "../Icons/HexagonDesktopScreen";
import CustomIcon from "../../CustomIcon/CustomIcon";

export type AddToCardButtonProps = {
  isActive?: boolean;
  className?: string;
  onAddToCart?: () => void;
};

const AddToCardButton: React.FC<AddToCardButtonProps> = ({
  isActive = false,
  className = "",
  onAddToCart = () => {},
}) => {
  return (
    <StyledAddToCardButton
      aria-label={isActive ? "Remove From Cart" : "Add To Cart"}
      className={className}
      isActive={isActive}
      onClick={() => onAddToCart()}
    >
      <HexagonSmallScreen />
      <HexagonLaptopScreen />
      <HexagonDesktopScreen />

      <ShoppingCardIconContainer>
        <CustomIcon
          className="shopping-card-icon"
          type="shopping-card"
          strokeColor="primary"
          height="15px"
          heightLaptop="20px"
          heightDesktop="25px"
        />
      </ShoppingCardIconContainer>
    </StyledAddToCardButton>
  );
};

export default AddToCardButton;
