const getTime = (node) => {
  const t = new Date(node.fields?.dateForSort).getTime();
  return Number.isNaN(t) || t <= 0 ? null : t;
};

const sortResources = (nodes, sortOption) => {
  if (sortOption === "relevance") return nodes;

  const direction = sortOption === "oldest" ? 1 : -1;
  return nodes.slice().sort((a, b) => {
    const ta = getTime(a);
    const tb = getTime(b);
    if (ta === null && tb === null) return 0;
    if (ta === null) return 1;
    if (tb === null) return -1;
    return direction * (ta - tb);
  });
};

const paginateResources = (items, currentPage, postsPerPage) => {
  if (!(postsPerPage > 0)) return items;
  const last = currentPage * postsPerPage;
  return items.slice(last - postsPerPage, last);
};

module.exports = { getTime, sortResources, paginateResources };