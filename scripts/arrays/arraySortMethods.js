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
    // let result = "";
    arr.push(data);
    let result = Array.from(arr).reverse();
    let arrAlphabitOrder = Array.from(arr).sort();
    let arrInReverseAlphabitOrder = Array.from(arrAlphabitOrder).reverse();

    // if(search){
    //     result = "The element is present in the table";
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = `The reverse array with your element : ${result} . </br>
        The alphatic sorted array with your element : ${arrAlphabitOrder} </br>
        The alphatic reveersed array with your element : ${arrInReverseAlphabitOrder} `
}