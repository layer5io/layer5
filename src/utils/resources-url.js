const getFiltersFromSearch = (search) =>
  new URLSearchParams(search).getAll("filter");

const getQueryFromSearch = (search) =>
  new URLSearchParams(search).get("q") || "";

const buildSearch = (search, { filters, q } = {}) => {
  const params = new URLSearchParams(search);
  if (filters !== undefined) {
    params.delete("filter");
    filters.forEach((value) => params.append("filter", value));
  }
  if (q !== undefined) {
    if (q) params.set("q", q);
    else params.delete("q");
  }
  const query = params.toString();
  return query ? `?${query}` : "";
};

module.exports = { getFiltersFromSearch, getQueryFromSearch, buildSearch };
