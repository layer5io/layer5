import * as JsSearch from "js-search";
import { useState,useEffect } from "react";

const useDataList = (data,setSearchQuery, searchQuery, paramsIndex, paramSearch) => {
  const [dataList, setDataList] = useState(data.allMdx.nodes);
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const queryResults =
      searchQuery === "" || searchResults.length < 1 ? dataList : searchResults;

  useEffect(() => {
    rebuildIndex();
  }, [queryResults]);

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search(paramSearch);
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(paramSearch);
    dataToSearch.addIndex(paramsIndex);
    dataToSearch.addDocuments(dataList);
    setSearch(dataToSearch);
    setIsLoading(false);
  };

  const searchData = (e) => {
    const queryResult = search.search(e.target.value);
    setSearchQuery(e.target.value);
    setSearchResults(queryResult);
  };

  return [queryResults, searchData];
};

export default useDataList;