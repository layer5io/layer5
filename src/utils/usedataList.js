import * as JsSearch from "js-search";
import { useState, useEffect, useRef } from "react";
const useDataList = (
  data,
  setSearchQuery,
  searchQuery,
  paramsIndex,
  paramSearch,
) => {
  const [dataList, setDataList] = useState(data);
  const [searchResults, setSearchResults] = useState([]);
  const queryResults = searchQuery ? searchResults : dataList;

  // The TF-IDF index is the expensive part of a search (it walks and
  // tokenizes every document up front) - built lazily on the first real
  // keystroke instead of eagerly on mount, since most renders of this hook
  // (embedded previews, limited-count sections, visitors who never search)
  // never need it at all. Invalidated whenever the underlying dataset
  // changes so a stale index is never served.
  const searchIndexRef = useRef(null);

  useEffect(() => {
    searchIndexRef.current = null;
  }, [dataList]);

  const getSearchIndex = () => {
    if (!searchIndexRef.current) {
      const dataToSearch = new JsSearch.Search(paramSearch);
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
      dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
      dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(paramSearch);
      dataToSearch.addIndex(paramsIndex);
      dataToSearch.addIndex("body");
      dataToSearch.addDocuments(dataList);
      searchIndexRef.current = dataToSearch;
    }
    return searchIndexRef.current;
  };

  const searchData = (e) => {
    const queryResult = getSearchIndex().search(e.target.value);
    setSearchQuery(e.target.value.trim());
    setSearchResults(queryResult);
  };

  return { queryResults, searchData, setDataList, dataList };
};

export default useDataList;
