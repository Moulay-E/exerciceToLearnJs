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
        a.classList.add("footer__ul__a");
        if(e.title){
            a.textContent = e.title;
        }
        if(e.img){
            const image = document.createElement("img");
            image.classList.add("footer__ul__a__image");
            image.src = e.img;
            image.alt = e.imgAlt;
            a.appendChild(image);
        }

        li.appendChild(a);
        ul.appendChild(li);
    })
     footerTag.appendChild(ul);

}