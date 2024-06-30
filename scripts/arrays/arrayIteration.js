function arrForEach() {
    const data = document.getElementById("arrForEachValueId").value;
    const showResult = document.getElementById("arrForEachIdResult");
    let arr =  [27, 28, 30, 40, 42, 35, 30];
    let result = "";

    arr.forEach( (element,index)=> {
        result += ` The index ${index} is : ${element} </br> `;
    })
    showResult.innerHTML = `</br> ${result}. `
}
function arrMap() {
    const data = document.getElementById("arrMapValueId").value;
    const showResult = document.getElementById("arrMapIdResult");
    let arr =  [45, 4, 9, 16, 25];
    
    const multiply = (e) => e * 2;
    let result = arr.map(multiply);
   
    showResult.innerHTML = ` The array element multiply by 2 </br> ${result}. `
}
function arrflatMap() {
    const data = document.getElementById("arrflatMapValueId").value;
    const showResult = document.getElementById("arrflatMapIdResult");
    let arr =  [45, 4, [9, 16], 25];
    let result ;
    let multiply = data;
    if(Number(data)){
        const multiplyFunction = (e) => Array.isArray(e) ? e.map(x => x*multiply) : [e * multiply] ;
         result = arr.flatMap(multiplyFunction);
    }
    else {
        result = "Type a number please"
    }
    
    showResult.innerHTML = ` The multiply number: ${multiply} .
    </br> The  array flated: ${result}. `
}
function arrFilter() {
    const data = document.getElementById("arrFilterValueId").value;
    const showResult = document.getElementById("arrFilterIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result ;
    if(Number(data)){
         result = arr.filter((e)=> e > data);
    }
    else {
        result = "Type a number please"
    }
    showResult.innerHTML = ` Your number: ${data} .
    </br> The  array filtered with your value: ${result}. `
}
function arrReduce() {
    const data = document.getElementById("arrReduceValueId").value;
    const showResult = document.getElementById("arrReduceIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result ;
    const addAllElement = (total,element, index, arr) => total + element;
    result = arr.reduce(addAllElement, 0);

    showResult.innerHTML = ` The array: ${arr} .
    </br> The  array with all added value: ${result}. `
}
function arrReduceRight() {
    const data = document.getElementById("arrReduceRightValueId").value;
    const showResult = document.getElementById("arrReduceRightIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result ;
    const addAllElement = (total,element, index, arr) => total + element;
    result = arr.reduceRight(addAllElement, 0);
    showResult.innerHTML = ` The array: ${arr} .
    </br> The  array with all added value: ${result}. `
}
function arrArrayFrom() {
    const data = document.getElementById("arrArrayFromValueId").value;
    const showResult = document.getElementById("arrArrayFromIdResult");
    let arr =  ["3", "AM", "THE", "REAL", "ONE"];
    let result = Array.from(arr);

    showResult.innerHTML = ` The array: [${arr}] .
    </br> The copy : [${result}]. `
}
function arrKey() {
    const data = document.getElementById("arrKeyValueId").value;
    const showResult = document.getElementById("arrKeyIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result  = "";
    let keys = arr.keys();
    for(let x of keys){
        result += ` The key :${x}. The Value: ${arr[x]} </br> `;
    };
    
    showResult.innerHTML = ` The array: ${arr} .
    </br> The  array converted to object: </br> ${result}. `
};
function arrEntries() {
    const data = document.getElementById("arrEntriesValueId").value;
    const showResult = document.getElementById("arrEntriesIdResult");
    let arr =  ["Banana", "Orange", "Apple", "Mango"];
    let result  = "";
    let fruits = arr.entries();
    for(let [index, value] of fruits){
        result += ` The key and value [${index}, ${value}].</br> `;
    };

    showResult.innerHTML = ` The array: [${arr}] .
    </br> How array.entries displays and stores results : </br> ${result}. `
};
function arrWith() {
    const data = document.getElementById("arrWithValueId").value;
    const showResult = document.getElementById("arrWithIdResult");
    let arr =  ["Banana", "Orange", "Apple", "Mango"];
    let result  = arr.with(1, data);

    
    // if(Number(data)){
    //      result = arr.filter((e)=> e > data);
    // }
    // else {
    //     result = "Type a number please"
    // }
    showResult.innerHTML = ` The array: [${arr}] .
    </br> How array.entries displays and stores results [${result}] . `
}