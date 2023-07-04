//console.log("OK");

//const endpoint = "https://randomuser.me/api"

//fetch(endpoint).then((data) => console.log(data))

const endpoint = "https://randomuser.me/api"

async function getData(){
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

}

getData()