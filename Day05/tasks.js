var products = [
    { id: 1, name: "Laptop", price: 35000, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 1000, category: "Electronics", quantity: 25 },
    { id: 3, name: "Notebook", price: 50, category: "Stationery", quantity: 100 },
    { id: 4, name: "Desk Lamp", price: 400, category: "Home", quantity: 0 }
];

var nextId = 5;

var createProduct = (name, price, category, quantity) => {
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
};

var getAllProducts = () => products;

var printProducts = (list) => console.table(list);

var getProductById = (id) => {
    var product = products.find((product) => product.id === Number(id));
    
    return product || null;
};

var updateProduct = (id, name, price, category, quantity) => {
    var index = products.findIndex((product) => product.id === id);

    if (index === -1) return "Error: product not found";

    var product = products[index];

    if (name !== null && name.trim() !== "") product.name = name.trim();
    
    if (price !== null && price !== "") product.price = Number(price);
    
    if (category !== null && category.trim() !== "") product.category = category.trim();
    
    if (quantity !== null && quantity !== "") product.quantity = Number(quantity);

    return product;
};

var deleteProduct = (id) => {
    var index = products.findIndex((product) => product.id === id);

    if (index === -1) return "Error: product not found";

    var confirmation = window.confirm("Are you sure you want to delete this product?");
    
    if (confirmation) {
        var removedItem = products.splice(index, 1)[0];

        return removedItem;
    } else {
        return "Error: Deletion cancelled";
    }
};

var filterProducts = (keyword) => {
    if (!keyword) return products;
    
    var lowerKeyword = keyword.trim().toLowerCase();
    
    var filtered = products.filter((product) => {
        return product.name.toLowerCase().includes(lowerKeyword) || 
               product.category.toLowerCase().includes(lowerKeyword);
    });
    
    return filtered;
};

var startApp = () => {
    var choice = -1;

    while (choice !== 0) {
        var menu = "===== NTI Mini Store =====\n" +
                   "1) Add product\n" +
                   "2) Show all products\n" +
                   "3) Show product by ID\n" +
                   "4) Update product\n" +
                   "5) Delete product\n" +
                   "6) Search / Filter\n" +
                   "0) Exit\n" +
                   "Choose a number:";
                   
        var input = window.prompt(menu);
        
        if (input === null) {
            choice = 0;
            break;
        }
        
        choice = Number(input);

        switch (choice) {
            case 1:
                var name = window.prompt("Enter product name:");
                var price = window.prompt("Enter product price:");
                var category = window.prompt("Enter product category:");
                var quantity = window.prompt("Enter product quantity:");
                var createResult = createProduct(name, price, category, quantity);

                console.log(createResult);
                break;
                
            case 2:
                var all = getAllProducts();
                printProducts(all);
                break;
                
            case 3:
                var idToFind = window.prompt("Enter product ID:");
                var product = getProductById(idToFind);
                
                console.log(product ? product : "Product not found");
                break;
                
            case 4:
                var idToUpdate = Number(window.prompt("Enter product ID to update:"));
                var newName = window.prompt("Enter new name (leave empty to keep current):");
                var newPrice = window.prompt("Enter new price (leave empty to keep current):");
                var newCategory = window.prompt("Enter new category (leave empty to keep current):");
                var newQuantity = window.prompt("Enter new quantity (leave empty to keep current):");
                var updateResult = updateProduct(idToUpdate, newName, newPrice, newCategory, newQuantity);

                console.log(updateResult);
                break;
                
            case 5:
                var idToDelete = Number(window.prompt("Enter product ID to delete:"));
                var deleteResult = deleteProduct(idToDelete);

                console.log(deleteResult);
                break;
                
            case 6:
                var keyword = window.prompt("Enter keyword to search:");
                var searchResult = filterProducts(keyword);

                printProducts(searchResult);
                break;
                
            case 0:
                console.log("Exiting App...");
                break;
                
            default:
                window.alert("Invalid choice, please enter a number from 0 to 6.");
                console.log("Invalid choice entered.");
        }
    }
};

startApp();