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
    // An active query's results were built from the old dataList - recompute
    // them against the new one immediately instead of waiting for the next
    // keystroke, otherwise queryResults keeps showing stale matches.
    if (searchQuery) {
      setSearchResults(getSearchIndex().search(searchQuery));
    } else {
      setSearchResults([]);
    }
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
    const trimmedQuery = e.target.value.trim();
    setSearchQuery(trimmedQuery);
    // A blank query has nothing to search - skip it so an empty keystroke
    // (or clearing the field) never forces the lazy index to build.
    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }
    setSearchResults(getSearchIndex().search(trimmedQuery));
  };

  return { queryResults, searchData, setDataList, dataList };
};

export default useDataList;
