var allPanels = document.querySelectorAll(".panel");

function hideEverything() {
    for (var i = 0; i < allPanels.length; i++) {
        allPanels[i].classList.add("hidden");
    }

    document.getElementById("tableSection").classList.add("hidden");
    document.getElementById("statusMessage").classList.add("hidden");
}

function showStatus(text, isError) {
    var box = document.getElementById("statusMessage");

    box.textContent = text;
    box.classList.remove("hidden");

    if (isError === true) {
        box.classList.add("error");
        box.classList.remove("success");
    } else {
        box.classList.add("success");
        box.classList.remove("error");
    }
}

function showProductsTable(list, title) {
    hideEverything();

    var tableSection = document.getElementById("tableSection");
    var tableBody = document.getElementById("productsTableBody");

    tableSection.classList.remove("hidden");
    document.getElementById("tableTitle").textContent = title;

    tableBody.innerHTML = "";

    if (!list || list.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6">No products found.</td></tr>`;
        return;
    }

    for (var i = 0; i < list.length; i++) {
        var product = list[i];
        var row = document.createElement("tr");

        row.innerHTML = `
            <td class="cell-id">${product.id}</td>
            <td>${product.name}</td>
            <td class="cell-price">${product.price}</td>
            <td>${product.category}</td>
            <td class="cell-qty">${product.quantity}</td>
            <td class="actions-cell">
                <button class="btn btn-small btn-secondary update-btn" data-id="${product.id}">Update</button>
                <button class="btn btn-small btn-danger delete-btn" data-id="${product.id}">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    }
}

document.getElementById("productsTableBody").addEventListener("click", function (event) {
    var clickedId = event.target.getAttribute("data-id");

    if (!clickedId) {
        return;
    }

    var product = getProductById(Number(clickedId));

    if (!product) {
        return;
    }

    if (event.target.classList.contains("update-btn")) {
        openUpdateForm();

        document.getElementById("productIdInput").value = product.id;
        document.getElementById("productNameInput").value = product.name;
        document.getElementById("productPriceInput").value = product.price;
        document.getElementById("productCategoryInput").value = product.category;
        document.getElementById("productQuantityInput").value = product.quantity;
    }

    if (event.target.classList.contains("delete-btn")) {
        var result = deleteProduct(Number(clickedId));

        if (typeof result === "string") {
            if (result.indexOf("cancelled") === -1) {
                showStatus(result, true);
            }
            return;
        }

        showStatus("Product deleted successfully!", false);

        showProductsTable(
            getAllProducts(),
            document.getElementById("tableTitle").textContent
        );
    }
});

function clearForm() {
    document.getElementById("productIdInput").value = "";
    document.getElementById("productNameInput").value = "";
    document.getElementById("productPriceInput").value = "";
    document.getElementById("productCategoryInput").value = "";
    document.getElementById("productQuantityInput").value = "";
}

function openAddForm() {
    hideEverything();

    document.getElementById("productForm").classList.remove("hidden");
    document.getElementById("productFormTitle").textContent = "Add Product";
    document.getElementById("productIdField").classList.add("hidden");

    document.getElementById("addProductBtn").disabled = false;
    document.getElementById("updateProductBtn").disabled = true;
}

function openUpdateForm() {
    hideEverything();

    document.getElementById("productForm").classList.remove("hidden");
    document.getElementById("productFormTitle").textContent = "Update Product";
    document.getElementById("productIdField").classList.remove("hidden");

    document.getElementById("addProductBtn").disabled = true;
    document.getElementById("updateProductBtn").disabled = false;
}

document.getElementById("addProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var result = createProduct(
        document.getElementById("productNameInput").value,
        document.getElementById("productPriceInput").value,
        document.getElementById("productCategoryInput").value,
        document.getElementById("productQuantityInput").value
    );

    if (typeof result === "string") {
        showStatus(result, true);
    } else {
        showStatus(`Product added successfully with ID: ${result.id}`, false);
        clearForm();
    }
});

document.getElementById("updateProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var result = updateProduct(
        Number(document.getElementById("productIdInput").value),
        document.getElementById("productNameInput").value,
        document.getElementById("productPriceInput").value,
        document.getElementById("productCategoryInput").value,
        document.getElementById("productQuantityInput").value
    );

    if (typeof result === "string") {
        showStatus(result, true);
    } else {
        showStatus("Product updated successfully!", false);
        clearForm();
    }
});

document.getElementById("cancelProductFormBtn").addEventListener("click", hideEverything);

document.getElementById("searchBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var keyword = document.getElementById("searchKeywordInput").value;
    var result = filterProducts(keyword);

    showProductsTable(result, `Search Results for '${keyword}'`);
});

document.getElementById("cancelSearchBtn").addEventListener("click", hideEverything);

document.getElementById("deleteProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var id = Number(document.getElementById("deleteIdInput").value);
    var result = deleteProduct(id);

    if (typeof result === "string") {
        showStatus(result, true);
    } else {
        showStatus("Product deleted successfully!", false);
        document.getElementById("deleteIdInput").value = "";
    }
});

document.getElementById("cancelDeleteBtn").addEventListener("click", hideEverything);

document.getElementById("findByIdBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var id = Number(document.getElementById("showByIdInput").value);
    var product = getProductById(id);

    if (product) {
        showProductsTable([product], `Product Details (ID: ${id})`);
    } else {
        hideEverything();
        showStatus("Error: Product not found.", true);
    }
});

document.getElementById("cancelShowByIdBtn").addEventListener("click", hideEverything);

document.getElementById("menuAddBtn").addEventListener("click", function () {
    openAddForm();
    clearForm();
});

document.getElementById("menuShowAllBtn").addEventListener("click", function () {
    showProductsTable(getAllProducts(), "All Products");
});

document.getElementById("menuShowByIdBtn").addEventListener("click", function () {
    hideEverything();

    document.getElementById("showByIdForm").classList.remove("hidden");
    document.getElementById("showByIdInput").value = "";
});

document.getElementById("menuUpdateBtn").addEventListener("click", function () {
    openUpdateForm();
    clearForm();
});

document.getElementById("menuDeleteBtn").addEventListener("click", function () {
    hideEverything();

    document.getElementById("deleteForm").classList.remove("hidden");
    document.getElementById("deleteIdInput").value = "";
});

document.getElementById("menuSearchBtn").addEventListener("click", function () {
    hideEverything();

    document.getElementById("searchForm").classList.remove("hidden");
    document.getElementById("searchKeywordInput").value = "";
});