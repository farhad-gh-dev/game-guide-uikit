import React, { useState } from "react";
import {
  StyledDropdown,
  StyledToggler,
  StyledMenu,
  StyledMenuItem,
} from "./Dropdown.styled";
import Text from "../Text/Text";

export type DropdownItem = {
  text?: string;
  url?: string;
};
export type DropdownProps = {
  items?: DropdownItem[];
  activeItemIndex?: number | undefined;
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  items = [],
  activeItemIndex,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (items.length === 0) return null;
  return (
    <StyledDropdown className={className}>
      <StyledToggler onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledToggler>
      {isOpen && items.length > 0 && (
        <StyledMenu>
          {items.map((i, index) => {
            return (
              <StyledMenuItem active={index === activeItemIndex}>
                <a href={i.url} title={i.text}>
                  <Text
                    isSpan
                    size="sm"
                    fontWeight="500"
                    textTransform="capitalize"
                    overflowEllipsis
                  >
                    {i.text}
                  </Text>
                </a>
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
