// Task 1
export const API_URL = "https://jsonplaceholder.typicode.com/posts";

export function display(action, data) {
    const container = document.getElementById("api-results");
    
    if (container) {
        const div = document.createElement("div");
        
        div.innerHTML = `<strong>${action} Request:</strong> ${data}`;

        container.appendChild(div);
    }
}