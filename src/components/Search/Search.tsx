import React from "react";
import { SearchInput, SearchWrapper } from "./StyledComponents";

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("");
  function handleInputChange(e: any) {
    setSearchValue(e.target.value);
  }
  return (
    <SearchWrapper>
      <SearchInput
        placeholder="Search by account, token,ENS..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </SearchWrapper>
  );
};

export default Search;
