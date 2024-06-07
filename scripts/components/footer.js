import { fetchData } from "../fetch/fetchData.js";

export async function footer() {
    const url = "/data/dataFooter.json";
    const data = await fetchData(url) 

    const footerTag = document.getElementById("footer");
    const ul = document.createElement("ul");
    ul.classList.add("footer__ul");

    data.footer.forEach((e)=> {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = e.link;
        a.target = "_blank";
        a.textContent = e.title;
        li.appendChild(a);
        ul.appendChild(li);
    })
     footerTag.appendChild(ul);

}