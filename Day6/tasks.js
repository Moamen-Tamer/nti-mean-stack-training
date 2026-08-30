var products = [
    { id: 1, name: "Laptop", price: 35000, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 1000, category: "Electronics", quantity: 25 },
    { id: 3, name: "Notebook", price: 50, category: "Stationery", quantity: 100 },
    { id: 4, name: "Desk Lamp", price: 400, category: "Home", quantity: 0 }
];

var nextId = 5;

function createProduct(name, price, category, quantity) {
    var trimmedName = name ? name.trim() : "";
    var trimmedCategory = category ? category.trim() : "";

    if (trimmedName === "") return "Error: name is required";

    if (price <= 0 || isNaN(price)) return "Error: price must be greater than 0";

    if (quantity < 0 || !Number.isInteger(Number(quantity)) || isNaN(quantity)) return "Error: quantity must be 0 or more";

    var newProduct = {
        id: nextId++,
        name: trimmedName,
        price: Number(price),
        category: trimmedCategory,
        quantity: Number(quantity)
    };

    products.push(newProduct);
    
    return newProduct;
}

function getAllProducts() {
    return products;
}

function printProducts(list) {
    console.table(list);
}

function getProductById(id) {
    var product = products.find(function (product) {
        return product.id === Number(id);
    });

    return product || null;
}

function updateProduct(id, name, price, category, quantity) {
    var index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) return "Error: product not found";

    var product = products[index];

    if (name !== null && name.trim() !== "") product.name = name.trim();

    if (price !== null && price !== "") product.price = Number(price);

    if (category !== null && category.trim() !== "") product.category = category.trim();

    if (quantity !== null && quantity !== "") product.quantity = Number(quantity);

    return product;
}

function deleteProduct(id) {
    var index = products.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) return "Error: product not found";

    var confirmation = window.confirm("Are you sure you want to delete this product?");

    if (confirmation) {
        var removedItem = products.splice(index, 1)[0];

        return removedItem;
    } else {
        return "Error: Deletion cancelled";
    }
}

function filterProducts(keyword) {
    if (!keyword) return products;

    var lowerKeyword = keyword.trim().toLowerCase();

    var filtered = products.filter(function (product) {
        return product.name.toLowerCase().includes(lowerKeyword) ||
               product.category.toLowerCase().includes(lowerKeyword);
    });

    return filtered;
}