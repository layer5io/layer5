import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React from "react";
import { SearchWrapper } from "./searchbox.style";
import Button from "../../reusecore/Button";


const SearchBox = ({searchQuery, searchData}) => {
  return(
    <SearchWrapper>
      <div className="search-box">
        <input type="text" value={searchQuery} onChange={searchData} placeholder="Search here..." />
        <Button>
          <FaSearch />
        </Button>
      </div>
    </SearchWrapper>
  );
};


export default SearchBox;