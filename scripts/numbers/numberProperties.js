function numberEpsilon() {
    const data = document.getElementById("numberEpsilonValueId").value;
    const showResult = document.getElementById("numberEpsilonIdResult");
    let stringArr = data.split(" ");
    let result = 0;
    let dataInitial = "";

    stringArr.forEach((e)=>{
        // to prevent from adding other than a number as a stringArr
        result = (isNaN(Number(e))) ? result: result + Math.abs(Number(e));
        dataInitial += e + '|';
    });
    console.log(result);

    let UnderEpsilon = (result - result)  < Number.EPSILON;
    showResult.innerHTML = `Les nombres de base : ${dataInitial} . </br>
     Le total : ${result}. </br>
    Les erreur de calcul si il y en as sont elle plus petite que epsilon ? : ${UnderEpsilon} `
}
function numberMaxValue() {
    const data = document.getElementById("numberMaxValueValueId").value;
    const showResult = document.getElementById("numberMaxValueIdResult");
    let maxNumber = Number.MAX_VALUE;
    let result = (data * maxNumber);

    showResult.innerHTML = `Le nombre donnés : ${data} . </br>
     Le max number en js : ${maxNumber}. </br>
    La multiplication des deux: ${result} `
}
function numberMinValue() {
    const data = document.getElementById("numberMinValueValueId").value;
    const showResult = document.getElementById("numberMinValueIdResult");
    let minNumber = Number.MIN_VALUE;
    let result = (minNumber - data);

    showResult.innerHTML = `Le nombre donnés : ${data} . </br>
     Le max number en js : ${minNumber}. </br>
    La soustraction de minValue par le nombre: ${result} `
}
function numberMaxSafeInteger() {
    const data = document.getElementById("numberMaxSafeIntegerValueId").value;
    const showResult = document.getElementById("numberMaxSafeIntegerIdResult");
    let maxSafeInterger = Number.MAX_SAFE_INTEGER;
    let result = (maxSafeInterger * data);

    showResult.innerHTML = `Le nombre donnés : ${data} . </br>
     Le max number en js : ${maxSafeInterger}. </br>
    La multiplication de safeMaxInteger par le nombre: ${result} `
}