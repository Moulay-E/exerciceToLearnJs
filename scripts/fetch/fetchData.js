export async function fetchData(urlName){
    try{
        const response = await fetch(urlName);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json();
    }
    catch (error) {
        return console.log( `Error: ${error} loading the code snippet from ${urlOrJson}` )
    }
}

