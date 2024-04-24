function darkModeSwitch(){
//a method of DOMTokenList for add a class or remove if present
document.body.classList.toggle("darkMode");
}

function showCode() {
    let btnToShowCode = document.getElementById("showMoreId");
    let codeToShow = document.getElementById("codeContainerId")
    if (btnToShowCode) {
        btnToShowCode.classList.toggle("hide");
        btnToShowCode.classList.toggle("flexDisplay");
    } else {
        console.error("L'élément bouton avec l'ID " + showMoreId + " n'existe pas.");
    }
    
    if (codeToShow) {
        codeToShow.classList.toggle("hide");
        codeToShow.classList.toggle("flexDisplay");
    } else {
        console.error("L'élément conteneur de code avec l'ID " + codeContainerId + " n'existe pas.");
    }
    console.log("show code");
}

// document.querySelectorAll('.ulParent > li').forEach(function(menuItem) {
//     menuItem.addEventListener('mouseenter', function() {
//         this.querySelector('.hide').classList.remove('hide');
//     });
//     menuItem.addEventListener('mouseleave', function() {
//         this.querySelector('.hide').classList.add('hide');
//     });
// });
