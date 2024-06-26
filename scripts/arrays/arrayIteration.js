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
    let multiply = Number(data);
    if(Number(data)){
        const multiplyFunction = (e) => Array.isArray(e) ? e.map(x => x*multiply) : [e * multiply] ;
         result = arr.flatMap(multiplyFunction);
    }
    else {
        result = "Type a number please"
    }
    
    // if(Number(data)){
    //     search = arr.findLastIndex(x => x > data);
    //     result = `The number you have type : ${data}. </br>
    //               The index of number greater than that from the end : ${search} `;
    // }
    // else {
    //     result = "The element is not present in the table";
    // }
    showResult.innerHTML = ` The multiply number: ${multiply} .
    </br> The  array flated: ${result}. `
}