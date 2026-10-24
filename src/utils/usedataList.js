import * as JsSearch from "js-search";
import { useState, useEffect } from "react";
const useDataList = (
  data,
  setSearchQuery,
  searchQuery,
  paramsIndex,
  paramSearch
) => {
  const [dataList, setDataList] = useState(data);
  const [search, setSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const queryResults = searchQuery ? searchResults : dataList;
  useEffect(() => {
    rebuildIndex();
  }, [dataList]);

  useEffect(() => {
    rebuildIndex();
  }, []);

  const rebuildIndex = () => {
    const dataToSearch = new JsSearch.Search(paramSearch);
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(paramSearch);
    dataToSearch.addIndex(paramsIndex);
    dataToSearch.addIndex("body");
    dataToSearch.addDocuments(dataList);
    setSearch(dataToSearch);
    setIsLoading(false);
  };

  const searchByText = (text) => {
    if (!search || typeof search.search !== "function") return;
    setSearchQuery(text.trim());
    setSearchResults(search.search(text));
  };

  const searchData = (e) => {
    searchByText(e.target.value);
  };

  return { queryResults, searchData, searchByText, isLoading, setDataList, dataList };
};

export default useDataList;
