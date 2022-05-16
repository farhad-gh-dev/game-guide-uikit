import React, { useState } from "react";
import { StyledDropdown, MenuToggler, Menu, MenuItem } from "./Dropdown.styled";
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
      <MenuToggler onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </MenuToggler>
      {isOpen && items.length > 0 && (
        <Menu>
          {items.map((i, index) => {
            return (
              <MenuItem active={index === activeItemIndex}>
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
              </MenuItem>
            );
          })}
        </Menu>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
