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