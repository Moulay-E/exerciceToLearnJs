function darkModeSwitch(){
//a method of DOMTokenList for add a class or remove if present
document.body.classList.toggle("darkMode");
}

 function showHideMenu(){
    const ShowHideBtn = document.getElementById("showHideMenu");
    const menu = document.getElementById("menu-height");
    ShowHideBtn.addEventListener('click', function(){
        const menuToShowHide = document.getElementById("menuId");
        menu.classList.toggle("menu-active");
        menuToShowHide.classList.toggle("hide"); 
        menuToShowHide.classList.toggle("showFlex"); 
        ShowHideBtn.classList.toggle("open");
    })
} 