// ASYNCHRONOUS JAVASCRIPT
// Callback Function
// setTimeout(myFunction, 1000);

// function myFunction() {
//     console.log("test");
// }

// console.log("set");

// Promises

// Async Await (ES2017)

// const second = () => {
//     console.log("Hello there");
// };

// ASYNC OPERATION: NETWORK REQUEST
const apiEndpoint = "https://randomuser.me/api";

// const response = fetch(apiEndpoint);
// console.log(response)

// fetch(apiEndpoint).then((res) => {
//     console.log(res.json)
// }).catch((error) => {
//     console.log(error);
// });

const fetchData = async (endpoint) => {
    // const data = await fetch(endpoint);
    // const jsonData = await data.json();
    // console.log(jsonData);
    try {
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        console.log(jsonData);
    }
    catch(e) {
        console.log(e);
    }
};

console.log("start");
fetchData(apiEndpoint);
console.log("still fetching data");

// const apiURL = "https://randomuser.me/api";

// const response = fetch(apiEndpoint);
// response.then((data) => data.json()).then((data) => console.log(data));