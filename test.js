const API_URL = "http://localhost:5000/api";

fetch(API_URL, {
    "Access-Control-Allow-Origin": "*",
})
    .then((res) => res.json())
    .then((a) => console.log(a));
