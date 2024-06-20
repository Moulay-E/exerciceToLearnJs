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