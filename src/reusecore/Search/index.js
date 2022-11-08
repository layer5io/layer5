import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React from "react";
import { SearchWrapper } from "./searchbox.style";
import Button from "../../reusecore/Button";
import { DebounceInput } from "react-debounce-input";

const SearchBox = ({
  searchQuery,
  searchData,
  paginate,
  currentPage
}) => {
  const handleChange = (e) => {
    // if (e.target.value.length > 0 && currentPage != 1) paginate(1);
    searchData(e);
  };
  return (
    <SearchWrapper>
      <div className="search-box">
        <DebounceInput
          type="text"
          value={searchQuery}
          minLength={1}
          debounceTimeout={500}
          onChange={handleChange}
          placeholder="Search here..."
        />
        <Button>
          <FaSearch />
        </Button>
      </div>
    </SearchWrapper>
  );
};

export default SearchBox;
