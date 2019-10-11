window.addEventListener("DOMContentLoaded", (event) => {
  // sort tools tables by descending order on the leftmost column by default
  sortTable("tools-table",0); // sort asc
  sortTable("tools-table",0); // sort desc
});

function sortTable(id, col) {
  let rows = document.querySelector("#" + id + " > tbody").rows;
  let asc = true;
  let didSort = false;
  let shouldSwap = (a, b) => { return asc ? a > b : a < b; }
  let text = (n) => { return rows[n].getElementsByTagName("td")[col].textContent.toLowerCase(); }
  let bubbleSort = () => {
    for (i = 0; i < rows.length-1; i++) {
      for (j = 0; j < rows.length-i-1; j++) {
        if (shouldSwap(text(j), text(j+1))) {
          rows[j].parentNode.insertBefore(rows[j+1], rows[j]);
          didSort = true;
        }
      }
    }
  };

  bubbleSort();
  if (!didSort) {
    asc = !asc;
    bubbleSort();
  }
}