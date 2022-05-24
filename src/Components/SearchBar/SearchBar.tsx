import React, { useState } from "react";
import {
  StyledSearchBar,
  Divider,
  InputContainer,
  SearchInput,
  CloseButton,
} from "./SearchBar.styled";
import CustomIcon from "../CustomIcon/CustomIcon";

export type SearchBarProps = {
  className?: string;
  onSearch?: (i: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  onSearch = () => {},
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      onSearch(inputValue);
    }
  };

  return (
    <StyledSearchBar className={className}>
      <div onClick={() => setIsActive(true)}>
        <CustomIcon type="search" height="25px" heightDesktop="30px" />
      </div>
      <Divider />

      <InputContainer isActive={isActive}>
        <SearchInput
          role="searchbox"
          placeholder="Search..."
          value={inputValue}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleSubmit(e)
          }
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CloseButton onClick={() => setIsActive(false)}>X</CloseButton>
      </InputContainer>
    </StyledSearchBar>
  );
};

export default SearchBar;
