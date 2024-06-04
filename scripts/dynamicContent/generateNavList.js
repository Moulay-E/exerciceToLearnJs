import { fetchData } from "../fetch/fetchData.js";
export async function generateNavList(){
    const url = "/data/dataNavLink.json" ;
    const data = await fetchData(url) 

    const navArea = document.getElementById("generateNavList");
    let result = "<h2>Menu Bar</h2>";
    data.navLink.forEach((e)=> {
        let html = ` <a href=${e.link}> ${e.title} </a>`
        result+= html;
    })
    navArea.innerHTML = result;
}