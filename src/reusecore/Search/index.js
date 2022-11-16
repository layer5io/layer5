import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React from "react";
import { SearchWrapper } from "./searchbox.style";
import Button from "../../reusecore/Button";
import { DebounceInput } from "react-debounce-input";

const SearchBox = ({
  searchQuery,
  searchData,
  hideFilter,
  setHideFilter,
  paginate,
  currentPage,
  classnames
}) => {
  const handleChange = (e) => {
    if (hideFilter != undefined && setHideFilter != undefined) {
      if (e.target.value.length > 0) {
        setHideFilter(true);
      } else {
        setHideFilter(false);
      }
    }
    if (
      e.target.value.length > 0 &&
      paginate != undefined &&
      currentPage != undefined &&
      currentPage != 1
    )
      paginate(1);
    searchData(e);
  };
  return (
    <SearchWrapper>
      <div className={`search-box ${classnames ? classnames.join(" ") : ""}`}>
        <DebounceInput
          type="text"
          value={searchQuery}
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => handleChange(e)}
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
