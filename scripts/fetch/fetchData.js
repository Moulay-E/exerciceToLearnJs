export async function fetchData(urlName){
    try{
        const response = await fetch(urlName);
        return response.json();
    }
    catch (error) {
        return console.log( `Error: ${error} loading the code snippet from ${urlOrJson}` )
    }
}