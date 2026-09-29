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
  classnames,
  focusSearch,
  ariaLabel,
  "aria-label": aria_label,
  id = "search",
  name = "search",
  autoComplete = "off",
}) => {
  const accessibleLabel = ariaLabel || aria_label || "Search";

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
          id={id}
          name={name}
          type="text"
          value={searchQuery}
          minLength={1}
          debounceTimeout={500}
          onChange={(e) => handleChange(e)}
          placeholder="Search..."
          autoFocus={focusSearch}
          aria-label={accessibleLabel}
          autoComplete={autoComplete}
        />
        <Button type="button" aria-label="Search">
          <FaSearch />
        </Button>
      </div>
    </SearchWrapper>
  );
};

export default SearchBox;
