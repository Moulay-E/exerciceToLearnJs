

function navBar(){
    let nav = document.getElementById("nav");
    let htmlToShow = `
    <div class="navigation__button">
    <div class="flexCenter">
        <a href="/index.html" > 
            <img class="navigation__home__img" src="/assets/home-pink-svg.svg" alt="home"/>
        </a> 
    </div>
    <div class="navigation__darkmode" id="darkModeBtn" onclick="darkModeSwitch()">
        <img class="navigation__darkmode__img" src="/assets/night-pink-mode-svg.svg" alt="dark-mode" />
    </div>

</div>

<div class="menu">
    <div class="menu__btnContainer flexCenter">
        <div class="menu__btnContainer__hamburgerContainer borderRadius">
            <div id="showHideMenu" class="menu__btnContainer__hamburgerContainer__hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    
    <div id="menuId" class=" hide menu__container">
        <div id="navList" class=" menu__container__bar flexColumn flexCenter">

        </div>
    </div>
</div>
    `
nav.innerHTML = htmlToShow;
}
navBar();