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
  var obj = [event.target];
  var newElement = document.createElement("SPAN");
  newElement.setAttribute("class",`show ${id}`);
  
  let arrowFunc = (elementObj) => {
    var existingArrow = document.getElementsByClassName(`${id}`);
    if(existingArrow.length > 0){
      for(let i=0; i<existingArrow.length; i++)
        console.log(existingArrow[i].classList.add("hiddn"));
    }
    var symbol = asc ? "&#9652;" : "&#9662";
    if(elementObj[0].childNodes.length > 1)
      elementObj[0].removeChild(elementObj[0].childNodes[1]);
    newElement.innerHTML = symbol;
    elementObj[0].appendChild(newElement);
  }

  if (obj[0].tagName == "TH")
    arrowFunc(obj);
  else if(obj[0].tagName == "SPAN"){
    let newObj = [[obj[0]][0].parentNode];
    arrowFunc(newObj);
  }
}