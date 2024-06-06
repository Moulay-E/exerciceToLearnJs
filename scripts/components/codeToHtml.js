import { fetchData } from "../fetch/fetchData.js";
export async function codeToHtml(arrLocation , arrayName){
    let dataCodeUrl = arrLocation;
    try{
        const data = await fetchData(dataCodeUrl);
        if(data && data[arrayName]){
            data[arrayName].forEach(item=>{
                Object.entries(item).forEach(([key,value]) =>{
                    const element = document.getElementById(key);
                    if(element){
                        element.textContent = value;
                    }
                    else{
                        console.log(`Élément avec l'ID ${key} introuvable.`);
                    }
                })
            })
        }
        else{
            console.log("Le tableau demandé n'existe pas dans le JSON.");
        }
    }catch (error) {
        console.error(`Error loading the code snippet ${error}`);
    }
}
