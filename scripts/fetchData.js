function loadCodeScippet(){
    fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
        document.querySelector("code").textContent = data.code
    })
    .catch(error => console.log("Error loading the code snippet"))
}