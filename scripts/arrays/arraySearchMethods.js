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
function arrMethodsIncludes() {
    const data = document.getElementById("arrMethodsIncludesValueId").value;
    const showResult = document.getElementById("arrMethodsIncludesIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    let result = "";

    let search = arr.includes(data);
    if(search){
        result = "The element is present in the table";
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result} . `
}
function arrMethodsFind() {
    const data = document.getElementById("arrMethodsFindValueId").value;
    const showResult = document.getElementById("arrMethodsFindIdResult");
    let arr =  [4, 9, 16, 25, 29];
    let result = "";
    let search;
    function moreThanData(value, index, array) {
        return value > data;
      }
    // search = arr.find(data);
    if(Number(data)){
        search = arr.find(moreThanData);
        result = "The element is present in the table";
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result} . `
}