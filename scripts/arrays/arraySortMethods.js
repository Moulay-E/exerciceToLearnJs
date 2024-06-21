function arrMethodsSort() {
    const data = document.getElementById("arrMethodsSortValueId").value;
    const showResult = document.getElementById("arrMethodsSortIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    // let result = "";
    arr.push(data);

    let result = arr.sort();
    // if(search){
    //     result = "The element is present in the table";
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = `The alphabetical sorting array : ${result} . `
}
function arrMethodsReverse() {
    const data = document.getElementById("arrMethodsReverseValueId").value;
    const showResult = document.getElementById("arrMethodsReverseIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    // let result = "";
    arr.push(data);

    let result = arr.sort();
    // if(search){
    //     result = "The element is present in the table";
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = `The alphabetical sorting array : ${result} . `
}