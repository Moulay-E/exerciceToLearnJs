function darkModeSwitch(idContainer){
let colorToChange = document.getElementById(idContainer);
//a method of DOMTokenList for add a class or remove if present
document.body.classList.toggle("darkMode");
}

// document.querySelectorAll('.ulParent > li').forEach(function(menuItem) {
//     menuItem.addEventListener('mouseenter', function() {
//         this.querySelector('.hide').classList.remove('hide');
//     });
//     menuItem.addEventListener('mouseleave', function() {
//         this.querySelector('.hide').classList.add('hide');
//     });
// });
