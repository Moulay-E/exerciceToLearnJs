function loadAndDisplayCodeFromJson(arrayName){
    fetch("/data/dataCodeToShow.json")
    .then(response => response.json())
    .then(data => {
        if(data[arrayName] ){
            data[arrayName].forEach(item =>{
                // console.log(item);
                Object.entries(item).forEach(([key, value]) => {
                    // console.log(`Clé: ${key}, Valeur: ${value}`);
                    document.getElementById(key).textContent = value;
                })

            } )
        }
        else {
            console.log("Le tableau demandé n'existe pas dans le JSON.");
          }
    })
    .catch(error => console.log("Error loading the code snippet"))
}