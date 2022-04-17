import React from "react";
import { StyledIcon } from "./CustomIcon.styled";
import ShoppingCardIcon from "./Icons/ShoppingCard";
import BellIcon from "./Icons/Bell";
import SearchIcon from "./Icons/Search";
import PlayIcon from "./Icons/Play";

type IconTypes = "shopping-card" | "bell" | "search" | "play";
type Props = {
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
  heightTablet?: string;
  heightDesktop?: string;
};

const CustomIcon: React.FC<Props> = ({ type, ...props }) => {
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
    default:
      return null;
  }
};

export default CustomIcon;
