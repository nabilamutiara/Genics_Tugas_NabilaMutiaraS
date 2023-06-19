const apiURL = "https://jsonplaceholder.typicode.com/posts/5"
const fetchData = async (endpoint) => {
    try {
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        console.log(jsonData);
    }
    catch(e) {
        console.log(e);
    }
}

console.log("Starting Fetch Data...");
fetchData(apiURL);
console.log("Still Fetching Data...");