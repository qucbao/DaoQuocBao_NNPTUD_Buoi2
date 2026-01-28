const API_URL = "https://api.escuelajs.co/api/v1/products";

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        renderTable(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function renderTable(data) {
    const tbody = document.getElementById("product-body");
    tbody.innerHTML = "";

    data.forEach(item => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.category?.name ?? ""}</td>
      <td>
        <img src="${item.images?.[0] ?? ""}" width="60" />
      </td>
      <td>${new Date(item.creationAt).toLocaleString()}</td>
    `;

        tbody.appendChild(tr);
    });
}

// Run when page loads
loadProducts();
