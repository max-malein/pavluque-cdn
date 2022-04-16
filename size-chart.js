let buydiv = document.querySelector(".details-product-purchase");
let tableDiv = document.createElement("div");
buydiv.parentNode.insertBefore(tableDiv, buydiv);
let table = document.createElement("table");
table.id = "ttt";
table.className = "sizechart";
let header = table.createTHead();
let headers = [
  "Размер",
  "Обхват груди",
  "Обхват талии",
  "Обхват бедер",
  "Обхват лодыжки"
];
headers.forEach((h) => {
  let th = document.createElement("th");
  th.innerHTML = h;
  header.appendChild(th);
});

let rows = [
  ["XS", 82, 60, 86, 19],
  ["S", 88, 68, 93, 20],
  ["M", 92, 74, 96, 21],
  ["L", 98, 78, 100, 24],
  ["XL", 100, 80, 106, 25]
];
rows.forEach((rowData) => {
  let row = table.insertRow();
  rowData.forEach((d) => {
    let cell = row.insertCell();
    cell.innerHTML = d;
    cell.className = "data-cell";
  });
});
table.insertRow();
tableDiv.appendChild(table);
console.log(table);
