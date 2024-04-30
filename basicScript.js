function darkModeSwitch(){
//a method of DOMTokenList for add a class or remove if present
document.body.classList.toggle("darkMode");
}

//add eventListener on button to hide the btn and show the code, she he added to every btn, and use "this" to target the btn and the class who contain the code to show
// document.addEventListener('DOMContentLoaded',
 function ShowCodeAndHideHimself(){
    const showMoreBtn = document.querySelectorAll('.showMore');
    console.log(showMoreBtn);
    showMoreBtn.forEach(function(btn) {
        btn.addEventListener('click', function(){
            this.classList.toggle("hide");
            this.classList.toggle("flexDisplay");
            const parent = this.parentElement;
            const codeContainer = parent.querySelector(".codeContainerJs");
            if(codeContainer){
                codeContainer.classList.toggle("hide");
                codeContainer.classList.toggle("flexDisplay");
            }
            else {
                console.log("Element frère .codeContainerJs non trouvé");
            }
        })
    })
}
// )
//same as top but for hide the code and show the button
// document.addEventListener('DOMContentLoaded',
 function HideAndShowBtn(){
    const hideCode = document.querySelectorAll('.example__container__code__btn');
    hideCode.forEach(function(btn) {
        btn.addEventListener('click', function(){
            const parent = this.parentElement.parentElement.parentElement;
            const codeContainer = parent.querySelector(".codeContainerJs");
            const child = parent.querySelector(".showMore")
            if(codeContainer){
                codeContainer.classList.toggle("hide");
                codeContainer.classList.toggle("flexDisplay");
            }
            if(child){
                child.classList.toggle("hide");
                child.classList.toggle("flexDisplay");
            }
            else {
                console.log("Element grandParent et enfant  .codeContainerJs non trouvé");
            }
        })
    })
}
// )

  

