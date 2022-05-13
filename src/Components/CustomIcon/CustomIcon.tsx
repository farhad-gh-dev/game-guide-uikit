import React from "react";
import { StyledIcon } from "./CustomIcon.styled";
import ShoppingCardIcon from "./Icons/ShoppingCard";
import BellIcon from "./Icons/Bell";
import SearchIcon from "./Icons/Search";
import PlayIcon from "./Icons/Play";
import ArrowToLeft from "./Icons/ArrowToLeft";
import ArrowToRight from "./Icons/ArrowToRight";

export type IconTypes =
  | "shopping-card"
  | "bell"
  | "search"
  | "play"
  | "arrow-to-left"
  | "arrow-to-right";

export type CustomIconProps = {
  type?: IconTypes;
  /**
   * Also accepts "primary" as value
   */
  color?: string;
  /**
   * Also accepts "primary" as value
   */
  strokeColor?: string;
  width?: string;
  widthTablet?: string;
  widthDesktop?: string;
  height?: string;
  heightLaptop?: string;
  heightDesktop?: string;
};

const CustomIcon: React.FC<CustomIconProps> = ({ type, ...props }) => {
  return (
    <StyledIcon {...props}>
      <TargetIcon type={type} />
    </StyledIcon>
  );
};

const TargetIcon: React.FC<{ type?: IconTypes }> = ({ type = "" }) => {
  switch (type) {
    case "shopping-card":
      return <ShoppingCardIcon />;
    case "bell":
      return <BellIcon />;
    case "search":
      return <SearchIcon />;
    case "play":
      return <PlayIcon />;
    case "arrow-to-left":
      return <ArrowToLeft />;
    case "arrow-to-right":
      return <ArrowToRight />;
    default:
      return null;
  }
};

export default CustomIcon;
