import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React, { useId, useRef } from "react";
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
  classnames,
  focusSearch,
  ariaLabel = "Search",
  id,
  name,
  autoComplete = "off",
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const inputName = name || id || "search";
  const inputRef = useRef(null);

  const handleSearchClick = (e) => {
    if (e && typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

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
    if (searchData) {
      searchData(e);
    }
  };

  return (
    <SearchWrapper>
      <div className={`search-box ${classnames ? classnames.join(" ") : ""}`}>
        <DebounceInput
          id={inputId}
          name={inputName}
          type="text"
          value={searchQuery}
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => handleChange(e)}
          placeholder="Search..."
          autoFocus={focusSearch}
          aria-label={ariaLabel}
          autoComplete={autoComplete}
          inputRef={inputRef}
        />
        <Button type="button" aria-label="Search" onClick={handleSearchClick}>
          <FaSearch aria-hidden="true" />
        </Button>
      </div>
    </SearchWrapper>
  );
};

export default SearchBox;
