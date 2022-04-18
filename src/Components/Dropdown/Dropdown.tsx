import React, { useState } from "react";
import {
  StyledDropdown,
  StyledToggler,
  StyledMenu,
  StyledMenuItem,
} from "./Dropdown.styled";
import Text from "../Text/Text";

type DropdownItem = {
  text?: string;
  url?: string;
};
type Props = {
  items?: DropdownItem[];
  activeItemIndex?: number;
};

export const Dropdown: React.FC<Props> = ({
  items = [],
  activeItemIndex = 0,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StyledDropdown>
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
