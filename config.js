// use the window object to check the url and adapt it, to not change anything between local url and published url
 export const basePath = window.location.pathname.includes("exerciceToLearnJs") ? "/exerciceToLearnJs/" : "/";
