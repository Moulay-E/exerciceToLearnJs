import { fetchData } from "./../fetch/fetchData.js";
import { basePath } from "../../config.js";

export async function footer() {
    const url = "data/dataFooter.json";
    const data = await fetchData(url) 

    const footerTag = document.getElementById("footer");
    const ul = document.createElement("ul");
    ul.classList.add("footer__ul");

    data.footer.forEach((e)=> {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = e.link;
        a.target = "_blank";
        a.classList.add("footer__ul__a");
        if(e.title){
            const h4 = document.createElement("h4");
            h4.classList.add("footer__ul__a__h4")
            h4.textContent = e.title;
            a.appendChild(h4);
        }
        if(e.img){
            const image = document.createElement("img");
            image.classList.add("footer__ul__a__image");
            image.src = basePath + e.img;
            image.alt = e.imgAlt;
            a.appendChild(image);
        }

        li.appendChild(a);
        ul.appendChild(li);
    })
     footerTag.appendChild(ul);

}