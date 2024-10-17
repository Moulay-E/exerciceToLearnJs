import { basePath } from "../../config.js";
export async function fetchData(urlName){
    try{
        const fullUrl = basePath + urlName;
        console.log("full", fullUrl);
        const response = await fetch( fullUrl );
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json();
    }
    catch (error) {
        return console.log( `Error: ${error} loading the code snippet from ${urlOrJson}` )
    }
}

