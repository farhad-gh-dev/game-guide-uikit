import React, { useState } from "react";
import {
  StyledSearchBar,
  StyledDivider,
  StyledInputContainer,
  StyledInput,
  StyledCloseButton,
} from "./SearchBar.styled";
import CustomIcon from "../CustomIcon/CustomIcon";

export type SearchBarProps = {
  onSearch?: (i: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch = () => {} }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onSearch(inputValue);
    }
  };

  return (
    <StyledSearchBar>
      <div onClick={() => setIsActive(true)}>
        <CustomIcon type="search" height="25px" heightDesktop="30px" />
      </div>
      <StyledDivider />

      <StyledInputContainer isActive={isActive}>
        <StyledInput
          placeholder="Search..."
          value={inputValue}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleSubmit(e)
          }
          onChange={(e) => setInputValue(e.target.value)}
        />
        <StyledCloseButton onClick={() => setIsActive(false)}>
          X
        </StyledCloseButton>
      </StyledInputContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
