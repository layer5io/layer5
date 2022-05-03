import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import React from "react";
import { Search } from "./searchbox.style";
import Button from "../../reusecore/Button";


const SearchBox = ({searchQuery, searchData}) => {


  return(
    <Search>
      <div className="search-box">
        <input type="text" value={searchQuery} onChange={searchData} placeholder="Search here..." />
        <Button>
          <FaSearch />
        </Button>
      </div>
    </Search>
  );
};


export default SearchBox;