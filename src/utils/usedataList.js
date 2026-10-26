import * as JsSearch from "js-search";
import { useState, useEffect, useRef } from "react";
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
  const pendingText = useRef(null);
  const queryResults = searchQuery && searchQuery.trim() ? searchResults : dataList;
  useEffect(() => {
    rebuildIndex();
  }, [dataList]);

  useEffect(() => {
    rebuildIndex();
  }, []);

  useEffect(() => {
    if (pendingText.current !== null && typeof search.search === "function") {
      setSearchResults(search.search(pendingText.current.trim()));
      pendingText.current = null;
    }
  }, [search]);

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
    setSearchQuery(text);
    if (typeof search.search !== "function") {
      pendingText.current = text;
      return;
    }
    setSearchResults(search.search(text.trim()));
  };

  const searchData = (e) => {
    searchByText(e.target.value);
  };

  return {
    queryResults,
    searchData,
    searchByText,
    isLoading,
    setDataList,
    dataList,
  };
};

export default useDataList;
