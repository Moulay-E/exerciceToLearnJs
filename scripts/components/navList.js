import { fetchData } from "./../fetch/fetchData.js";
import { basePath } from "../../config.js";
export async function navList(){
    const url = "data/dataNavLink.json" ;
    const data = await fetchData(url);

    const navArea = document.getElementById("navList");
    let result = "<h2>Menu Bar</h2>";
    data.navLink.forEach((e)=> {
        let html = ` <a class="menu__container__bar__list__element" href=${basePath + e.link}> ${ e.title} </a>`
        result+= html;
    })
    navArea.innerHTML = result;
}
