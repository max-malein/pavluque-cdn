let buydiv = document.querySelector(".details-product-purchase");
let tableDiv = document.createElement("div");
tableDiv.innerHTML = "тестовая таблица";
buydiv.parentNode.insertBefore(tableDiv, buydiv);
let table = document.createElement("table");