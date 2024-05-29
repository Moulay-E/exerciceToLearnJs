
function createDynamiquePage(){
    document.querySelectorAll(".menu__container__bar a");
}

const routes = {
    404: "<p> page not found </p>",
    "/": "<p>HOME </p>",
    "/string": "<p> string </p>",
    "/number": "<p> number </p>",
    "/algo": "<p> algo </p>"
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    const targetPath = event.target.href;
    window.history.pushState({}, "",targetPath )
    handleLocation();
}

const handleLocation = async()=> {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
   document.getElementById("generateContentJs").innerHTML = route;
   console.log("handle exe");

}

window.onpopstate = handleLocation;
window.route = route;

document.addEventListener('DOMContentLoaded', (event) => {

    handleLocation();
});