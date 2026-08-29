var panels = document.querySelectorAll(".panel");

function hideAll() {
    for (var i = 0; i < panels.length; i++) {
        panels[i].classList.add("hidden");
    }

    document.getElementById("tableSection").classList.add("hidden");
    document.getElementById("statusMessage").classList.add("hidden");
}

function showMessage(message, error) {
    var messageBox = document.getElementById("statusMessage");

    messageBox.textContent = message;
    messageBox.classList.remove("hidden");

    if (error) {
        messageBox.classList.add("error");
        messageBox.classList.remove("success");
    } else {
        messageBox.classList.add("success");
        messageBox.classList.remove("error");
    }
}

function showProducts(products, title) {
    hideAll();

    var tableSection = document.getElementById("tableSection");
    var tableBody = document.getElementById("productsTableBody");

    tableSection.classList.remove("hidden");
    document.getElementById("tableTitle").textContent = title;

    tableBody.innerHTML = "";

    if (!products || products.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6">No products found.</td>
            </tr>
        `;

        return;
    }

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var row = document.createElement("tr");

        row.innerHTML = `
            <td class="cell-id">${product.id}</td>
            <td>${product.name}</td>
            <td class="cell-price">${product.price}</td>
            <td>${product.category}</td>
            <td class="cell-qty">${product.quantity}</td>
            <td class="actions-cell">
                <button class="btn btn-small btn-secondary action-update" data-id="${product.id}">
                    Update
                </button>
                <button class="btn btn-small btn-danger action-delete" data-id="${product.id}">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    }
}

document.getElementById("productsTableBody").addEventListener("click", function (event) {

    var id = event.target.getAttribute("data-id");

    if (!id) return;

    var product = getProductById(Number(id));

    if (!product) return;

    if (event.target.classList.contains("action-update")) {
        setupUpdateMode();

        document.getElementById("productIdInput").value = product.id;
        document.getElementById("productNameInput").value = product.name;
        document.getElementById("productPriceInput").value = product.price;
        document.getElementById("productCategoryInput").value = product.category;
        document.getElementById("productQuantityInput").value = product.quantity;
    }

    if (event.target.classList.contains("action-delete")) {
        var result = deleteProduct(Number(id));

        if (typeof result === "string") {
            if (result.indexOf("cancelled") === -1) showMessage(result, true);

            return;
        }

        showMessage("Product deleted successfully!", false);

        showProducts(
            getAllProducts(),
            document.getElementById("tableTitle").textContent
        );
    }
});

function clearInputs() {
    document.getElementById("productIdInput").value = "";
    document.getElementById("productNameInput").value = "";
    document.getElementById("productPriceInput").value = "";
    document.getElementById("productCategoryInput").value = "";
    document.getElementById("productQuantityInput").value = "";
}

function setupAddMode() {
    hideAll();

    document.getElementById("productForm").classList.remove("hidden");
    document.getElementById("productFormTitle").textContent = "Add Product";
    document.getElementById("productIdField").classList.add("hidden");

    document.getElementById("addProductBtn").disabled = false;
    document.getElementById("updateProductBtn").disabled = true;
}

function setupUpdateMode() {
    hideAll();

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
        showMessage(result, true);
    } else {
        showMessage(`Product added successfully with ID: ${result.id}`, false);
        clearInputs();
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
        showMessage(result, true);
    } else {
        showMessage("Product updated successfully!", false);
        clearInputs();
    }
});

document.getElementById("cancelProductFormBtn").addEventListener("click", hideAll);

document.getElementById("searchBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var keyword = document.getElementById("searchKeywordInput").value;
    var result = filterProducts(keyword);

    showProducts(result, `Search Results for '${keyword}'`);
});

document.getElementById("cancelSearchBtn")
    .addEventListener("click", hideAll);

document.getElementById("deleteProductBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var id = Number(document.getElementById("deleteIdInput").value);
    var result = deleteProduct(id);

    if (typeof result === "string") {
        showMessage(result, true);
    } else {
        showMessage("Product deleted successfully!", false);
        document.getElementById("deleteIdInput").value = "";
    }
});

document.getElementById("cancelDeleteBtn")
    .addEventListener("click", hideAll);

document.getElementById("findByIdBtn").addEventListener("click", function (event) {
    event.preventDefault();

    var id = Number(document.getElementById("showByIdInput").value);
    var product = getProductById(id);

    if (product) {
        showProducts(
            [product],
            `Product Details (ID: ${id})`
        );
    } else {
        hideAll();
        showMessage("Error: Product not found.", true);
    }
});

document.getElementById("cancelShowByIdBtn")
    .addEventListener("click", hideAll);

document.getElementById("menuAddBtn").addEventListener("click", function () {
    setupAddMode();
    clearInputs();
});

document.getElementById("menuShowAllBtn").addEventListener("click", function () {
    showProducts(getAllProducts(), "All Products");
});

document.getElementById("menuShowByIdBtn").addEventListener("click", function () {
    hideAll();

    document.getElementById("showByIdForm").classList.remove("hidden");
    document.getElementById("showByIdInput").value = "";
});

document.getElementById("menuUpdateBtn").addEventListener("click", function () {
    setupUpdateMode();
    clearInputs();
});

document.getElementById("menuDeleteBtn").addEventListener("click", function () {
    hideAll();

    document.getElementById("deleteForm").classList.remove("hidden");
    document.getElementById("deleteIdInput").value = "";
});

document.getElementById("menuSearchBtn").addEventListener("click", function () {
    hideAll();

    document.getElementById("searchForm").classList.remove("hidden");
    document.getElementById("searchKeywordInput").value = "";
});