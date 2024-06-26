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
        // const isSmaller = (e) => Array.isArray(e) ? e.map(x => x*data) : [e * data] ;
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
function arrEvery() {
    const data = document.getElementById("arrEveryValueId").value;
    const showResult = document.getElementById("arrEveryIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result ;
    if(Number(data)){
        const addAllElement = (element, index, arr) => element < Number(data);
        result = arr.every(addAllElement);
    }
    else {
        result = "The element is not present in the table, or type a number";
    }
    showResult.innerHTML = ` The array: ${arr} .
    </br> If they are element smaller than ${data} : ${result}. `
}