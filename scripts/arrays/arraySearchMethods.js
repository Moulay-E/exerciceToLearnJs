function arrMethodsIndexOf() {
    const data = document.getElementById("arrMethodsIndexOfValueId").value;
    const showResult = document.getElementById("arrMethodsIndexOfIdResult");
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
    if(Number(data)){
        search = arr.find(moreThanData);
        result = `The number you have type : ${data}. </br>
                  The number greater than that : ${search} `;
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result}. `
}
function arrMethodsfindIndex() {
    const data = document.getElementById("arrMethodsfindIndexValueId").value;
    const showResult = document.getElementById("arrMethodsfindIndexIdResult");
    let arr =  [4, 9, 16, 25, 29];
    let result = "";
    let search;
    function moreThanData(value, index, array) {
        return value > data;
      }
    if(Number(data)){
        search = arr.findIndex(moreThanData);
        result = `The number you have type : ${data}. </br>
                  The index of number greater than that : ${search} `;
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result}. `
}
function arrMethodsindLast() {
    const data = document.getElementById("arrMethodsindLastValueId").value;
    const showResult = document.getElementById("arrMethodsindLastIdResult");
    let arr =  [27, 28, 30, 40, 42, 35, 30];
    let result = "";
    let search;
   
    if(Number(data)){
        search = arr.findLast(x => x > data);
        result = `The number you have type : ${data}. </br>
                  The number greater than that from the end : ${search} `;
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result}. `
}
function arrMethodsindLastIndex() {
    const data = document.getElementById("arrMethodsindLastIndexValueId").value;
    const showResult = document.getElementById("arrMethodsindLastIndexIdResult");
    let arr =  [27, 28, 30, 40, 42, 35, 30];
    let result = "";
    let search;
   
    if(Number(data)){
        search = arr.findLastIndex(x => x > data);
        result = `The number you have type : ${data}. </br>
                  The index of number greater than that from the end : ${search} `;
    }
    else {
        result = "The element is not present in the table";
    }
    showResult.innerHTML = ` ${result}. `
}