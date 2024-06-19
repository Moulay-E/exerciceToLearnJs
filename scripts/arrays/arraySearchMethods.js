function arrMethodsindexOf() {
    const data = document.getElementById("arrMethodsindexOfValueId").value;
    const showResult = document.getElementById("arrMethodsindexOfIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango"];
    
    let result = arr.indexOf(data);
    if(result === -1){
        result = "the element is not present in the table"
    }
    showResult.innerHTML = `The index of the element is : ${result} . `
}
function arrMethodslastIndexOf() {
    const data = document.getElementById("arrMethodslastIndexOfValueId").value;
    const showResult = document.getElementById("arrMethodslastIndexOfIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    
    let result = arr.lastIndexOf(data);
    if(result === -1){
        result = "the element is not present in the table"
    }
    showResult.innerHTML = `The index of the element is : ${result} . `
}