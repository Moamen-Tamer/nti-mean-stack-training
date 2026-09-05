// Task 2
import { API_URL, display } from "./modules.js";

const getPosts = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", API_URL);

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const data = JSON.parse(xhr.response);

                console.log(`GET SUCCESS: ${JSON.stringify(data)}`);

                display("GET", `Fetched ${data.length} posts successfully.`);
            } catch (error) {
                console.log(`error: ${error.message}`);
            }
        } else {
            console.error("Request failed with status:", xhr.status);
        }
    });

    xhr.addEventListener("error", () => {
        console.log("request never reached the server.", xhr.statusText);
    });

    xhr.send();
};

const createPost = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", API_URL);
    
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.response);

            console.log(`POST Success: ${JSON.stringify(data)}`);

            display("POST", `Created post with ID: ${data.id}`);
        }
    });

    const newPost = {
        title: "post title",
        body: "post body",
        userId: 1
    };
    
    xhr.send(JSON.stringify(newPost));
};

const updatePost = (postNumber) => {
    const xhr = new XMLHttpRequest();

    const updateUrl = `${API_URL}/${postNumber}`;
    
    xhr.open("PUT", updateUrl);

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const data = JSON.parse(xhr.response);

            console.log(`PUT Success: ${JSON.stringify(data)}`);

            display("PUT", `Updated post ID ${postNumber} with new title: "${data.title}"`);
        }
    });

    const updatedData = {
        id: 1,
        title: "Updated post",
        body: "Updated using PUT",
        userId: 1
    };

    xhr.send(JSON.stringify(updatedData));
};

const deletePost = (postNumber) => {
    const xhr = new XMLHttpRequest();

    const deleteUrl = `${API_URL}/${postNumber}`;
    
    xhr.open("DELETE", deleteUrl);

    xhr.addEventListener("load", () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(`DELETE Success with status: ${xhr.status}`);

            display("DELETE", `Successfully deleted post ID ${postNumber} (Status: ${xhr.status})`);
        }
    });

    xhr.send();
};


getPosts();
createPost();
updatePost(1);
deletePost(1);