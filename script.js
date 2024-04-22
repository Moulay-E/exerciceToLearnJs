let monTest = document.getElementById("test");
monTest.innerHTML = "<p> lalalalla </p>";
console.log("hello");


let bubbleArr = [0, 3, 1, 4, 34, 1, 5 , 34, 55, 355, 2 , 3443];

function bubbleSort(arr){
    const n = arr.length;
    let swapped;

    do {
        swapped = false; 
        let count = 0;
        for(let i = 0; i < n-1 ; i++){
            if(arr[i] > arr[i +1] ){
                [arr[i], arr[i + 1] ] = [ arr[i+1], arr[i] ];
                swapped = true;
                console.log(swapped);
                console.log(arr[i] );
            }
            count++;
        }
        
        console.log(count, "count");
    }
    while(swapped);
    console.log(arr, "arr");
    return arr;
}

// bubbleSort(bubbleArr);

let result = document.getElementById("result");
let resText = "";
let data = [1,3,1]
function showData(data){
    let valeurTyped = document.getElementById("champChiffre").value;
    let nombre = valeurTyped.split(",");
    let arrValueTyped = [];
    console.log(nombre);
    for(let i = 0; i < nombre.length; i++){
        arrValueTyped.push(parseFloat(nombre[i]))
    }
    console.log(arrValueTyped, "before");

    bubbleSort(arrValueTyped);

    result.innerHTML = arrValueTyped;

}