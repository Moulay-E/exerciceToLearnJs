function arrMethodsSort() {
    const data = document.getElementById("arrMethodsSortValueId").value;
    const showResult = document.getElementById("arrMethodsSortIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    arr.push(data);

    let result = arr.sort();
    showResult.innerHTML = `The alphabetical sorting array : ${result} . `
}

function arrMethodsReverse() {
    const data = document.getElementById("arrMethodsReverseValueId").value;
    const showResult = document.getElementById("arrMethodsReverseIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    arr.push(data);
    let result = Array.from(arr).reverse();
    let arrAlphabitOrder = Array.from(arr).sort();
    let arrInReverseAlphabitOrder = Array.from(arrAlphabitOrder).reverse();

    showResult.innerHTML = `The reverse array with your element : ${result} . </br>
        The alphatic sorted array with your element : ${arrAlphabitOrder} </br>
        The alphatic rveersed array with your element : ${arrInReverseAlphabitOrder} `
}
function arrMethodsToReversed() {
    const data = document.getElementById("arrMethodsToReversedValueId").value;
    const showResult = document.getElementById("arrMethodsToReversedIdResult");
    let arr =  ["Apple", "Orange", "Apple", "Mango", "Orange"];
    // let result = "";
    arr.push(data);
    let result = arr.toReversed();

    // if(search){
    //     result = "The element is present in the table";
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = `The reverse array with your element : ${result} . `
}
function arrMethodsNumericSort() {
    const data = document.getElementById("arrMethodsNumericSortValueId").value;
    const showResult = document.getElementById("arrMethodsNumericSortIdResult");
    let arr =  [40, 100, 1, 5, 25, 10];
    // let result = "";
    let asscendingOrder = Array.from(arr).sort(function(a,b){ return a - b});
    let descendingOrder = Array.from(arr).sort(function(a,b){ return b - a})

    // if(search){
    //     result = "The element is present in the table";
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = `The array  : ${arr} . </br>
        The array in asscending order : ${asscendingOrder} . </br>
        The array in descending order : ${descendingOrder} . `
}

