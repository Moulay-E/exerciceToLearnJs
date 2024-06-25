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
    arr.push(data);
    let result = arr.toReversed();

    showResult.innerHTML = `The reverse array with your element : ${result} . `
}
function arrMethodsNumericSort() {
    const data = document.getElementById("arrMethodsNumericSortValueId").value;
    const showResult = document.getElementById("arrMethodsNumericSortIdResult");
    let arr =  [40, 100, 1, 5, 25, 10];
    let asscendingOrder = Array.from(arr).sort(function(a,b){ return a - b});
    let descendingOrder = Array.from(arr).sort(function(a,b){ return b - a})

    showResult.innerHTML = `The array  : ${arr} . </br>
        The array in asscending order : ${asscendingOrder} . </br>
        The array in descending order : ${descendingOrder} . `
}
function arrMethodsRandomOrder() {
    const data = document.getElementById("arrMethodsRandomOrderValueId").value;
    const showResult = document.getElementById("arrMethodsRandomOrderIdResult");
    let arr =  [40, 100, 1, 5, 25, 10];
    let randomOrder = Array.from(arr).sort(function(a,b){ return 0.5 -Math.random()});

    let arrRealRandom = Array.from(arr);
    for (let i = arrRealRandom.length; i > 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = arrRealRandom[i];
        arrRealRandom[i] = arrRealRandom[j];
        arrRealRandom[j] = temp;
    }

    showResult.innerHTML = `The array  : ${arr} . </br>
        The array in random order : ${randomOrder} .</br>
        The Fisher Yates random method array  : ${arrRealRandom} . `
}
function arrMethodsMathMinMax() {
    const data = document.getElementById("arrMethodsMathMinMaxValueId").value;
    const showResult = document.getElementById("arrMethodsMathMinMaxIdResult");
    let arr =  [40, 100, 1, 5, 25, 10];
    function mathMinOrMax(methods, arr){
        return methods.apply(null,arr);
    }
    let mathMin = mathMinOrMax(Math.min, arr);
    let mathMax = mathMinOrMax(Math.max, arr);

    showResult.innerHTML = `The array  : ${arr} . </br>
        The min value in the array : ${mathMin} . </br>
        The max value in the array : ${mathMax} . `
}
function arrMethodsHandMadeMinMax() {
    const data = document.getElementById("arrMethodsHandMadeMinMaxValueId").value;
    const showResult = document.getElementById("arrMethodsHandMadeMinMaxIdResult");
    let arr =  [40, 100, 1, 5, 25, 10];
    function handMade(infinity,condition, arr){
        let len = arr.length;
        let minOrMax = infinity;
        while(len--){
            if(condition(arr[len], minOrMax)){
               minOrMax = arr[len] ;
            }
        }
        return minOrMax
    }
    const isSmaller = (a,b) => a < b;
    const isBigger = (a,b) => a > b;
    let mathMin = handMade(Infinity,isSmaller, arr);
    let mathMax = handMade(-Infinity,isBigger, arr);

    showResult.innerHTML = `The array  : ${arr} . </br>
        The min value in the array : ${mathMin} . </br>
        The max value in the array : ${mathMax} . `
}
function arrMethodsSortObject() {
    const data = document.getElementById("arrMethodsSortObjectValueId").value;
    const showResult = document.getElementById("arrMethodsSortObjectIdResult");
    let resultOriginal = "";
    let resultSorted = "";
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];
    let carsCopy = cars.map(car => ({...car}));
    carsCopy.sort(function(a,b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if(x < y){return -1;}
        if(x > y){return 1;}
        return 0;
    });
    function cleanHtml(value){
        return value.type + " " + value.year + " | ";
    }
    cars.forEach(car =>{
        resultOriginal += cleanHtml(car)
    });
    carsCopy.forEach(car =>{
        resultSorted += cleanHtml(car)
    });

    showResult.innerHTML = "<br>"+
    "The object : " + resultOriginal
    + "</br>" + "In alphabetical order: " +
    resultSorted;
}

