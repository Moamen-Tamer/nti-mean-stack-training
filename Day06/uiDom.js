function id(elementId) {
    return document.getElementById(elementId);
}

function hideEverything() {
    document.querySelectorAll(".panel").forEach(function (panel) {
        panel.classList.add("hidden");
    });

    id("tableSection").classList.add("hidden");
    id("statusMessage").classList.add("hidden");
}

function showStatus(text, isError) {
    var box = id("statusMessage");
    
    box.textContent = text;
    box.classList.remove("hidden");
    box.classList.toggle("error", isError === true);
    box.classList.toggle("success", isError !== true);
}

function showProductsTable(list, title) {
    hideEverything();

    id("tableSection").classList.remove("hidden");
    id("tableTitle").textContent = title;

    if (!list || list.length === 0) {
        id("productsTableBody").innerHTML = `<tr><td colspan="6">No products found.</td></tr>`;

        return;
    }

    id("productsTableBody").innerHTML = list.map(function (product) {
        return `
            <tr>
                <td class="cell-id">${product.id}</td>
                <td>${product.name}</td>
                <td class="cell-price">${product.price}</td>
                <td>${product.category}</td>
                <td class="cell-qty">${product.quantity}</td>
                <td class="actions-cell">
                    <button class="btn btn-small btn-secondary update-btn" data-id="${product.id}">Update</button>
                    <button class="btn btn-small btn-danger delete-btn" data-id="${product.id}">Delete</button>
                </td>
            </tr>
        `;
    }).join("");
}

function clearForm() {
    ["productIdInput", "productNameInput", "productPriceInput", "productCategoryInput", "productQuantityInput"]
        .forEach(function (fieldId) {
            id(fieldId).value = "";
        });
}

function openAddForm() {
    hideEverything();

    id("productForm").classList.remove("hidden");
    id("productFormTitle").textContent = "Add Product";
    id("productIdField").classList.add("hidden");
    id("addProductBtn").disabled = false;
    id("updateProductBtn").disabled = true;
}

function openUpdateForm() {
    hideEverything();

    id("productForm").classList.remove("hidden");
    id("productFormTitle").textContent = "Update Product";
    id("productIdField").classList.remove("hidden");
    id("addProductBtn").disabled = true;
    id("updateProductBtn").disabled = false;
}

id("productsTableBody").addEventListener("click", function (event) {
    var clickedId = event.target.getAttribute("data-id");

    if (!clickedId) return;

    var product = getProductById(Number(clickedId));

    if (!product) return;

    if (event.target.classList.contains("update-btn")) {
        openUpdateForm();

        id("productIdInput").value = product.id;
        id("productNameInput").value = product.name;
        id("productPriceInput").value = product.price;
        id("productCategoryInput").value = product.category;
        id("productQuantityInput").value = product.quantity;
    }

    if (event.target.classList.contains("delete-btn")) {
        deleteProduct(Number(clickedId));

        showStatus("Product deleted successfully!", false);
        showProductsTable(getAllProducts(), id("tableTitle").textContent);
    }
});

id("addProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var result = createProduct(id("productNameInput").value, id("productPriceInput").value, id("productCategoryInput").value, id("productQuantityInput").value);

    showStatus(`Product added successfully with ID: ${result.id}`, false);
    clearForm();
});

id("updateProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    updateProduct(Number(id("productIdInput").value), id("productNameInput").value, id("productPriceInput").value, id("productCategoryInput").value, id("productQuantityInput").value);

    showStatus("Product updated successfully!", false);
    clearForm();
});

id("cancelProductFormBtn").addEventListener("click", hideEverything);

id("searchBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var keyword = id("searchKeywordInput").value;

    showProductsTable(filterProducts(keyword), `Search Results for '${keyword}'`);
});

id("cancelSearchBtn").addEventListener("click", hideEverything);

id("deleteProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    deleteProduct(Number(id("deleteIdInput").value));

    showStatus("Product deleted successfully!", false);
    id("deleteIdInput").value = "";
});

id("cancelDeleteBtn").addEventListener("click", hideEverything);

id("findByIdBtn").addEventListener("click", function (event) {
    event.preventDefault();
    
    var productId = Number(id("showByIdInput").value);
    var product = getProductById(productId);

    if (product) {
        showProductsTable([product], `Product Details (ID: ${productId})`);
    } else {
        hideEverything();
        showStatus("Error: Product not found.", true);
    }
});

id("cancelShowByIdBtn").addEventListener("click", hideEverything);

id("menuAddBtn").addEventListener("click", function () {
    openAddForm();
    clearForm();
});

id("menuShowAllBtn").addEventListener("click", function () {
    showProductsTable(getAllProducts(), "All Products");
});

id("menuShowByIdBtn").addEventListener("click", function () {
    hideEverything();
    id("showByIdForm").classList.remove("hidden");
    id("showByIdInput").value = "";
});

id("menuUpdateBtn").addEventListener("click", function () {
    openUpdateForm();
    clearForm();
});

id("menuDeleteBtn").addEventListener("click", function () {
    hideEverything();
    id("deleteForm").classList.remove("hidden");
    id("deleteIdInput").value = "";
});

id("menuSearchBtn").addEventListener("click", function () {
    hideEverything();
    id("searchForm").classList.remove("hidden");
    id("searchKeywordInput").value = "";
});