import { fetchData } from "./../fetch/fetchData.js";
export async function navList(){
    const url = "./../../data/dataNavLink.json" ;
    const data = await fetchData(url);

    const navArea = document.getElementById("navList");
    let result = "<h2>Menu Bar</h2>";
    data.navLink.forEach((e)=> {
        let html = ` <a class="menu__container__bar__list__element" href=${e.link}> ${e.title} </a>`
        result+= html;
    })
    navArea.innerHTML = result;
}
