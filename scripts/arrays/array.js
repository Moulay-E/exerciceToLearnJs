function arrayCreate() {
    const data = document.getElementById("arrayCreateValueId").value;
    const showResult = document.getElementById("arrayCreateIdResult");
    
    let arr = data.split(" ");
    showResult.innerHTML = `
    le tableau crée avec vos valeur : [${arr}] </br> `
}
function arrayNew() {
    const data = document.getElementById("arrayNewValueId").value;
    const showResult = document.getElementById("arrayNewIdResult");
    
    let arr = data.split(" ");
    showResult.innerHTML = `
    le tableau crée avec vos valeur : [${arr}] </br> `
}