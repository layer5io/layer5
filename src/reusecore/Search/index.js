import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React, { useEffect } from "react";
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

  useEffect(() => {
    const inputElement = document.getElementById("search-input");
    if (inputElement && searchQuery !== "") {
      inputElement.focus();
    }
  }, []);

  return (
    <SearchWrapper>
      <div className={`search-box ${classnames ? classnames.join(" ") : ""}`}>
        <DebounceInput
          type="text"
          value={searchQuery}
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => handleChange(e)}
          placeholder="Search..."
          id="search-input"
        />
        <Button aria-label="search icon">
          <FaSearch />
        </Button>
      </div>
    </SearchWrapper>
  );
};

export default SearchBox;
